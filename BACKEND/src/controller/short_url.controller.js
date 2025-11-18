import { getShortURL } from "../dao/short_url.js"
import { createShortUrlService } from "../services/short_url.services.js"

export const createShortUrl=async(req,res)=>{
  const {url}=req.body
  const short_url= await createShortUrlService(url)
  res.send(process.env.APP_URL+short_url)
}

export const redirectFromShortURL=async(req,res)=>{
  const {id}=req.params
  const document=await getShortURL(id)  
  if (document && document.full_url){
    res.redirect(document.full_url)
  }
  else{
    res.status(404).send('Resource not found')
  }
}