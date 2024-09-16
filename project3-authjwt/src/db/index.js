import mongoose from "mongoose";
require("dotenv").config;

export async function dbConnect() {
  const connectionURI = process.env.connectionURI;
  mongoose
    .connect(connectionURI)
    .then(() => {
      console.log("MongoDB connected");
    })
    .catch((e) => console.log(e));
}
