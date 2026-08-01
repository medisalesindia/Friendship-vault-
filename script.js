// Friendship Vault Password

function checkPassword() {

    const password = document.getElementById("password").value;

    const error = document.getElementById("error");

    if(password === "RoKo"){

        error.style.color="#00ff88";

        error.innerHTML="✅ Access Granted...";

        setTimeout(function(){

            window.location.href="choose.html";

        },1200);

    }

    else{

        error.style.color="#ff4d4d";

        error.innerHTML="❌ Wrong Password";

    }

}

// Press Enter to Unlock

document.addEventListener("keydown",function(e){

    if(e.key==="Enter"){

        checkPassword();

    }

});
