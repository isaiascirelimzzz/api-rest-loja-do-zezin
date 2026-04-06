import express from 'express';
import route from './routers/user.router.js';
import { errorHandler } from './middlewares/errorHandler.middleware.js';

const app = express();

app.use(express.json());

app.use("/users", route);

app.use(errorHandler)

app.listen(3000, '0.0.0.0', () => {
    console.log(`Server was started at port : 3000`)
})