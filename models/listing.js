const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title:{
        type:String,
        required:true,
    },
    description:String,
    image:{
        type:String,
        default:"https://unsplash.com/photos/aerial-view-of-beach-DD1fSz2HF1s",
        set : (v)=>v ===""? "https://unsplash.com/photos/aerial-view-of-beach-DD1fSz2HF1s": v,
    },
    price:Number,
    location:String,
    country:String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports= Listing;