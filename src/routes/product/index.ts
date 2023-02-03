import { Router, Response, Request } from 'express';

export const getProductRouter = () => {
	const router = Router();

	router.get('/', (req: Request, res: Response) => {
		res.json({ message: 'product' });
	});

	router.get('/:id', (req: Request, res: Response) => {});

	router.post('/', (req: Request, res: Response) => {});

	router.put('/:id', (req: Request, res: Response) => {});

	router.delete('/:id', (req: Request, res: Response) => {});

	return router;
};
