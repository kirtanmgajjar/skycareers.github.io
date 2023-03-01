fname = document.querySelector("#fname");
lname = document.querySelector("#lname");
gender = document.querySelector("#gender");
dob = document.querySelector("#dob");
pnumber = document.querySelector("#pnumber");
email = document.querySelector("#email");
password = document.querySelector("#password");
cpassword = document.querySelector("#cpassword");
pwdinfo = document.querySelector(".pswd_info");
passwordCheck = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&.?]).{7,14}/;
cpwdinfo = document.querySelector(".cpswd_info");
signup = document.querySelector("#signup_button");
selectBox = document.querySelector(".selectbox");
signup.disabled = true;
emailCheck = /.[^()<>,;:"\\\[\]]+@+[a-zA-Z]+\.+[a-zA-z]/;
pnumberCheck = /\d{10}/;



password.addEventListener("focus",() => {
    pwdinfo.className = 'pswd_info active';
});

password.addEventListener("blur",() => {
    pwdinfo.className = 'pswd_info';
});

cpassword.addEventListener("focus",() => {
    cpwdinfo.className = 'cpswd_info active';
});

cpassword.addEventListener("blur",() => {
    cpwdinfo.className = 'cpswd_info';
});

cpassword.addEventListener("input",() => {
    if(cpassword.value==password.value && password.value){
    document.getElementById("checkpass").className = 'valid';
    document.querySelector("#checkpass > ion-icon").name = 'checkmark-circle';
    }
    else
    {
        document.getElementById("checkpass").className = 'invalid';
        document.querySelector("#checkpass > ion-icon").name = 'close-circle';
    }
    
});


password.addEventListener("input",() => {
    numCheck = /(?=.*[0-9])/
    smallCaseCheck = /(?=.*[a-z])/
    capitalCaseCheck = /(?=.*[A-Z])/
    specialCheck = /(?=.*[*.!@$%^&.?])/

    if(numCheck.test(password.value))
    {
        document.getElementById("number").className = 'valid';
        document.querySelector("#number > ion-icon").name = 'checkmark-circle';
    }
    else{
        document.getElementById("number").className = 'invalid';
        document.querySelector("#number > ion-icon").name = 'close-circle';
}
    if(smallCaseCheck.test(password.value)){
        document.getElementById("letter").className = 'valid';
        document.querySelector("#letter > ion-icon").name = 'checkmark-circle';
    }
    else{
        document.getElementById("letter").className = 'invalid';
        document.querySelector("#letter > ion-icon").name = 'close-circle';
}

    if(capitalCaseCheck.test(password.value)){
        document.getElementById("capital").className = 'valid';
        document.querySelector("#capital > ion-icon").name = 'checkmark-circle';
}
    else{
        document.getElementById("capital").className = 'invalid';
        document.querySelector("#capital > ion-icon").name = 'close-circle';
}

    if(specialCheck.test(password.value)){
        document.getElementById("special").className = 'valid';
        document.querySelector("#special > ion-icon").name = 'checkmark-circle';
}
    else{
        document.getElementById("special").className = 'invalid';
        document.querySelector("#special > ion-icon").name = 'close-circle';

}
    if(password.value.length>7 && password.value.length<15){
        document.getElementById("length").className = 'valid';
        document.querySelector("#length > ion-icon").name = 'checkmark-circle';
}
    else{
        document.getElementById("length").className = 'invalid';
        document.querySelector("#length > ion-icon").name = 'close-circle';
        }
});

fname.addEventListener('input',toggle);
lname.addEventListener('input',toggle);
gender.addEventListener('change',toggle);
dob.addEventListener('input',toggle);
pnumber.addEventListener('input',toggle);
email.addEventListener('input',toggle);
password.addEventListener('input',toggle);
cpassword.addEventListener('input',toggle);


function toggle(){
    if(emailCheck.test(email.value) && passwordCheck.test(password.value) && cpassword.value==password.value 
    && fname.value && lname.value && dob.value && pnumberCheck.test(pnumber.value) && gender.value)
        signup.disabled = false;
    else
        signup.disabled = true;
}
