import express from 'express';
import dotenv from 'dotenv'
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';

import { notFound, errorHandler } from './middleware/errorMiddleware.js';

dotenv.config();
connectDB()

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('API Running');
});

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

app.use(notFound)
app.use(errorHandler);

app.listen(process.env.PORT || 5000, console.log(`Server running in ${process.env.NODE_ENV} mode on port: ${process.env.PORT}`));