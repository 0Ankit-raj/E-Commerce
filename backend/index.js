const express = require("express");
const app = express();
const mongoose = require('mongoose');
// const { MongoClient } = require('mongodb');

app.use(express.json());
app.use(require("./register"));
// app.use(require('./userschema'));

const uri = "mongodb+srv://kumarankitverma5:test123@cluster0.bvgikdc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";     
mongoose.connect(uri).then(()=>{
  console.log("Connection successfull");
}).catch((err)=>console.log("NO connection"));
// const client = new MongoClient(uri);
// client.connect();
// findOneListingByName(client, "Infinite Views");

app.get("/", (req, res) => {
  res.json({ message:"SERVER started"});
});
app.get("/api", (req, res) => {
  res.json({ message:"message 2"});
  console.log("Api get req.")
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});

// function findOneListingByName(client, nameOfListing) {
//   const result = client.db("onestore").collection("listingsAndReviews").findOne({ name: nameOfListing });

//   if (result) {
//     app.get("/api", (req, res) => {
//       res.json({ pgs: [`${nameOfListing}`] });
//     });
//       console.log(`Found a listing in the collection with the name '${nameOfListing}':`);
//       console.log(result);
//   } else {
//       console.log(`No listings found with the name '${nameOfListing}'`);
//   }
// }