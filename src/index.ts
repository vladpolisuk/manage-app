import { app } from './app';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	const message = `Listening server at http://localhost:${PORT}`;
	console.log(message);
});
