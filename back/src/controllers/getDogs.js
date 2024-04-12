const axios = require('axios');
const { Dog, Temperament } = require('../db');

const { API_KEY }= process.env;
const URL_API = `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`;

const getDogs = async (req, res) => {
    try {
        //*Se obtiene dogs desde local
        const localDogs = await Dog.findAll( { include: Temperament} );        
        const localDogsToJSON = localDogs.map(dog => {            
            const temperament = dog.temperaments || [];                       
            const newDog = {
                ...dog.toJSON(),
                temperament: temperament.map(temperament => {
                    return temperament.name;                                                         
                })                            
            }
            
            delete newDog.temperaments
            return newDog
        })
        

        //*Se obtiene dogs desde la API
        const { data } = await axios.get(URL_API);
        const dogsFromAPI = data.map(dog => ({
            id: dog.id,
            name: dog.name,
            image: dog.image.url,
            height: dog.height.metric,
            weight: dog.weight.metric,
            life_span: dog.life_span,
            temperament: dog.temperament ? dog.temperament.split(',').map(a => a.trim()) : []
        }));
        const dogsGotten = [...dogsFromAPI, ...localDogsToJSON];        
        return res.status(200).json(dogsGotten);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = getDogs;

// const getDogs = async (req, res) => {
    
//     res.status(200).json("get dogs");
// }
// module.exports = getDogs;