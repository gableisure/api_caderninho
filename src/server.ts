import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import { AppError } from "./errors/AppErros";
import { routes } from './routes';
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());

app.use(routes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof AppError) {
         return res.status(err.statusCode).json({
             status: "error",
             message: err.message
         });
    }
    return res.status(500).json({
        status: "error",
        message: `Internal server error - ${err.message}`
    });
});

app.get("/api/cad", (req: Request, res: Response) => res.send("API Caderninho is running!"));

app.listen(process.env.PORT || 3335, () => {
    console.log("Server is running in port " + process.env.PORT || 3335);
});