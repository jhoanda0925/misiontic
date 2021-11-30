const express = require('express');
const fs = require('fs');
const app = express();

function readJsonFileSync(filepath, encoding){
    if (typeof (encoding) == 'undefined'){
        encoding = 'utf8';
    }
    const file = fs.readFileSync(filepath, encoding);
    return JSON.parse(file);
}

const aqi_ranges = readJsonFileSync('./aqi_ranges.json');
const limits = readJsonFileSync('./limits.json');

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get("/api/air-quality/aqi-ranges", (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.json(aqi_ranges);
})

app.post("/api/air-quality/aqi-ranges", (req, res) => {
    aqi_ranges.push(req.body);
    res.json(aqi_ranges);
})

app.get("/api/air-quality/limits", (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.json(limits);
})

module.exports = app;
