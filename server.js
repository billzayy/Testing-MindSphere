const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname + '/src')))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/index.html');
})

app.listen(3500, () => {
    console.log("Server is listening on port 3500 !");
})