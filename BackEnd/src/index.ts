import express, { request, Request, Response } from 'express';
import { employee } from '../employee';
import cors from 'cors';

const app = express();
app.use(cors());

//root@localhost:3306
const mysql = require('mysql');
const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'abc123',
    database: 'businessV2'
});

conn.connect();

// conn.query('select * from employee',(error: any,result: any,field: any)=>{
//     if(error){
//     console.log('error'+error);
// }
//     console.log(result);
//     console.log('field:'+field);
// });


 app.get('/employee', (req: Request, res: Response) => {

     conn.query('select * from employee',(error:any,result:any,field:any)=>{
        if(error){
            console.log('error'+error);
        }
          res.send(result);
            console.log('field:'+field);
    })
});

app.get('/department', (req: Request, res: Response) => {

    conn.query('select * from department',(error:any,result:any,field:any)=>{
       if(error){
           console.log('error'+error);
       }
         res.send(result);
           console.log('field:'+field);
   })
});

app.post('/employee',(req:Request,res:Response)=>{
    let newEmployee:employee = {
        id:0,
        firstname:'TEST',
        lastname:'test',
        phone:'65465465',
        email:'abc@lkl.com',
        department:'IT',
        hiredate: new Date()
    };
});


app.listen(5000);




