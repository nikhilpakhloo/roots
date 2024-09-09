import mongoose from "mongoose";
let isConnected = false;
const connectToDb= async()=>{
    mongoose.set('strictQuery', true)
    if(!process.env.MONGODB_URI) return console.log('MongoDb URi not found')
        if(isConnected) return console.log("Db already Connected")


            try {
              await  mongoose.connect(process.env.MONGODB_URI)
                isConnected = true
                console.log("Connected to MongoDb")
                
            } catch (error) {
                console.log("Error Connecting ", error)
                
            }
}
export default connectToDb;