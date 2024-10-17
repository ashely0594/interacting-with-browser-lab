const appBody = document.getElementById("app");

const paragraph = app.appendChild(document.createElement("p"));
paragraph.style.color = "blue";

paragraph.textContent = "This is a guessing game";
paragraph.style.color = "green";

let guessNumber = Number(prompt("choose a number from 1 to 5"));

let secretNumber = Math.trunc(Math.random() * 5) + 1;

if (guessNumber === secretNumber) {
    document.querySelector(
        ".message"
    ).textContent = `Yay! You got it! The secret number is ${secretNumber}`;
} else if (guessNumber !== secretNumber) {
    console.log((document.querySelector(".message").textContent = `You lost try again`));
} else {
    alert("Do it all over again");
}