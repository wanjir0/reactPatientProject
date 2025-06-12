//this is for the server
const express = require('express');
const db = require('./db');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
//add patient
app.post('/patients', (req, res) => {
    const { firstName, lastName, dateOfBirth, ssn, sex, cellPhone, address, dateOfAdmission, doctorHandlingThisCase } = req.body;
    const sql = 'INSERT INTO patients(firstName,lastName, dateOfBirth,ssn,sex,cellPhone,address,dateOfAdmission,doctorHandlingThisCase) VALUES(?,?,?,?,?,?,?, ?, ?)';
    db.query(sql, [firstName, lastName, dateOfBirth, ssn, sex, cellPhone, address, dateOfAdmission, doctorHandlingThisCase], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ message: 'Patient added', id: result.insertId });
    });
});

app.listen(5000, () => console.log('server running on port 5000 '));
//to retrieve all the patients
app.get('/patients', (req, res) => {
    const sql = 'SELECT*FROM patients';
    db.query(sql, (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
});
//for updating  patient records
app.put('/patients/:id', (req, res) => {
    const { firstName, lastName, dateOfBirth, ssn, sex, cellPhone, address, dateOfAdmission, doctorHandlingThisCase } = req.body;
    const sql = 'UPDATE  patients SET firstName=?,lastName=?, dateOfBirth=?,ssn=?,sex=?,cellPhone=?,address=?,dateOfAdmission=?,doctorHandlingThisCase=? WHERE id=?';
    db.query(sql, [firstName, lastName, dateOfBirth, ssn, sex, cellPhone, address, dateOfAdmission, doctorHandlingThisCase, req.params.id], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ message: 'Patient updated' });
    });
});