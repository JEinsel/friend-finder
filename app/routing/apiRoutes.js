const friends = require("../data/friends")
var path = require("path")
var sum = 0;
var converted;
var totalDifference;
var answersArr = [];
var numbersArr = [];
var userSum = 0;

for (var i = 0; i < friends.length; i++) {
    sum = 0;
       for (var j = 0; j < friends[i].scores.length; j++) {
           var element = friends[i].scores[j];
           sum += element
           //save the sum for each element in friends. Maybe as a property in friend object
        //    console.log("This is the sum for " + friends[i] + ": " + sum)
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
        console.log("Hello World")
        console.log(request.body)
        response.send(`Information from user ${request.body} name : ${request.body.userName} photo: ${request.body.photo} score ${request.body.userScore}`)

        var userInfo = request.body
        var minimumDifference = 40;

        
        for (let i = 0; i < userInfo.userScore.length; i++) {
            const element = userInfo.userScore[i];
            var numbers = parseInt(element)
            userSum += numbers;
            console.log(`Line 55: ${userSum}`)
        }
   
        for (var i = 0; i < friends.length; i++) {
            var totalDifference = 0;
            var element = friends[i].scores.length
            console.log(element)
            for (var j = 0; j < friends[i].scores.length; j++) {
                var difference = Math.abs(userInfo.userScore[j] - friends[i].scores[j]);
                totalDifference += difference;
                console.log(`line 62 ${totalDifference}`)
            }
            if (totalDifference < minimumDifference) {
                friendIndex = i;
                minimumDifference = totalDifference;
                console.log(`Line 67 ${friendIndex}`);
                console.log(`Line 68 ${minimumDifference}`);

            }
        }


    })
}