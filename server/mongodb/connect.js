import mongoose from "mongoose";

const connectDB = (url) => {
  mongoose.set("strictQuery", true);

  mongoose
    .connect(url)
    .then(() => console.log("MongoDB está conectado"))
    .catch((error) => console.log("Oh oh, hay un error: ", error));
};

export default connectDB;
