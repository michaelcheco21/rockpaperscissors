// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */

var randomNumber = 0;
var userChoice = [];
var computerChoice = [];
var winner= [];

// DOCUMENT READY FUNCTION BELOW
$("#shoot").click(function(){
    $("#userChoice").text($("input").val());
    randomNumber = Math.floor(Math.random() * 8);
    userChoice = $("input").val();
    
    if(randomNumber <= 2){
        computerChoice = "Rock";
    }else if(randomNumber <= 5 && randomNumber > 2){
        computerChoice = "Paper";
    }else if(randomNumber <= 6 && randomNumber > 5){
        computerChoice = "Scissors";
    }
    
});


