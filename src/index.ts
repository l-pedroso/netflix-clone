
import express from 'express';
import cors from 'cors';
import path from "path";


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/', express.static(path.join(__dirname, '../public'), {
    extensions: ['html', 'htm']
}));


app.listen(process.env.PORT, () => console.log('Server running on http://localhost:'+process.env.PORT+'/'));