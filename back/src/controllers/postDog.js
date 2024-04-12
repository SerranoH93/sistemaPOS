const { Dog, Temperament } = require('../db');

const postDog = async (req, res) => {
    try {
        const {name, image, height, weight, life_span, temperament} = req.body;
        if (name && image && height && weight && life_span) {
            const newDog = await Dog.create({
                name, image, height, weight, life_span
            });
            if(temperament && temperament.length) {
                for (let i = 0; i < temperament.length; i++) {
                    const temperamentId = temperament[i];
                    const temperamentGetted = await Temperament.findByPk(temperamentId);
                    await newDog.addTemperament(temperamentGetted);
                }
            }
            const recentDog = Dog.findAll();
            return res.status(200).json(recentDog);
        }
        return res.status(404).send("Missing Data");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = postDog;

// const postDog = async (req, res) => {
    
//     res.status(200).json("post Dog");
// }
// module.exports = postDog;