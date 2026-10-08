import express from 'express';
import orderRoutes from './routes/orderRoutes.js';
import cors from 'cors';

const app = express();
console.log('CORS FRONTEND_URL:', process.env.FRONTEND_URL);
app.use(
    cors({
        origin: process.env.FRONTEND_URL,
    })
);

app.use(express.json());

app.use('/api', orderRoutes);

export default app;