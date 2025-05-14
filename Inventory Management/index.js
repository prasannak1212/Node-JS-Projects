import express from 'express'
import productController from './src/controllers/products.controller.js'
import ejsLayouts from 'express-ejs-layouts'
import path from 'path'

const server = express()
const productControllers = new productController()

server.set('view engine', 'ejs');
server.set('views', path.join(path.resolve(), 'src', 'views'))

server.use(ejsLayouts)

server.get('/', productControllers.getProducts);

server.use(express.static('src/views/'))

server.listen(5000, ()=>console.log('Server is Listening at 5000...'));