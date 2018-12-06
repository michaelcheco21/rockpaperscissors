// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */

var randomNumber;
var userChoice;
var cChoice;
var initialUserScore = 0;
var initialComputerScore = 0;


// DOCUMENT READY FUNCTION BELOW
$("#shoot").click(function(){

    $("#userChoice").text($("input").val().toLowerCase());
     userChoice = $("input").val().toLowerCase(); 
     
     //var choices=['Rock', 'Paper', 'Scissors'];
        
    randomNumber = Math.floor(Math.random() * 3);
    
    if(randomNumber === 0){
        cChoice = "rock";
        $("#computerChoice").text("rock");
        
    }else if(randomNumber === 1){
        cChoice = "paper";
        $("#computerChoice").text("paper");
        
    }else if(randomNumber === 2){
        cChoice = "scissors";
        $("#computerChoice").text("scissors");
    }
    
    if(userChoice === "rock" && cChoice === "rock"){
        $("#winner").text("It's a tie!!");
        
    } else if(userChoice === "scissors" && cChoice === "scissors"){
        $("#winner").text("It's a tie!!");
        
    }else if(userChoice === "paper" && cChoice === "paper"){
        $("#winner").text("It's a tie!!");
        
    }else if(userChoice === "rock" && cChoice === "paper"){
        $("#winner").text("Computer Wins!!");
        var robo = $("<img>").attr("src", "http://s.numrush.nl/wp-content/uploads/2015/06/Orig.src_.Susanne.Posel_.Daily_.News-human.robot_.lovelace.turing02_occupycorporatism.jpg");
        $("body").append(robo);
       
       initialComputerScore++;
        
       $("#computerScore").append(initialComputerScore);

    }else if(userChoice === "paper" && cChoice === "scissors"){
        $("#winner").text("Computer Wins!!");
        var robo = $("<img>").attr("src", "http://s.numrush.nl/wp-content/uploads/2015/06/Orig.src_.Susanne.Posel_.Daily_.News-human.robot_.lovelace.turing02_occupycorporatism.jpg");
        $("body").append(robo);
        
        initialComputerScore++;
        
        $("#computerScore").append(initialComputerScore);
        
    }else if(userChoice === "scissors" && cChoice === "rock"){
        $("#winner").text("Computer Wins!!");
        var robo = $("<img>").attr("src", "http://s.numrush.nl/wp-content/uploads/2015/06/Orig.src_.Susanne.Posel_.Daily_.News-human.robot_.lovelace.turing02_occupycorporatism.jpg");
        $("body").append(robo);
        
        initialComputerScore++;
        
        $("#computerScore").append(initialComputerScore);
        
    }else if(userChoice === "rock" && cChoice === "scissors"){
        $("#winner").text("You Win!!");
        var you = $("<img>").attr("src", "http://rs105.pbsrc.com/albums/m237/hrhqueencat/Congratulations/congrats-1.gif~c200");
        $("body").append(you);
        
    }else if(userChoice === "paper" && cChoice === "rock"){
        $("#winner").text("You Win!!");
        var you = $("<img>").attr("src", "http://rs105.pbsrc.com/albums/m237/hrhqueencat/Congratulations/congrats-1.gif~c200");
        $("body").append(you);
        
    }else if(userChoice === "scissors" && cChoice === "paper"){
        $("#winner").text("You Win!!");
        var you = $("<img>").attr("src", "http://rs105.pbsrc.com/albums/m237/hrhqueencat/Congratulations/congrats-1.gif~c200");
        $("body").append(you);
        
    }
    
    
});


