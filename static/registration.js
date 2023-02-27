password = document.querySelector("#password");
pwdinfo = document.querySelector(".pswd_info");
passwordCheck = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&.?]).{7,12}/;
password.addEventListener("click",() => {
    pwdinfo.className = 'pswd_info active';
});