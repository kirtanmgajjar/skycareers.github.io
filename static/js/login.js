showpswd = document.querySelector("#eye-off");
pwd = document.querySelector("#password");
email = document.querySelector("#email");
loginButton = document.querySelector("#login_button");

loginButton.disabled = true;

emailCheck = /^.[^@()<>,;:"\\\[\]]+@+[a-zA-Z]+\.+.*[a-zA-Z]$/;
showpswd.addEventListener("click",() => {
    if(showpswd.name == "eye-off-outline")
    {
        showpswd.name = 'eye-outline';
        pwd.type = 'text';
    }
    else
    {
        showpswd.name = 'eye-off-outline';
        pwd.type = 'password';
    }
});


email.addEventListener("focusout", styleset);
email.addEventListener("focusin", styleset2);
pwd.addEventListener("focusout", styleset);
pwd.addEventListener("focusin", styleset2);

email.addEventListener("input", () => {
    if(emailCheck.test(email.value))
    {
        email.style.color = 'white';
        email.nextElementSibling.style.color = 'white';
        email.previousElementSibling.style.color = 'white';
        email.parentElement.style.borderBottomColor = 'white';
        
    }
    else
    {
        email.style.color = 'red';
        email.nextElementSibling.style.color = 'red';
        email.previousElementSibling.style.color = 'red';
        email.parentElement.style.borderBottomColor = 'red';
        
    }
    if(emailCheck.test(email.value)&&pwd.value)
        loginButton.disabled = false;
    else
        loginButton.disabled = true;
});

pwd.addEventListener("input", () => {
    if(emailCheck.test(email.value)&&pwd.value)
        loginButton.disabled = false;
    else
        loginButton.disabled = true;
});
function styleset()
{
    if(this.value)
        this.nextElementSibling.style.top = '-5px';
    else
        this.nextElementSibling.style.top = '50%';
}
function styleset2()
{
    this.nextElementSibling.style.top  = '-5px';
}