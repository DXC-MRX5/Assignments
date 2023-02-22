let chance = 100;
let highScore = null;

let random = randomNumbergeneration(100);

function randomNumbergeneration(max){
    return Math.floor(Math.random()*max)+1;
}

document.getElementById("check").addEventListener("click", checkNumber);

function checkNumber(){
    console.log(random);
    console.log("function is on");
    let guessedNum = document.getElementById("guessedNum").value;

    if(chance !==0){
        if(guessedNum > random){
            document.querySelector("#hint").textContent = "Your guess is High.";
            chance--;
            document.querySelector("#chance").textContent = chance;
        }
        else if(guessedNum < random){
            document.querySelector("#hint").textContent = "Your guess is low.";
            chance--;
            document.querySelector("#chance").textContent = chance;
        }
        else{
            document.querySelector("#hint").textContent = "✨🎉Hurray! You Guessed Right🎉✨";
            chance--;
            document.querySelector("#chance").textContent = chance;
            document.querySelector("#highScore").textContent = chance;
            document.querySelector("#master").style.background = "green";
            document.querySelector("#check").style.display ="none";
            document.querySelector(".numBox p").innerText = guessedNum;
        }
    }
    else{
        document.querySelector("#hint").textContent = "Oops game Over !";
    }
}

document.getElementById("playAgainBtn").addEventListener("click", playAgain);

function playAgain(){
    document.querySelector("#master").style.background = "grey";
    document.querySelector("#chance").textContent = chance;
    document.querySelector("#hint").textContent = "Start Guessing...";
    document.querySelector("#highScore").textContent = "0";
    document.querySelector("#guessedNum").value = "";
    document.querySelector("#check").style.display ="block";
}
document.querySelector("#guessedNum").addEventListener("click", colorChange);
function colorChange(){
    document.querySelector("#master").style.background = "rgb(66, 2, 2)";
}