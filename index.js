let computerGuess;
let userGuess=[];
let userGuessUpdate= document.getElementById("textOutput");
let userNumberUpdate=document.getElementById("inputBox");

const init=()=>{
    computerGuess=Math.floor(Math.random()*100);
    //  console.log(computerGuess);
    document.getElementById("newGameButton").style.display="none";
    document.getElementById("gameArea").style.display="none";
};

const startGame = () => {
    document.getElementById("welcomeScreen").style.display="none";
    document.getElementById("gameArea").style.display="block"; 
}

//reload the page ie start the new game

const newGameBegin = () => {
    window.location.reload();
}

//start new game
const startNewGame = () => {
    document.getElementById("newGameButton").style.display="inline";
    userNumberUpdate.setAttribute("disabled", true);
}

//main LOgic OF our game

const compareGuess = () =>{
    const userNumber = Number(document.getElementById("inputBox").value);
    userGuess=[...userGuess, userNumber];
    //... is spread operator that is used to store the value of previous number ie userGuess
    document.getElementById("guesses").innerHTML=userGuess;

    //check the value low or high
    if(userGuess.length< maxGuess)
   { 
    if(computerGuess<userNumber){
        userGuessUpdate.innerHTML= "Your guess is high🤔";
        userNumberUpdate.value="";
    }
    else if(computerGuess>userNumber){
        userGuessUpdate.innerHTML= "Your guess is low😮";
        userNumberUpdate.value="";
    }
    else{
        userGuessUpdate.innerHTML= "It's Correct😁";
        userNumberUpdate.value="";
        startNewGame();
    }
   }
    //for last attempt

    else{ if(computerGuess<userNumber){
        userGuessUpdate.innerHTML= `You loose!! Your correct number was ${computerGuess}` ;
        userNumberUpdate.value="";
        startNewGame();
    }
    else if(computerGuess>userNumber){
        userGuessUpdate.innerHTML= "Your guess is low😮";
        userNumberUpdate.value="";
        startNewGame();
    }
    else{
        userGuessUpdate.innerHTML= "It's Correct😁";
        userNumberUpdate.value="";
        startNewGame();
    }

    }
    document.getElementById("attempts").innerHTML=userGuess.length;
};

const easyMode= () => {
    maxGuess=10;
    startGame();
};

const hardMode = () => {
    maxGuess=5 ;
    startGame();
};



