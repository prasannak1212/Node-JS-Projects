import path from 'path'
import ProductModel from '../models/products.model.js'

export default class ProductController {
    getProducts(req, res){
        let products = ProductModel.get()
        return res.sendFile(path.join(path.resolve(), 'src', 'views', 'products.html'))
        // res.sendFile(path.join(path.resolve(), 'src', 'views', 'products.css'))
    }
}