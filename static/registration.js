password = document.querySelector("#password");
pwdinfo = document.querySelector(".pswd_info");
passwordCheck = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&.?]).{7,12}/;

password.addEventListener("focus",() => {
    pwdinfo.className = 'pswd_info active';
});

password.addEventListener("blur",() => {
    pwdinfo.className = 'pswd_info';
});

password.addEventListener("input",() => {
    numCheck = /(?=.*[0-9])/

    switch (password.value) {
        case 
    }
    if(numCheck.test(password.value))
    {
        document.getElementById("number").className = 'valid';
    }
    else{
        document.getElementById("number").className = 'invalid';
    }
});
