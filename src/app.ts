import express, { Application, Request, Response, NextFunction, request, response } from "express";
import { CustomersController } from "./customers/customers.controller";
import { HTTP_STATUS_CODES, ServerResponse } from "./interfaces";

// initialize the app
const app: Application = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
    return res.json({
        data: {
            message: "Hello World 🙂",
        },
        error: null
    } as ServerResponse);
})
app.get('/customers', CustomersController.getCustomers);

app.use((req: Request, res: Response, next: NextFunction) => {
    const errorResponse: ServerResponse = {
        data: null,
        error: {
            message: 'Resource not found'
        },
        status: HTTP_STATUS_CODES.NOT_FOUND
    }
    return next(errorResponse);
})

app.use((err: ServerResponse, req: Request, res: Response, next: NextFunction) => {
    return res.status(err.status).json({
        data: err.data,
        error: err.error,
        message: err.message
    } as ServerResponse)
})

export default app;