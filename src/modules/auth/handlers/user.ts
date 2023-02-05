import { send401Error } from './../../../utils/error/401';
import { hashPassword, createJWT, comparePasswords } from './../index';
import { NextFunction, Request, Response } from 'express';
import prisma from '../db';
import { send404Error } from '../../../utils/error/404';

export const signUpUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const user = await prisma.user.create({
			data: {
				username: req.body.username,
				password: await hashPassword(req.body.password),
			},
		});

		const token = createJWT(user);
		res.json({ token });
	} catch (error: any) {
		error.type = 'input';
		next(error);
	}
};

export const signInUser = async (req: Request, res: Response): Promise<void> => {
	const user = await prisma.user.findUnique({
		where: {
			username: req.body.username,
		},
	});

	if (!user) return send404Error(res);

	const isValid = await comparePasswords(req.body.password, user.password);

	if (!isValid) return send401Error(res);

	const token = createJWT(user);
	res.json({ token });
};
