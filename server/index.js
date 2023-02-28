import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongodb/connect.js";
import postRoutes from "./routes/postRoutes";
import lucjourneyRoutes from "./routes/lucjourneyRoutes";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api/v1/post", postRoutes);
app.use("/api/v1/lucjourney", lucjourneyRoutes);

app.get("/", async (req, res) => {
  res.send("Hello LucJourney!");
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(8080, () =>
      console.log("El servidor se levantó en el puerto http://localhost:8080")
    );
  } catch (error) {
    console.log("Oh oh, hay un error: ", error);
  }
};

startServer();
