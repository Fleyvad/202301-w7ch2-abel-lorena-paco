import express, { NextFunction, Request, Response } from 'express';
import { ValidationError } from 'express-validation';

const app = express();

app.get('/', (_req, res) => {
  res.json({ hello: 'World' });
});

app.use(express.json());

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json(err);
  }

  return res.status(500).json(err);
});

export default app;
