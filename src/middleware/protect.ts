import { NextFunction, Response } from 'express';
import jwt from 'jsonwebtoken';
import { send401Error } from '../utils/error/401';

export const protect = (req: any, res: Response, next: NextFunction): void => {
	const bearer = req.headers.authorization;
	if (!bearer) return send401Error(res);

	const token = bearer.split(' ')[1];
	if (!token) return send401Error(res);

	try {
		const payload = jwt.verify(token, process.env.JWT_SECRET as string);
		req.user = payload;
		next();
	} catch (error: any) {
		console.log(error);
		return send401Error(res);
	}
};
