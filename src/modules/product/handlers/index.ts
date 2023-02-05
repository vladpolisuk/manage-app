import { NextFunction, Request, Response } from 'express';
import prisma from '../../auth/db';

export const getAllProductsByUserId = async (req: any, res: Response) => {
	const user = await prisma.user.findUnique({
		where: {
			id: req.user.id,
		},
		include: {
			products: true,
		},
	});

	res.json({ data: user?.products });
};

export const getProductByUserId = async (req: any, res: Response) => {
	const id = req.params.id;

	const product = await prisma.product.findFirst({
		where: {
			id,
			belongsToId: req.user.id,
		},
	});

	res.json({ data: product });
};

export const createProductByUserId = async (req: any, res: Response, next: NextFunction) => {
	try {
		const product = await prisma.product.create({
			data: {
				name: req.body.name,
				belongsToId: req.user.id,
			},
		});

		res.json({ data: product });
	} catch (error: any) {
		next(error);
	}
};

export const updateProductByUserId = async (req: any, res: Response) => {
	const updated = await prisma.product.update({
		// @ts-ignore
		id_belongsToId: {
			id: req.params.id,
			belongsToId: req.user.id,
		},
		data: {
			name: req.body.name,
		},
	});

	res.json({ data: updated });
};

export const deleteProductByUserId = async (req: any, res: Response) => {
	const deleted = await prisma.product.delete({
		where: {
			// @ts-ignore
			id_belongsToId: {
				id: req.params.id,
				belongsToId: req.user.id,
			},
		},
	});

	res.json({ data: deleted });
};
