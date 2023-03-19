import mssql from 'mssql';
import Emailconfig from '../config/email-config';
import sendMail from '../helper/transporter.helper';
import ejs from 'ejs';
import path from 'path';
import dotenv from 'dotenv';
import DBconfig from '../config/db-config';

dotenv.config({ path: path.resolve(__dirname, '../../../.env') });



// send congratulation email to the user who got the accepted answer only check if is_sent = 0 and is_accepted = 1 then get the user id and send the email and update is_sent = 1

export const sendCongratulationEmail = async () => {
    try{

        const pool = await mssql.connect(DBconfig);
        const acceptedAnswers = await pool.request().query(`SELECT * FROM answers WHERE is_sent = '0' AND is_accepted = '1'`);
        const acceptedAnswersList = acceptedAnswers.recordset;
        console.log("acceptedAnswersList",acceptedAnswersList);

        for(let i = 0; i < acceptedAnswersList.length; i++){
            // get the user id from the accepted answer
            const userId = acceptedAnswersList[i].user_id;
            // get the user email from the user id
            const usersAnswerAccepted = await pool.request().query(`SELECT * FROM users WHERE id = '${userId}'`);
            const usersAnswerAcceptedList = usersAnswerAccepted.recordset;
            console.log("usersAnswerAcceptedList",usersAnswerAcceptedList);

            ejs.renderFile(path.resolve(__dirname, '../templates/congratulationAcceptedAnswer.ejs'), { name: usersAnswerAcceptedList[0].name }, async (err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    let mainOptions = {
                        from: process.env.EMAIL,
                        to: usersAnswerAcceptedList[0].email,
                        subject: 'Congratulation',
                        html: data
                    }
                    await sendMail(mainOptions);
        
                    await pool.request().query(`UPDATE answers SET is_sent ='1' WHERE id ='${acceptedAnswersList[i].id}'`)
                }
            }

            )
            console.log(usersAnswerAcceptedList[0].name);

        }




    }
    catch(err){
        console.log(err);
    }
}