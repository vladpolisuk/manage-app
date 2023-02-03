import { Request, Response, Router } from 'express';

export const getUpdatePointRouter = () => {
	const router = Router();

	router.get('/', (req: Request, res: Response) => {});

	router.get('/:id', (req: Request, res: Response) => {});

	router.post('/', (req: Request, res: Response) => {});

	router.put('/:id', (req: Request, res: Response) => {});

	router.delete('/:id', (req: Request, res: Response) => {});

	return router;
};
