import mssql from 'mssql';
import Emailconfig from '../config/email-config';
import sendMail from '../helper/transporter.helper';
import ejs from 'ejs';
import path from 'path';
import dotenv from 'dotenv';
import DBconfig from '../config/db-config';

dotenv.config({ path: path.resolve(__dirname, '../../../.env') });



export const sendWelcomeEmail = async () => {
    try {
        const pool = await mssql.connect(DBconfig);
        const users = await pool.request().query(`SELECT * FROM users WHERE is_sent = '0'`);
        const usersList = users.recordset;
        console.log("user",usersList);

        for (let i = 0; i < usersList.length; i++) {
            let URL = `https://molynew.com`;

            ejs.renderFile(path.resolve(__dirname, '../templates/welcomeEmail.ejs'), { name: usersList[i].name,URL:URL }, async (err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    let mainOptions = {
                        from: process.env.EMAIL,
                        to: usersList[i].email,
                        subject: 'Welcome',
                        html: data
                    }
                    await sendMail(mainOptions);
        
                    await pool.request().query(`UPDATE users SET is_sent ='1' WHERE id ='${usersList[i].id}'`)
                }
            }

            )
            console.log(usersList[i].name);
        }
    } catch (err) {
        console.log(err);
    }
}

