import path from 'path'
import ProductModel from '../models/products.model.js'

export default class ProductController {
    getProducts(req, res){
        let products = ProductModel.get()
        res.render('products', {products: products})
    }
}