import { Request, Response, Router } from 'express';
import { body } from 'express-validator';
import { handleInputErrors } from '../../../middleware/handleInputErrors';

export const getUpdatePointRouter = (): Router => {
	const router = Router();

	router.get('/', (req: Request, res: Response) => {});

	router.get('/:id', (req: Request, res: Response) => {});

	router.post(
		'/',
		body('name').isString(),
		body('description').isString(),
		body('updateId').exists().isString(),
		handleInputErrors,
		(req: Request, res: Response) => {},
	);

	router.put(
		'/:id',
		body('name').optional().isString(),
		body('description').optional().isString(),
		handleInputErrors,
		(req: Request, res: Response) => {},
	);

	router.delete('/:id', (req: Request, res: Response) => {});

	return router;
};
