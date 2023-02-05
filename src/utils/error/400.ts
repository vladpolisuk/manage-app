import { Response } from 'express';

export const send400Error = (res: Response) => {
	res.status(400).json({
		status: 'error',
		message: 'Bad request',
	});
};
