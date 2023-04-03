import Product from '@/models/products';
import dbConnect from '../../lib/connect'


export default async function handler(req, res) {
     dbConnect;
     const {ids} = req.query;
     if (ids) {
        res.json( await Product.find({'_id':{$in:ids.split(',')}}).exec());
     }else {
         res.json(await Product.find().exec());
     }     
}