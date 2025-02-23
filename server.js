import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors"; 
import path from "path";
<<<<<<< HEAD
import { fileURLToPath } from 'url';
=======
import { fileURLToPath } from 'url';
>>>>>>> 4c724c13ed31eda115bb43e45e6ea20a0126bcf3
//configure env
dotenv.config();

//databse config
connectDB();

<<<<<<< HEAD
const __filename = fileURL_ToPath (import.meta.url);
const __dirname= path.dirname(__filename); 
//rest object
const app = express();

=======
const __filename = fileURL_ToPath (import.meta.url);
const __dirname= path.dirname(__filename); 
//rest object
const app = express();
>>>>>>> 4c724c13ed31eda115bb43e45e6ea20a0126bcf3
//middelwares
app.use(cors());
app.use(express.json());    
app.use(morgan("dev")); 

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);
app.use(express.static(path.join(__dirname, './client/build')))       

//rest api
app.use("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });

//PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
      .white
  );
});
