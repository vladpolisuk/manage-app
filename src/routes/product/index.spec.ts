import { describe, it } from 'node:test';
import request from 'supertest';
import app from '../../app';

describe('Product Routes', () => {
	it('should return 200', async () => {
		request(app).get('/api/product').expect(200);
	});
});
