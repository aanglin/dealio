import Product from '@/models/products';
import db from '../../lib/connect'


export default async function handler(req, res) {
     db;
    res.json(await Product.find().exec());
       
}