import { Application } from "express";
import app from "./app";

class Server {
    private port = process.env.PORT || 8000;
    private app;
    constructor(app: Application) {
        this.app = app;
    }

    start() {
        this.app.listen(this.port, () => {
            console.log('server running on port ', this.port)
        })
    }
}

const server = new Server(app);

export default () => new Server(app);


