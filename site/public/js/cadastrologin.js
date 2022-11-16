
// ---------cadastro e login-------------------------------


const btnsignin = document.querySelector("#signin");
const btnsignup = document.querySelector("#signup");
const body = document.querySelector("body");

btnsignin.addEventListener("click", function () {
    body.className = "sign-in-js";
});

btnsignup.addEventListener("click", function () {
    body.className = "sign-up-js";
});


const btnsignin2 = document.querySelector("#signin2");
const btnsignup2 = document.querySelector("#signup2");

btnsignin2.addEventListener("click", function () {
    body.className = "sign-in-js";
});

btnsignup2.addEventListener("click", function () {
    body.className = "sign-up-js";
});