import  dbConnect  from '../../lib/connect';
import { buffer } from 'micro'
import  Order from '../../models/order'
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

async function handler(req,res) {
    await dbConnect;
    const signingSecret = process.env.Signing_SECRET
    const payload = await buffer(req);
    const signature = req.headers['stripe-signature'];
    const event = stripe.webhooks.constructEvent(payload, signature, signingSecret);

    if (event?.type === 'checkout.session.completed') {
      const metadata = event.data?.object?.metadata;
      const paymentStatus = event.data?.object?.payment_status;
      if (metadata?.orderId && paymentStatus === 'paid') {
       await Order.findByIdAndUpdate(metadata.orderId,{paid:1});
      }  
    }

    res.json('ok')
}
export default handler;

export const config = {
    api: {
        bodyParser: false, 
    }
}