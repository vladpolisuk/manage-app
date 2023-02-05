import { send401Error } from './401';
import { NextFunction, Request, Response } from 'express';
import { send400Error } from './400';
import { send500Error } from './500';

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
	switch (err.type) {
		case 'auth':
			send401Error(res);
			break;

		case 'input':
			send400Error(res);
			break;

		default:
			send500Error(res);
			break;
	}
};
