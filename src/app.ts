import express, { Application } from 'express';
import { getProductRouter } from './routes/product';
import { getUpdateRouter } from './routes/update';
import { getUpdatePointRouter } from './routes/update-point';
import morgan from 'morgan';
import cors from 'cors';

const app: Application = express();
const loggingMiddleware = morgan('[:user-agent] :method :url :status :res[content-length] - :response-time ms\n');
app.use(loggingMiddleware);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const productRouter = getProductRouter();
app.use('/api/product', productRouter);

const updateRouter = getUpdateRouter();
app.use('/api/update', updateRouter);

const updatePointRouter = getUpdatePointRouter();
app.use('/api/updatepoint', updatePointRouter);

export default app;
