const http = require('http');
const fs = require('fs');
const xlsx = require('xlsx');
const jsontoxml = require('jsontoxml');
const express = require('express');
const app = express();

//read XL file
//try {
const workbook = xlsx.readFile('blinds.xlsx');
//    console.log(data);
//} catch (err) {
//    console.error(err);
//}

//Convert XLSX to JSON
const worksheets = {};
for (const sheetName of workbook.SheetNames) {
    worksheets[sheetName] = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);

    //Show the data as JSON
    //console.log('json:\n', JSON.stringify(worksheets.Sheet1), "\n\n");
}

module.exports = worksheets;

//static files
app.use(express.static('/public'));
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/img', express.static(__dirname + 'img'));

//set views
app.set('views',

        app.get('', (req, res) => {
            res.status(200);
            res.render(__dirname + '/public/index.ejs')
        });

        app.listen(3000); console.log('listening on port 3000');


        //console.log(worksheets);