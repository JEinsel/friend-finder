const friends = require("../data/friends")
var sum = 0;
var path = require("path")


module.exports = function (app) {

    app.get("/api/friends", function (request, response) {
        response.json(friends)
    })

    app.get("/", function (request, response) {
        response.sendFile(path.join(__dirname, "../public/index.html"));
    });
    
    app.get("/questionaire", function (request, response) {
        response.sendFile(path.join(__dirname, "../public/questionaire.html"));
    });
    

    app.post("/api/friends", function (request, response) {
        console.log("Hello World")
        console.log(request.body)
        response.send(`Information from user ${request.body}`)
        // for (let i = 0; i < friends.length; i++) {
        //     const element = friends[i];
        //     console.log(element)
        // }
        // for (let i = 0; i < friends.length; i++) {
        //     const element = friends[i].scores;
        //     sum += element[i]
        // }

        //
        // friends.push(request.body)
    })
}