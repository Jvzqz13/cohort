import mongoose from "mongoose";

export async function conn(){
    try{
        await mongoose.connect(process.env.ATLAS_URI)
        console.log('Connected to MongoDB');
    } catch(error) {
        console.log(error.message);
    }
}











// OLD CODE
// import { MongoClient } from "mongodb";
// // this shows its defined
// console.log(process.env.ATLAS_URI);
// const connectionString = process.env.ATLAS_URI || "";
// const client = new MongoClient(connectionString); 
// let conn; 
// try {
//     conn = await client.connect();
//     console.log(`Connected to MongoDB`)
// } catch (e) {
//     console.error(e);
// }
// let db = conn.db("sample_training");
// export default db; 