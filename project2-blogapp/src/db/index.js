// mongodb+srv://abubakar:lionelmessilm10@cluster0.akq40.mongodb.net/
import mongoose from "mongoose";
require('dotenv').config();

const dbConnect = async () => {
  const connectionURI = process.env.connectionURI;
  mongoose
    .connect(connectionURI)
    .then(() => console.log("database connection established"))
    .catch((error) => {
      console.log(error);
    });
};
export default dbConnect;
