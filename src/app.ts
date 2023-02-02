import express, { Application, Request, Response } from 'express';
import path from 'path';

export const app: Application = express();

app.use(express.static('static'));

app.get('/', (req: Request, res: Response) => {
	res.sendFile(path.resolve('pages/index.html'));
});
