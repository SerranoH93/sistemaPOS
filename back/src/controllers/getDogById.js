const axios = require('axios');
const { Dog, Temperament } = require('../db');
const { API_KEY }= process.env;
const URL_API = `https://api.thedogapi.com/v1/breeds/`;


const getDogById = async (req, res) => {
    try {
        const dogId = req.params.id;
        const source = isNaN(dogId) ? "DB" : "API";

        if(source === "DB") {
            const searchOnDB = await Dog.findByPk(dogId, {
                include: Temperament
            })
            const onDBInJson = searchOnDB.toJSON();
            onDBInJson.temperament = onDBInJson.temperaments.map(a => a.name)
            delete onDBInJson.temperaments
            return res.status(200).json(onDBInJson);            
        } else {
            const response = await axios.get(`${URL_API}${dogId}?api_key=${API_KEY}`);
            const dogAPI = response.data;

            const dog = {
                id: dogAPI.id,
                name: dogAPI.name,
                image: `https://cdn2.thedogapi.com/images/${dogAPI.reference_image_id}.jpg`,
                height: dogAPI.height.metric,
                weight: dogAPI.weight.metric,
                life_span: dogAPI.life_span,
                temperament: dogAPI.temperament ? dogAPI.temperament.split(',').map(a => a.trim()) : []
            }
            
            return dog.name
            ? res.status(200).json(dog)
            : res.status(400).send('Not found')
        }
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = getDogById;

// const getDogById = async (req, res) => {
    
//     res.status(200).json("get dogs id");
// }
// module.exports = getDogById;