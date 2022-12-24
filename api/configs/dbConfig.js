import { connect, set } from "mongoose";
export async function dbConnect() {
  const DB_URL = process.env.DB_URI;

  try {
    set("strictQuery", false);
    await connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to the database successfully");
  } catch (error) {
    console.log(error.message);
  }
}
