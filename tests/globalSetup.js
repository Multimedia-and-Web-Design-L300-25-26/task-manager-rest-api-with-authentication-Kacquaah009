import dotenv from "dotenv";
dotenv.config({ path: ".env.test" });

import mongoose from "mongoose";

export default async function globalSetup() {
  await mongoose.connect(process.env.MONGO_URI);
  // Clean test collections
  const collections = await mongoose.connection.db.collections();
  for (const collection of collections) {
    await collection.deleteMany({});
  }
  await mongoose.disconnect();
}
