const mongoose = require("mongoose")
Report = mongoose.Schema({
    title:{
        type:String,
        required:[true,'Please Add a title']
    },
    description:{
        type:String,
        required:[true,'Please Add a description']
    },
    latitude:{
        type:Number,
        required:true
    },
    longitude:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:['New','In Progress','Resolved'],
        default:'New'
    }
},{timestamps:true})

module.exports = mongoose.model("Report",Report)