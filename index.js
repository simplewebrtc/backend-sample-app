const express = require('express');
const path = require('path');

const BodyParser = require("body-parser")
const Config = require("getconfig");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(BodyParser.json());

app.get("/__healthcheck", async (_req, res) => {
  res.status(200).end();
});

// Serve static build
app.use(express.static(path.join(__dirname, 'client/dist')));

app.get("/generateUserData", async (_req, res) => {

  let userDataToken;
    try {
      const secret = Config.apiSecret;
      // Database lookups could happen here
      // For example just sign a generated uuid
      const userData = {
        userId: uuidv4()
      };
      console.log(userData);
      // Create signed user data token
      userDataToken = jwt.sign(userData, secret);

      return res.send({ userDataToken });
    }
    catch (err) {
      console.error(`Failed generating user data token ${err}`);
      return res.send({ error: err });
    }
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);