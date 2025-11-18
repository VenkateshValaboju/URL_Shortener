import express, { Router } from "express"
import connectDB from "./src/config/mongo.config.js";
import dotenv from "dotenv"
import urlSchema from "./src/models/short_url.model.js"
import router from "./src/routes/short_url.route.js";
import { redirectFromShortURL } from "./src/controller/short_url.controller.js";

dotenv.config()
const app= express()
app.use(express.urlencoded({extended:true}))

app.use(express.json())

app.use('/api/create',router)

app.get('/:id', redirectFromShortURL)

app.get('/',(req,res)=>{
  res.send('Sindhu is the most beautiful girl in the world.')
})

app.listen(3000,()=>{
  connectDB()
  console.log("Server is running on port 3000")
})

