import { createServer } from 'http';

const server = createServer(async (req: any, res: any) => {
	if (req.url === '/users' && req.method === 'GET') {
		res.writeHead(200, { 'Content-Type': 'application/json' });
		res.write(JSON.stringify({ message: 'Hello World' }));
		res.end();
		return;
	}

	res.writeHead(404, { 'Content-Type': 'application/json' });
	res.write(JSON.stringify({ message: 'Not Found' }));
	res.end();
});

const PORT: string = process.env.PORT || '3000';

server.listen(PORT, () => {
	console.log('server running on port 3000');
});
