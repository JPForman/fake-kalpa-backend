const express = require('express');
const bodyParser = require("body-parser")

const app = express();

app.use(bodyParser.json())

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.post('/signin', (req, res, next) => {
  // todo: log user in with email and pw returning a user object
  const user = {
    id: 37289137,
    name: "Marry Harris Jones",
    role: 'admin',
  }

  // todo: get role definition of permissions
  // attach permissions
  user.permissions = {
    screen1: true,
    screen2: false
  }

  res.status(201).json({
    message: 'Success',
    content: user
  })
})

module.exports = app;