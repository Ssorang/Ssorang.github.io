const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const link = document.querySelector("a");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function OnLoginSubmit(event) {
    event.preventDefault(); // 브라우저의 기본 동작을 막는다.
    const username = loginInput.value; 
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, username);
    console.log(username);
    paintGreetings(username);
}

loginForm.addEventListener("submit", OnLoginSubmit); // 엔터를 누르거나 입력하면 이벤트 발생

function paintGreetings(username){
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hi ${username} ! Do Best !`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", OnLoginSubmit);
} else {
    paintGreetings(savedUsername);
}
