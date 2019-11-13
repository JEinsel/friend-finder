const express = require('express');
const app = express();
const bodyParser = require("body-parser")
const path = require("path");
const PORT = process.env.PORT || 8080;
var friends = require("./app/data/friends")

questionaire = []
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(express.static('/app/public'));

require("./app/routing/apiRoutes")(app)
require("./app/routing/htmlRoutes")(app)

app.listen(PORT, function () {
    console.log(`App is listening on http://localhost:${PORT}`);
})