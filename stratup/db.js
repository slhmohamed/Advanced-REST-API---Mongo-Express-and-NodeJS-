'use strict';
const mongoose=require('mongoose');
const winston=require('winston');
module.exports = () => {
    mongoose.connect('mongodb://localhost/e_db',{
        useNewUrlParser:true,
        useFindAndModify:true,
        useUnifiedTopology:true,
        useCreateIndex:true
    }).then(()=>winston.info('Mongo db Connected.....'));
}