import * as dotenv from 'dotenv';
dotenv.config();

import config from './config';
import app from './app';

const PORT = config.port;

app.listen(PORT, () => {
	const message = `Listening server at http://localhost:${PORT}`;
	console.log(message);
});
