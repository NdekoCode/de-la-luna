import { MongoClient } from "mongodb";
export async function dbConnect() {
  const DB_URL = process.env.DB_URI;
  const client = new MongoClient(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  try {
    await client.connect();

    console.log("Connected to the database successfully");
  } catch (error) {
    console.log(error.message);
  } finally {
    await client.close();
  }
}
