// mongodb+srv://abubakar:lionelmessilm10@cluster0.akq40.mongodb.net/
import mongoose from "mongoose";

const dbConnect = async () => {
  const connectionURI =
    "mongodb+srv://abubakar:Lionelmessi10@cluster0.akq40.mongodb.net/";
  mongoose
    .connect(connectionURI)
    .then(() => console.log("database connection established"))
    .catch((error) => {
      console.log(error);
    });
};
export default dbConnect;
