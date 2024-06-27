import express from "express"
import { PORT,mongoDBURL } from "./config.js"
import mongoose from "mongoose"
import { Book } from "./models/booksModels.js"
import booksRoute from "./routes/booksRoutes.js"
import cors from "cors"

const app = express()
app.use(express.json())
app.use(cors())


app.use('/books',booksRoute)

app.get('/', (req, res)=>{
    return res.send("Welcome to the Mern world")
})



mongoose
    .connect(mongoDBURL)

    .then(()=>{
        console.log("App connected successfully")

        app.listen(PORT, ()=>{
            console.log(`Server start on ${PORT}`)
        })
    })

    .catch((error)=>{
        console.log(error)
    })