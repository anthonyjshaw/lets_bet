import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.get('/', (req, res) => {
    res.send('hello!');
});

console.log(`Listening at port http://localhost:${PORT}`)
app.listen(PORT);

