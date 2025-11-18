import urlSchema from "../models/short_url.model.js"

export const saveShortUrl=async(long_url,short_url)=>{
    await urlSchema.create({
        full_url:long_url,
        short_url:short_url
    })
}

export const getShortURL=async(id)=>{
    const document = await urlSchema.findOneAndUpdate({short_url:id},{$inc:{clicks:1}})
    return document
}