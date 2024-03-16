// this is just practise file to check the database operations

const { MongoClient } = require('mongodb');

async function main() {
const uri = "mongodb+srv://kumarankitverma5:test123@cluster0.bvgikdc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";     

const client = new MongoClient(uri);

try {
    await client.connect();
    // await createListing(client,
    //     {
    //         name: "Gpr comfort",
    //         summary: "bekar pg",
    //         bedrooms: 1,
    //         bathrooms: 1
    //     }
    // );
    // await createMultipleListings(client, [
    //     {
    //         name: "Infinite Views",
    //         summary: "Modern home with infinite views from the infinity pool",
    //         property_type: "House",
    //         bedrooms: 5,
    //         bathrooms: 4.5,
    //         beds: 5
    //     },
    //     {
    //         name: "Private room in London",
    //         property_type: "Apartment",
    //         bedrooms: 1,
    //         bathroom: 1
    //     },
    //     {
    //         name: "Beautiful Beach House",
    //         summary: "Enjoy relaxed beach living in this house with a private beach",
    //         bedrooms: 4,
    //         bathrooms: 2.5,
    //         beds: 7,
    //         last_review: new Date()
    //     }
    // ]);
    // await findOneListingByName(client, "Infinite Views");
    await deleteListingByName(client, "Infinite Views");
} 
finally {
    await client.close();
}

}
main().catch(console.error);

async function createListing(client, newListing){
    const result = await client.db("onestore").collection("listingsAndReviews").insertOne(newListing);
    console.log(`New listing created with the following id: ${result.insertedId}`);
}

async function createMultipleListings(client, newListings){
    const result = await client.db("onestore").collection("listingsAndReviews").insertMany(newListings);
    console.log(`${result.insertedCount} new listing(s) created with the following id(s):`);
    console.log(result.insertedIds);       
}
async function findOneListingByName(client, nameOfListing) {
    const result = await client.db("onestore").collection("listingsAndReviews").findOne({ name: nameOfListing });

    if (result) {
        console.log(`Found a listing in the collection with the name '${nameOfListing}':`);
        console.log(result);
    } else {
        console.log(`No listings found with the name '${nameOfListing}'`);
    }
}
async function deleteListingByName(client, nameOfListing) {
    const result = await client.db("onestore").collection("listingsAndReviews")
            .deleteOne({ name: nameOfListing });
    console.log(`${result.deletedCount} document(s) was/were deleted.`);
}
