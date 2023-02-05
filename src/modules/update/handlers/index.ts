import { Response } from 'express';
import { send404Error } from '../../../utils/error/404';
import prisma from '../../auth/db';

export const getAllUpdatesByUserId = async (req: any, res: Response) => {
	const products = await prisma.product.findMany({
		where: {
			belongsToId: req.user.id,
		},
		include: {
			updates: true,
		},
	});

	const updates = products.reduce((allUpdates: any, product: any) => {
		return [...allUpdates, ...product.updates];
	}, []);

	res.json({ data: updates });
};

export const getUpdateByUserId = async (req: any, res: Response) => {
	const update = await prisma.update.findUnique({
		where: {
			id: req.params.id,
		},
	});

	res.json({ data: update });
};

export const createUpdateByUserId = async (req: any, res: Response) => {
	const product = await prisma.product.findUnique({
		where: {
			id: req.body.productId,
		},
	});

	if (!product) return res.json({ message: 'nope' });

	const update = await prisma.update.create({
		data: {
			title: req.body.title,
			body: req.body.body,
			product: {
				connect: {
					id: product.id,
				},
			},
		},
	});

	res.json({ data: update });
};

export const updateUpdateByUserId = async (req: any, res: Response) => {
	const products = await prisma.product.findMany({
		where: {
			belongsToId: req.user.id,
		},
		include: {
			updates: true,
		},
	});

	const updates = products.reduce((allUpdates: any, product: any) => {
		return [...allUpdates, ...product.updates];
	}, []);

	const match = updates.find((update) => update.id === req.params.id);

	if (!match) return res.json({ message: 'nope' });

	const updatedUpdate = await prisma.update.update({
		where: {
			id: req.params.id,
		},
		data: req.body,
	});

	res.json({ data: updatedUpdate });
};

export const deleteUpdateByUserId = async (req: any, res: Response) => {
	const products = await prisma.product.findMany({
		where: {
			belongsToId: req.user.id,
		},
		include: {
			updates: true,
		},
	});

	const updates = products.reduce((allUpdates: any, product: any) => {
		return [...allUpdates, ...product.updates];
	}, []);

	const match = updates.find((update) => update.id === req.params.id);

	if (!match) return res.json({ message: 'nope' });

	const deleted = await prisma.update.delete({
		where: {
			id: req.params.id,
		},
	});

	res.json({ data: deleted });
};
