import express from 'express';
import dotenv from 'dotenv'
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';

dotenv.config();
connectDB()

const app = express();

app.get('/', (req, res) => {
    res.send('API Running');
});

app.use('/api/products', productRoutes);


app.listen(process.env.PORT || 5000, console.log(`Server running in ${process.env.NODE_ENV} mode on port: ${process.env.PORT}`));