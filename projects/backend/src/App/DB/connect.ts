import mongoose from "mongoose";
import env from "../Start/env";

export default async function connect(): Promise<void> {
  await mongoose.connect(
    `mongodb://${env.MONGO_HOST}:${env.MONGO_PORT}/${env.MONGO_DATABASE}`
  );
  return;
}
