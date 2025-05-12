import express from 'express'
import productController from './src/controllers/products.controller.js'

const server = express()
const productControllers = new productController()

server.get('/', productControllers.getProducts);

server.use(express.static('src/views/'))

server.listen(5000, ()=>console.log('Server is Listening at 5000...'));