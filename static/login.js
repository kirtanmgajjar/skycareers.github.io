username = document.querySelector("#username");
errormsg = document.querySelector(".errormessage");
password = document.querySelector("#password");
loginButton = document.querySelector("#login_button");
emailCheck = /.[^()<>,;:"\\\[\]]+@+[a-zA-Z]+\.+[a-zA-z]/;
//passwordCheck = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&.?]).{7,12}/;
loginButton.disabled = true;

username.addEventListener('input',toggle);
password.addEventListener('input',toggle);


function toggle(){
    if(emailCheck.test(username.value) && password.value.length !=0 )
        loginButton.disabled = false;
    else
        loginButton.disabled = true;
}


username.addEventListener('input',() => {
    if(emailCheck.test(username.value)){
        errormsg.textContent = '';
        errormsg.className = 'errormessage';
    }
    else {
        errormsg.textContent = 'Please enter valid email.';
        errormsg.className = 'errormessage active';
    }
});



