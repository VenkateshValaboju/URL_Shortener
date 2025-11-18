import urlSchema from "../models/short_url.model.js"
import { generateNanoId } from "../utils/helper.js"



export const createShortUrlService= async (url)=>{
  const short_url=generateNanoId(process.env.NANO_ID_LENGTH)
  await urlSchema.create({
    full_url:url,
    short_url:short_url
  })
  return short_url
}