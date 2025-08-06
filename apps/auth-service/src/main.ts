import express from 'express';
import cors from 'cors';
import { errorMiddleware } from '../../../Packages/error-handler/error-middlware';
import cookieParser from 'cookie-parser';

const app = express();

app.use(
  cors({
    origin: ['http://localhost:3000'],
    allowedHeaders: ['Authorization', 'Content-Type'],
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});

app.use(errorMiddleware);
const port = process.env.PORT || 6001;
const server = app.listen(port, () => {
  console.log(`Auth Service is running on the port ${port}/api`);
});

server.on('error', (error) => {
  console.log('Server Error!', error);
});
