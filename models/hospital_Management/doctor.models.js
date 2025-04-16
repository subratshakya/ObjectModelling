import mongoose from "mongoose";

const doctorSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    salary:{
        type:String,
        required:true
    },
    qualifications:{
        type:String,
        required:true,
    },
    experienceinyears:{
        type:Number,
        default:0
    },
    worksinhospitals:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Hospital",
    },],
}, {timestamps:true});

export const Doctor= mongoose.model('Doctor', doctorSchema);