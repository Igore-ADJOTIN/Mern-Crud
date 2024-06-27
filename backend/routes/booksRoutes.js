
import express from "express"
import { Book } from "../models/booksModels.js"
import mongoose from "mongoose"

const router = express.Router()
router.get('/',async (req,res)=>{

    try {

        const books = await Book.find({statut:1})

        if(books){
            return res.status(200).send({
                count : books.length,
                data : books
            })
        }
        else{
            return res.status(404).send({
                message : "No books in database"
            })
        }
        
    } catch (error) {
        console.log(error.message)
        
        res.status(500).send({
            message : error.message
        })
    }

})
router.post('/', async (req, res)=>{
    
    try{

        console.log(req.body)

        if( !req.body.title || !req.body.author || !req.body.publishYear ) {
            
            return res.status(400).send({
                message : "All fields are required"

            })
        }

        const newBook = {
            title : req.body.title,
            author : req.body.author,
            publishYear : req.body.publishYear,

        }
        const book = await Book.create(newBook)
        if(book){
            return res.status(201).send(book)
        }
        else{
            return res.send({
                message : "can not create book !!!!"
            })

        }
    }
    catch(error){
        console.log(error.message)
        
        res.status(500).send({
            message : error.message
        })
    }
})

router.get('/:id',async (req,res)=>{

    try {

        

        const{ id } = req.params

        if (!mongoose.isValidObjectId(id)) {
            return res.status(400).send({
                message: "Invalid ID format"
            });
        }
        const book = await Book.findById(id)

        if(book){
            return res.status(200).send(book)
        }
        else{
            return res.status(404).send({
                message : "No book in database for this id"
            })
        }
        
    } catch (error) {
        console.log(error.message)
        
        res.status(500).send({
            message : error.message
        })
    }

})


router.put('/:id',async (req,res)=>{

    try {

        if( !req.body.title || !req.body.author || !req.body.publishYear ) {
            
            return res.status(400).send({
                message : "All fields are required"

            })
        }

        const{ id } = req.params

        if (!mongoose.isValidObjectId(id)) {
            return res.status(400).send({
                message: "Invalid ID format"
            });
        }

        const result = await Book.findByIdAndUpdate(id,req.body)

        if(result){
            return res.status(200).send({
                message : 'book updated successfully'
            })
        }
        else{
            return res.status(404).send({
                message : "No book in database for this id"
            })
        }


        
    } catch (error) {
        console.log(error.message)
        
        res.status(500).send({
            message : error.message
        })
    }

})
/*
router.put('/books/',async (req,res)=>{

    try {

        

        const result = await Book.updateMany(
            { statut: { $exists: false } },
            { $set: { statut: 1 } }
        );

        if(result){
            return res.status(200).send({
                message : 'books updated successfully'
            })
        }
        else{
            return res.status(404).send({
                message : "No book in database for this id"
            })
        }


        
    } catch (error) {
        console.log(error.message)
        
        res.status(500).send({
            message : error.message
        })
    }

})*/


router.put('/delete/:id',async (req,res)=>{

    try {

        const{ id } = req.params

        if (!mongoose.isValidObjectId(id)) {
            return res.status(400).send({
                message: "Invalid ID format"
            });
        }

        const result = await Book.findByIdAndUpdate(id,req.body)

        const txt = (req.body.statut && req.body.statut == 1) ? "activated" : "deleted";

        if(result){
            return res.status(200).send({
                message : 'Book '+ txt +' successfully'
            })
        }
        else{
            return res.status(404).send({
                message : "No book in database for this id"
            })
        }

        
    } catch (error) {
        console.log(error.message)
        
        res.status(500).send({
            message : error.message
        })
    }

})

export default router