import mongoose from 'mongoose';

const uri = process.env.MONGODB_URI;
const options = {};

if (!uri) {
  throw new Error('Invalid environment variable: "MONGODB_URI"');
}

mongoose.connect(uri, options);

const dbConnect = mongoose.connection;

dbConnect.on('error', console.error.bind(console, 'connection error:'));
dbConnect.once('open', function() {
  console.log('You are Connected');
});

export default dbConnect;



// import { MongoClient } from 'mongodb'

// const uri = process.env.MONGODB_URI
// const options = {}

// let client
// let clientPromise

// if (!process.env.MONGODB_URI) {
//   throw new Error('Invalid environment variable: "MONGODB_URI"')
// }

// if (!process.env.MONGODB_URI) {
//   throw new Error('Please add your Mongo URI to .env.local')
// }

// if (process.env.NODE_ENV === 'development') {
//   // In development mode, use a global variable so that the value
//   // is preserved across module reloads caused by HMR (Hot Module Replacement).
//   if (!global._mongoClientPromise) {
//     client = new MongoClient(uri, options)
//     global._mongoClientPromise = client.connect()
//   }
//   clientPromise = global._mongoClientPromise
// } else {
//   // In production mode, it's best to not use a global variable.
//   client = new MongoClient(uri, options)
//   clientPromise = client.connect()
// }

// console.log('You are Connected')
// // Export a module-scoped MongoClient promise. By doing this in a
// // separate module, the client can be shared across functions.
// export default clientPromise