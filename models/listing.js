const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const Review = require("./review.js"); -> it causing the problem of circular dependency so i used lazy dependency method

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    url: String,
    filename: String,
  },
  price: Number,
  location: String,
  country: String,
  reviews:[
    {
      type:Schema.Types.ObjectId,
      ref:"Review",
    },
  ],
  owner: {
    type: Schema.Types.ObjectId,
    ref:"User",
  },

  geometry:  {
    type: {
      type: String, // Don't do `{ location: { type: String } }`
      enum: ['Point'], // 'location.type' must be 'Point'
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  }
});

listingSchema.post("findOneAndDelete",async (listing)=>{
  
  if(listing){
    const Review = require("./review.js");  // Lazy require
    await Review.deleteMany({_id: {$in: listing.reviews}});

  }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
