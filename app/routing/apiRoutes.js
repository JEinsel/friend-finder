const friends = require("../data/friends")
var path = require("path")
var sum = 0;
var totalDifference;
var userSum = 0;
var friendIndex = 0;

for (var i = 0; i < friends.length; i++) {
    sum = 0;
    for (var j = 0; j < friends[i].scores.length; j++) {
        var element = friends[i].scores[j];
        sum += element
    }
}

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
        var userInfo = request.body
        var minimumDifference = 40;
        for (let i = 0; i < userInfo.userScore.length; i++) {
            const element = userInfo.userScore[i];
            var numbers = parseInt(element)
            userSum += numbers;
        }
        for (var i = 0; i < friends.length; i++) {
            var totalDifference = 0;
            var element = friends[i].scores.length
            console.log(element)
            for (var j = 0; j < friends[i].scores.length; j++) {
                var difference = Math.abs(userInfo.userScore[j] - friends[i].scores[j]);
                totalDifference += difference;
            }
            if (totalDifference < minimumDifference) {
                friendIndex = i;
                minimumDifference = totalDifference;
            }
        }
        let resultsObj = {
            friendName: friends[friendIndex].name,
            friendPhoto: friends[friendIndex].photo,
            friendDifference: minimumDifference
        }
        response.send(resultsObj)
    })
}