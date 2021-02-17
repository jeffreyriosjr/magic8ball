
content.classList.add("shake")

setTimeout(function(){
    content.classList.remove("shake");}, 1000 )
    setTimeout(function(){getEightBall();}, 1000)



function generate_random(max_number) {
    return Math.round(Math.random()*max_number);
}
let button = document.querySelector("button");
let answer = document.querySelector("#answer");

button.addEventListener("click", function(){

    let randomNumber = generate_random(10);
    let answerText = "";

    if (randomNumber == 0) {
        answerText = "Oh Absolutely!";

    }
    if (randomNumber == 1) {
        answerText = "Sorry I dont Think So =(";

    }
    if (randomNumber == 2) {
        answerText = "Say What Now?";

    }
    if (randomNumber == 3) {
        answerText = "No way Dude.";

    }
    if (randomNumber == 4) {
        answerText = "Better Ask Vinson..";

    }
    if (randomNumber == 5) {
        answerText = "Seriously, Ask Vinson!";

    }
    if (randomNumber == 6) {
        answerText = "What would Jeff do?";

    }
    if (randomNumber == 7) {
        answerText = "Your Answer might hurt..";

    }
    if (randomNumber == 8) {
        answerText = "NOPE!";

    }
    if (randomNumber == 9) {
        answerText = "Ask Shmeric";

    }
    if (randomNumber == 10) {
        answerText = "No Habla ingles";

    }

   

    answer.innerHTML = answerText;
    
    
});
