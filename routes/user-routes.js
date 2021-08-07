const express=require('express');
const { addUser,curentUser } = require('../controllers/userController');
const auth = require('../middelware/auth');


const router =express.Router();
router.post('/register',addUser);

router.get('/curentUser:id',auth,curentUser)

module.exports={
    routes:router
}