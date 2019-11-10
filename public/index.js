var answersArr = [];
var numbersArr = []
// $("#submit-button").on("click", function(){
//     event.preventDefault()
// answer1 = $("#questionOne").value
// console.log(answer1)
// alert(answer1)
// });

function getInputValue(){
    // Selecting the input element and get its value 
    var answer1 = document.getElementById("questionOne").value;
    var answer2 = document.getElementById("questionTwo").value;
    var answer3 = document.getElementById("questionThree").value;
    var answer4 = document.getElementById("questionFour").value;
    var answer5 = document.getElementById("questionFive").value;
    var answer6 = document.getElementById("questionSix").value;
    var answer7 = document.getElementById("questionSeven").value;
    var answer8 = document.getElementById("questionEight").value;
    var answer9 = document.getElementById("questionNine").value;
    var answer10 = document.getElementById("questionTen").value;

    // Displaying the value
    console.log(answer1);
    answersArr.push(answer1,answer2,answer3,answer4,answer5,answer6,answer7,answer8,answer9,answer10)
    

    for (let i = 0; i < answersArr.length; i++) {
        const element = answersArr[i];
        var numbers = parseInt(element)
        numbersArr.push(numbers)
    }
    console.log(numbersArr)
}