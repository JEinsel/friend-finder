const express = require('express');
const app = express();
const path = require("path");
const PORT = 3000;
var friends = require("./data/friends")
// console.log(friends)
app.use(express.json())

questionaire = []

app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'));

app.get("/api/submit", function (request, response) {
    var submit = response.body;
    response.json(submit);
    console.log("Server listening");
});


app.post("/api/submit", function (request, response) {
    const newSubmission = request.body;

    console.log(`new submission!: ${newSubmission}`);

    questionaire.push(newSubmission);

    response.json(submit);
    console.log(submit);
});

app.get("/", function (request, response) {
    response.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/friends",function (request,response){
    response.json(friends)
})

app.get("/questionaire", function (request, response) {
    response.sendFile(path.join(__dirname, "/public/questionaire.html"));
});

app.listen(PORT, function () {
    console.log(`App is listening on http://localhost:${PORT}`);
})
