import dotenv from 'dotenv';
import app from './app.js';

import connectDb from './dataBase/connection.js';
import log from './logger.js';

dotenv.config();

const port = process.env.PORT ?? 3000;
const mongoUrl = process.env.MONGO_URL ?? '';

app.listen(port, async () => {
  await connectDb(mongoUrl);
  log.info(`Server started in port ${port} `);
});
