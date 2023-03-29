import { Schema, models, model } from 'mongoose';

const ProductSchema = new Schema({
    title: String,
    price: Number,
    description: String,
    category: String,
    image: String,
    rating: Number,
    count: Number,
})

const Product = models?.Product || model('Product', ProductSchema )

export default Product;