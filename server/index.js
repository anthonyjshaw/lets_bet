import express from 'express';
import {} from 'dotenv/config';
import mongoose from 'mongoose';
import cors from 'cors';
import betRoutes from './routes/bets.js';

const app = express();
const PORT = process.env.PORT || 5000;
const uri = process.env.DB_CONNECTION;

app.use(cors());
app.use('/bets', betRoutes);


console.log(`Listening at port http://localhost:${PORT}`)

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((error)=> console.error(error.message));

