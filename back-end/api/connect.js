import {MongoClient} from 'mongodb'

const URL = "mongodb+srv://raphael__spotify:Lena.2023@cluster0.hejnd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URL);

export const db = client.db("spotifyAula");

//const songCollection = await db.collection('songs').find({}).toArray();
//console.log(songCollection)