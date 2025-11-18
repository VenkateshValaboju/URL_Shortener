import express from "express"
import connectDB from "./src/config/mongo.config.js";
import dotenv from "dotenv"
import { nanoid } from "nanoid";
import urlSchema from "./src/models/short_url.model.js"

dotenv.config()
const app= express()
app.use(express.urlencoded({extended:true}))

app.use(express.json())

app.post('/api/create', async(req,res)=>{
  const {url}=req.body
  const short_url=nanoid(7)
  await urlSchema.create({
    full_url:url,
    short_url:short_url
  })
  res.send(short_url)
})

app.get('/:id', async(req,res)=>{
  const {id}=req.params
  const document=await urlSchema.findOne({short_url:id})  
  if (document && document.full_url){
    res.redirect(document.full_url)
  }
  else{
    res.status(404).send('Resource not found')
  }

})

app.get('/',(req,res)=>{
  res.send('Sindhu is the most beautiful girl in the world.')
})

app.listen(3000,()=>{
  connectDB()
  console.log("Server is running on port 3000")
})

