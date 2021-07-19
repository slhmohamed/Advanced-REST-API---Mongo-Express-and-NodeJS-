const mongoose=require('mongoose');
const Joi=require('joi');

const bookSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true 
    },
    shortDescreption:{
        type:String,
        required:true
    },
    longDescreption:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    inStock:{
        type:String, 
        default:true
    }
});
const Book = mongoose.model('Book',bookSchema);
function validateBook(book){
    const schema={
    title:Joi.string().min(5).max(200).required(),
    shortDescreption:Joi.string().min(5).max(200).required(),
    longDescreption:Joi.string().min(5).max(200).required(),
    author:Joi.string().min(5).max(200).required(),
    price:Joi.number().required(),
    inStock:Joi.boolean().required()
 
}
return  Joi.validate(book,schema)
}
exports.Book=Book
exports.validate=validateBook;