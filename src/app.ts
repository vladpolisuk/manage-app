import cors from 'cors';
import express, {
	Application,
	ErrorRequestHandler,
	NextFunction,
	Request,
	RequestParamHandler,
	Response,
} from 'express';
import morgan from 'morgan';
import { protect } from './middleware/protect';
import { getUserRouter } from './modules/auth/routes';
import { getProductRouter } from './modules/product/routes';
import { getUpdatePointRouter } from './modules/update-point/routes';
import { getUpdateRouter } from './modules/update/routes';
import { errorHandler } from './utils/error/errorHandler';

const app: Application = express();
const middlewares = [morgan('dev'), cors(), express.json(), express.urlencoded({ extended: true })];
app.use(middlewares);

const userRouter = getUserRouter();
app.use('/api/sign', userRouter);

app.use(protect);

const productRouter = getProductRouter();
app.use('/api/product', productRouter);

const updateRouter = getUpdateRouter();
app.use('/api/update', updateRouter);

const updatePointRouter = getUpdatePointRouter();
app.use('/api/updatepoint', updatePointRouter);

app.use(errorHandler);

export default app;
