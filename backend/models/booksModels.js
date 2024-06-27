import mongoose from "mongoose"


const bookSchema = mongoose.Schema(
    {
        title:{
            type:String,
            required : true
        },
        author:{
            type:String,
            required : true
        }
        ,
        publishYear:{
            type:Number,
            required : true
        },
        statut: {
            type: Number,
            default: 1  
        }
    },
    {
        timestamps : true
    }
);

export const Book = mongoose.model("Books",bookSchema) 