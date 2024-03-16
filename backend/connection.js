const { MongoClient } = require('mongodb');

async function main() {
   
    const uri = "mongodb+srv://kumarankitverma5:test123@cluster0.bvgikdc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

    const client = new MongoClient(uri);

    try {
        
        await client.connect();
        // await listDatabases(client);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);


async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};