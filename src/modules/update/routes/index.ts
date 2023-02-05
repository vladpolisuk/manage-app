import { handleInputErrors } from './../../../middleware/handleInputErrors';
import { Router } from 'express';
import { body } from 'express-validator';
import {
	createUpdateByUserId,
	deleteUpdateByUserId,
	getAllUpdatesByUserId,
	getUpdateByUserId,
	updateUpdateByUserId,
} from '../handlers';

export const getUpdateRouter = (): Router => {
	const router = Router();

	router.get('/', getAllUpdatesByUserId);
	router.get('/:id', getUpdateByUserId);

	router.post(
		'/',
		body('title').exists().isString(),
		body('body').exists().isString(),
		body('productId').exists().isString(),
		handleInputErrors,
		createUpdateByUserId,
	);

	router.put(
		'/:id',
		body('title').optional(),
		body('body').optional(),
		body('status').isIn(['IN_PROGRESS', 'SHIPPED', 'DEPRECATED']).optional(),
		body('version').optional(),
		handleInputErrors,
		updateUpdateByUserId,
	);

	router.delete('/:id', deleteUpdateByUserId);

	return router;
};
