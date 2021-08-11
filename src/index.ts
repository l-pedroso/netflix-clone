import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import path from "path";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/', express.static(path.join(__dirname, '../public'), {
    extensions: ['html', 'htm']
}));


app.listen(process.env.PORT || 3000, () => console.log(`Server running on http://localhost:${process.env.PORT}/`));