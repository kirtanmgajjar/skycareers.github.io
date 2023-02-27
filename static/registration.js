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
    smallCaseCheck = /(?=.*[a-z])/
    capitalCaseCheck = /(?=.*[A-Z])/
    specialCheck = /(?=.*[*.!@$%^&.?])/

    if(numCheck.test(password.value))
        document.getElementById("number").className = 'valid';
    else
        document.getElementById("number").className = 'invalid';

    if(smallCaseCheck.test(password.value))
        document.getElementById("letter").className = 'valid';
    else
        document.getElementById("letter").className = 'invalid';

    if(capitalCaseCheck.test(password.value))
        document.getElementById("capital").className = 'valid';
    else
        document.getElementById("capital").className = 'invalid';

    if(specialCheck.test(password.value))
        document.getElementById("special").className = 'valid';
    else
        document.getElementById("special").className = 'invalid';

    if(password.value.length>7 && password.value.length<15)
        document.getElementById("length").className = 'valid';
    else
        document.getElementById("length").className = 'invalid';

});
