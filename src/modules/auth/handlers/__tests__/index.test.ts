import { Request, Response } from 'express';
import * as user from '../user';

describe('Auth Handler', () => {
	it('should create a new user', async () => {
		const req = { body: { password: 'admin', username: 'admin' } } as Request;

		const res = {
			json: (token) => {
				expect(token).toBeTruthy();
			},
		} as Response;

		await user.signUpUser(req, res, () => {});
	});
});
