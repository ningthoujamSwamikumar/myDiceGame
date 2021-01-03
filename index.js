//setting random outcome for player 1
var randomNumber1 = Math.floor(Math.random()*6)+1;
var diceOutcome1 = "images/dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src",diceOutcome1);

//setting random outcome for player 2
var randomNumber2 = Math.floor(Math.random()*6)+1;
var diceOutcome2 = "images/dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src",diceOutcome2);

//setting winner
if(randomNumber1>randomNumber2){
  document.querySelector(".display").innerHTML = "🚩Player 1 wins";
}
else if(randomNumber2>randomNumber1){
  document.querySelector(".display").innerHTML = "Player 2 wins🚩";
}
else if(randomNumber1===randomNumber2){
  document.querySelector(".display").innerHTML="Draw!";
}
