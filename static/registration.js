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

const ul = document.querySelector("ul"),
input = ul.querySelector("input");
rSkill = document.querySelector(".remove-skill");

let tags = [];

function createTag()
{
    ul.querySelectorAll("li").forEach(li => li.remove());      //removing duplicate tags
    tags.slice().reverse().forEach(tag => {
        let liTag = `<li>${tag}<ion-icon name="close-outline" onclick="remove(this, '${tag}')"></ion-icon></li>`;
        ul.insertAdjacentHTML("afterbegin", liTag);
    });
}

function remove(element, tag)
{
    let index = tags.indexOf(tag); //getting removing tag index
    tags = [...tags.slice(0, index), ...tags.slice(index + 1)];//removing the selected tag
    element.parentElement.remove();     //removing li of removed tag
}

function addTag(e)
{
    if(e.key == "Enter")
    {
        let tag = e.target.value.replace(/\s+/g, ' '); //remove unwanted spaces from user tag
        if(tag.length > 0 && !tags.includes(tag))      //if tag len >1 and tag isn't exist already
        {
            tag.split(',').forEach(tag => {             //spliting each tag from comma
                tags.push(tag);                         //adding each tag inside array
                createTag();
            });
        }
        e.target.value = "";
    }
    
}
input.addEventListener("keyup",addTag);


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
    if(cpassword.value==password.value && password.value)
    cpwdinfo.style.color="#209720";
    else
    cpwdinfo.style.color="#ff0000";
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
