// Friendship Vault Password

const correctPassword = "RoKo";

function unlockVault() {

const password = document.getElementById("password").value;

const message = document.getElementById("message");

const button = document.querySelector("button");

if(password === correctPassword){

message.style.color="#22c55e";

message.innerHTML="🔓 Access Granted...";

button.innerHTML="Opening...";

button.disabled=true;

setTimeout(()=>{

window.location.href="choose.html";

},1800);

}else{

message.style.color="#ef4444";

message.innerHTML="❌ Wrong Password";

const box=document.querySelector(".login-box");

box.animate([
{transform:"translateX(-8px)"},
{transform:"translateX(8px)"},
{transform:"translateX(-8px)"},
{transform:"translateX(8px)"},
{transform:"translateX(0px)"}
],{
duration:400
});

}

}

document.getElementById("password").addEventListener("keypress",function(e){

if(e.key==="Enter"){

unlockVault();

}

});
