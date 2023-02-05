import { Router } from 'express';
import { body } from 'express-validator';
import { handleInputErrors } from '../../../middleware/handleInputErrors';
import {
	createProductByUserId,
	deleteProductByUserId,
	getAllProductsByUserId,
	getProductByUserId,
	updateProductByUserId,
} from './../handlers';

export const getProductRouter = (): Router => {
	const router = Router();

	router.get('/', getAllProductsByUserId);
	router.get('/:id', getProductByUserId);
	router.post('/', body('name').isString(), handleInputErrors, createProductByUserId);
	router.put('/:id', body('name').isString(), handleInputErrors, updateProductByUserId);
	router.delete('/:id', deleteProductByUserId);

	return router;
};
