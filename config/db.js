const mongoose=require("mongoose")

const connection=mongoose.connect('mongodb://0.0.0.0/ABHIWAN').then(()=>{
    console.log("Database is connected ");
})

module.exports=connection