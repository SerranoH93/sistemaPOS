const axios = require('axios');
const { Temperament } = require('../db');
const { API_KEY }= process.env;
const URL_API = `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`;

const getTemperaments = async (req, res) => {
    try {
        const localTemperaments = await Temperament.findAll();            
        if (localTemperaments.length > 0) {
            return res.status(200).json(localTemperaments);
        } else {
            const {data} = await axios.get(URL_API);
            const temperamentsFromAPI = data.flatMap((dog) => {
                if(dog.temperament) {
                    return dog.temperament.split(", ").map(temperament => temperament.trim());
                }
                return []
            });
            const temperamentsGotten = [...new Set(temperamentsFromAPI)].sort();            
            const temperamentsToDB = await Temperament.bulkCreate(
                temperamentsGotten.map(temperament => ({ name: temperament }))
            );      
            return res.status(200).json(temperamentsToDB);
        }
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = getTemperaments;

// const getTemperaments = async (req, res) => {
    
//     res.status(200).json("get temperament");
// }
// module.exports = getTemperaments;