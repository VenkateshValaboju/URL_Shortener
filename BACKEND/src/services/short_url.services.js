import { generateNanoId } from "../utils/helper.js"
import { saveShortUrl } from "../dao/short_url.js"


export const createShortUrlService= async (url)=>{
  const short_url=generateNanoId(process.env.NANO_ID_LENGTH)
  saveShortUrl(url,short_url)
  return short_url
}