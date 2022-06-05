const express = require("express");
const app = express();

const PORT = 8080;

const server = app.listen(PORT, () => {
    let host = server.address().address;
    let port = server.address().port;
    console.log('App listening at http://%s:%s', host, port);
})

app.get('/api/whoami', (req, res) => {
    let ipAddress = req.header('X-Forwarded-For');
    let acceptedLanguage = req.header('X-Forwarded-For');
    let userAgent = req.header("user-agent");

    res.status(200).json({ip: ipAddress, language: acceptedLanguage, software: userAgent})
});