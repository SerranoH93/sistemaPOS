const axios = require('axios');
const { Dog, Temperament } = require('../db');
const { Op } = require("sequelize");
const { API_KEY }= process.env;
const URL_API = `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`;
const getDogs = require('./getDogs')

const getDogsByName = async (req, res) => {
    try {
        const searchName = req.query.name;
        if (!searchName) {
            return getDogs(req, res);
        }
        const dogsFromDB = await Dog.findAll({
            where: {
                'name': {
                    [Op.iLike]: `%${searchName}%`
                }
            },
            include: Temperament
        });
        const localDogsToJSON = dogsFromDB.map(dog => {            
            const temperament = dog.temperaments || [];                       
            const newDog =  {
                ...dog.toJSON(),
                temperament: temperament.map(temperament => {
                    return temperament.name;                                                         
                })                              
            }
            delete newDog.temperaments
            return newDog                                  
        })        

        const { data } = await axios.get(URL_API);
        const dogsFromAPI = data.filter(dog => {
            return new RegExp(searchName, 'i').test(dog.name);
        })
        const newDogList = dogsFromAPI.map(dog => ({
            id: dog.id,
            name: dog.name,
            image: dog.image.url,
            height: dog.height.metric,
            weight: dog.weight.metric,
            life_span: dog.life_span,
            temperament: dog.temperament ? dog.temperament.split(',').map(a => a.trim()) : []
        }));
        let allDogs = localDogsToJSON.concat(newDogList);
        if(allDogs.length > 15) {
            allDogs = allDogs.slice(0, 15);
        }
        return res.status(200).json(allDogs);
    } catch (error) {
        return res.status(400).send(error.message)
    }
}

module.exports = getDogsByName;