import express from 'express';
import sequelize from './db.js';
import cors from 'cors';
import router from './routes/index.js'
import bodyParser from 'body-parser';
import fileUpload from 'express-fileupload';
import { dirname } from 'path';


const HOST = '147.45.190.87';
const PORT = 9000;
const app = express();
app.use(cors());
app.use(fileUpload({}));
app.use(express.json());
app.use('/api', router);
app.use(bodyParser.json());


const start = async () => {
    try{
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, HOST, () => {console.log(`Server started at port ${PORT}`)});
    }catch (e){
        console.log(e);
    }
}

start();
