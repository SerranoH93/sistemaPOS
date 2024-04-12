const { Router } = require('express');
const router = Router();
const getDogs = require('../controllers/getDogs');
const getDogsByName = require('../controllers/getDogsByName');
const getTemperaments = require('../controllers/getTemperaments');
const getDogById = require('../controllers/getDogById');
const postDog = require('../controllers/postDog');


router.get('/dogs', getDogsByName);
router.get('/dogs/temperaments', getTemperaments);
router.get('/dogs/:id', getDogById);
router.post('/dogs', postDog);



module.exports = router;
