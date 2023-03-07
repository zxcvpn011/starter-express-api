const config = require("dotenv").config();
const express = require("express")
const app = express();
const path = require("path")
const PORT = process.env.PORT

app.use(express.static(__dirname))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.all("/salla", function (req, res) {
  console.log(req.body);
  res.status(200).send("ok");
})

app.listen(PORT)