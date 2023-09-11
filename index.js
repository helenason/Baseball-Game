const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const here = document.querySelector(".here");
let list = document.querySelector(".list");
let answer;
let ball, strike;
let chance = 9;

function paintResult(val) {
    if (strike === 0 && ball === 0) {
        const li = document.createElement("li");
        const textnode = document.createTextNode("OUT");
        li.appendChild(textnode);
        list.appendChild(li);
    }
    else if (strike === 3) {
        list.innerText = "SUCCESS ";
        const btn = document.createElement("button");
        btn.innerText = "restart";
        btn.classList.add("css-btn");
        btn.onclick = function(){handleRestart()};
        list.appendChild(btn);
        chance = 1;
    }
    else {
        const li = document.createElement("li");
        const textnode = document.createTextNode(`${val} = ${strike}S ${ball}B`);
        li.appendChild(textnode);
        list.appendChild(li);
    }
    console.log(strike, ball);
}
function compareWithAnswer(val) {
    strike = 0; ball = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (val[i] === answer[j] && i === j) strike++;
            else if (val[i] === answer[j] && i !== j) ball++;
        }
    }
    paintResult(val);
}
function handleRestart(){
    chance = 9;
    list.innerHTML = "";
    makeRandomNumber();
}
function handleSubmit(event) {
    event.preventDefault();
    if (chance === 0) {
        list.innerText = "FAIL ";
        const btn = document.createElement("button");
        btn.innerText = "restart";
        btn.classList.add("css-btn");
        btn.onclick = function(){handleRestart()};
        list.appendChild(btn);
        input.value = "";
    }
    else {
        const value = (input.value).toString();
        console.log(value);
        compareWithAnswer(value);
        input.value = "";
        chance--;
    }
}
function makeRandomNumber() {
    while (1) {
        answer = (Math.floor(Math.random() * 1000)).toString();
        while (answer[2] === undefined) {
            answer = "0" + answer;
        }
        if (
            answer[0] !== answer[1] &&
            answer[1] !== answer[2] &&
            answer[2] !== answer[0]
        ) break;
    }
    console.log(answer);
    form.addEventListener("submit", handleSubmit);
}
function init() {
    makeRandomNumber();
}
init();