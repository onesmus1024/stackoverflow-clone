import express, {Express} from 'express';
import cors from 'cors';
import emoji from 'node-emoji';
import path from 'path';
import dotenv from 'dotenv';
import {Request, Response} from 'express';
import { sendWelcomeEmail } from './service/welcomeEmail.service';
import cron from 'node-cron';


 const app: Express = express();

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {

    res.send(emoji.get('rocket') + ' Server running');
});

app.listen(process.env.PORT, () => {
    console.log(emoji.get('rocket'), `Server running on port ${process.env.PORT}`);
}
);


// check after 1 minute


cron.schedule('*/1 * * * *', async () => {
   await sendWelcomeEmail();
}
);