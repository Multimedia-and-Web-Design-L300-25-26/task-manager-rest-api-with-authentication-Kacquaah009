import mongoose from "mongoose";

export default async function globalTeardown() {
  await mongoose.disconnect();
}
