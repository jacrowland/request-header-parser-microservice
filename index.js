const express = require("express");
const app = express();
const PORT = 8080;

app.enable("trust proxy");

const server = app.listen(PORT, () => {
    let host = server.address().address;
    let port = server.address().port;
    console.log('App listening at http://%s:%s', host, port);
})

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "https://www.freecodecamp.org");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "OPTIONS, GET, POST, PUT, PATCH, DELETE"
    );
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
  });

app.get('/api/whoami', (req, res) => {
    let acceptedLanguage = req.header('Accept-Language');
    let userAgent = req.header("user-agent");
    res.status(200).json({ipaddress: req.ip, language: acceptedLanguage, software: userAgent})
});