import express from "express";
import colors from "colors";
import * as dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";
import connectDB from "./config/db.js";
import { errorHandler } from "./middleware/errorMiddleware.js";
import swaggerDocs from "./swagger.json" assert { type: "json" };
import routes from "./routes/index.js";
import cors from 'cors';

dotenv.config();
connectDB();

const app = express();
app.use(cors())

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

routes(app);

app.use(errorHandler);

const port = process.env.PORT || 5000;

app.listen(port, () => { 
    console.log(`Server up na porta ${port}`) 
});