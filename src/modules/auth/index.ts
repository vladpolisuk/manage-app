import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { User } from './types';

export const createJWT = ({ id, username }: User): string => {
	return jwt.sign({ id, username }, process.env.JWT_SECRET as string);
};

export const comparePasswords = (password: string, hash: string): Promise<boolean> => {
	return bcrypt.compare(password, hash);
};

export const hashPassword = (password: string): Promise<string> => {
	return bcrypt.hash(password, 10);
};
