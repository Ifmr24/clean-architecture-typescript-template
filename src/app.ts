import express, {Express} from 'express';
import {registerRoutes} from './infrastructure';
import dotenv from 'dotenv';
import {connect} from 'mongoose'


dotenv.config();

const app: Express = express();
const port = process.env.PORT ?? 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', registerRoutes);


connect('mongodb://localhost:27017', {
    serverSelectionTimeoutMS: 10000,
    socketTimeoutMS: 15000,
})

app.listen(port, () => {
    try {
        console.log(`Server is running on port ${port}`);
    } catch (e) {
        console.log(e)
        process.exit(0)
    }
});
