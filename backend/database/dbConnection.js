import mongoose from "mongoose";

export const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName: "Restraunt_Reservation"
    }).then(()=>{
        console.log("Connected to DataBase Successfully! ");
    }).catch(err=>{
        console.log(`Some Error Occured while Connecting to DataBase ${err}`);
    });
};
