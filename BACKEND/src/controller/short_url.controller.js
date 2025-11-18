import { createShortUrlService } from "../services/short_url.services.js"

export const createShortUrl=async(req,res)=>{
  const {url}=req.body
  const short_url= await createShortUrlService(url)
  res.send(process.env.APP_URL+short_url)
}