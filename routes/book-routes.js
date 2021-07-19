const express = require('express');
const auth = require('../middelware/auth');
const { addBook, getBooks, getOneBook, updateBook, deleteBook } = require('../controllers/bookController');

const router = express.Router();
 /**
 * @swagger
 * /books:
 *   post:
 *     description: Create book
 *     parameters:
 *      - name: title
 *        description: title of the book
 *        in: formData
 *        required: true
 *        type: string
 *      - name: shortDescription
 *        description: shortDescription of the book
 *        in: formData
 *        required: true
 *        type: string
 *      - name: longDescription
 *        description: longDescription of the book
 *        in: formData
 *        required: true
 *        type: string
 *      - name: author
 *        description: author of the book
 *        in: formData
 *        required: true
 *        type: string
 *      - name: price
 *        description: price of the book
 *        in: formData
 *        required: true
 *        type: number
 *      - name: inStock
 *        description: Stock of the book
 *        in: formData
 *        required: true
 *        type: boolean
 *     responses:
 *       201:
 *         description: Created
 */
router.post('/book', auth, addBook);
/**
 * @swagger
 * /books:
 *   get:
 *     description: Get all books
 *     responses:
 *       200:
 *         description: Success
 * 
 */

router.get('/books', auth, getBooks);
/**
 * @swagger
 * /books/:id:
 *   get:
 *     description: Get one book by id
 *     parameters:
 *      - name: id
 *        description: identifiant of the book
 *        in: formData
 *        required: true
 *        type: string
 *     responses:
 *       200:
 *         description: Success
 * 
 */ 
router.get('/book/:id', auth, getOneBook);
/**
 * @swagger
 * /books/:id:
 *   put:
 *     description: update one book
 *     parameters:
 *      - name: id
 *        description: identifiant of the book
 *        in: formData
 *        required: true
 *        type: string
 *     responses:
 *       200:
 *         description: Success
 * 
 */ 
router.put('/book/:id', auth, updateBook);
/**
 * @swagger
 * /books/:id:
 *   delete:
 *     description: delete one book
 *     parameters:
 *      - name: id
 *        description: identifiant of the book
 *        in: formData
 *        required: true
 *        type: string
 *     responses:
 *       200:
 *         description: Success
 * 
 */ 
router.delete('/book/:id', auth, deleteBook);


module.exports = {
    routes: router
}