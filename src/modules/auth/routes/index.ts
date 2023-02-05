import { Router } from 'express';
import { signInUser, signUpUser } from '../handlers/user';

export const getUserRouter = (): Router => {
	const router = Router();

	router.post('/up', signUpUser);
	router.post('/in', signInUser);

	return router;
};
