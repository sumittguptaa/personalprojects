const express = require('express');
const pdf = require('html-pdf');
const cors = require('cors');

const pdfTemplate = require('./document/index.js');

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: "30mb", extended: true }))
app.use(express.urlencoded({ limit: "30mb", extended: true }));

app.post('/create-pdf', (req, res) => {
    pdf.create(pdfTemplate(req.body), {}).toFile('result.pdf', (err) => {
        if (err) {
            res.send(Promise.reject());
        }

        res.send(Promise.resolve());
    });
});

app.get('/fetch-pdf', (req, res) => {
    res.sendFile(`${__dirname}/result.pdf`)
    
})

app.listen(port, () => console.log(`Listening on port ${port}`));