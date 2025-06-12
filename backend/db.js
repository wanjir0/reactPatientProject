
const mysql=require('mysql2');

const db=mysql.createConnection({
    host:'localhost',
     user:'root',
     password:'macharia@001',
     database:'hospital_records'
     
    });

     db.connect(err => {
    if (err){
        console.error('Database connection failed:',);
        return;
    }
    console.log('Connected to Mysql database!');
})

module.exports = db;