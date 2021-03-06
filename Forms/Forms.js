const text = document.querySelector('#text');
const textError = document.querySelector('.text-error');
text.addEventListener('input', function () {
    let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
    if (nameRegex.test(text.value)) {
        textError.textContent = "";
    } else {
        let errorMsg = "Name is invalid";
        textError.textContent = errorMsg;
    }
});

const email = document.querySelector('#email');
const emailError = document.querySelector('.email-error');
email.addEventListener('input',function(){
    let emailRegex = RegExp('^[0-9a-zA-Z+-._]+@[-+_.0-9a-zA-Z]*.[a-zA-Z]{2,3}.([a-zA-z]{2,3})$');
    if(emailRegex.test(email.value)){
        emailError.textContent="";
    }else{
        emailError.textContent="Email is InValid";
    }
});

const phone = document.querySelector('#tel');
const errorTel = document.querySelector('.tel-error');
phone.addEventListener('input',function(){
    let phoneRegex = RegExp('^[+][0-9]{1,}\\s?[1-9]{1}[0-9]{9}$');
    if(phoneRegex.test(phone.value)){
        errorTel
    .textContent="";
    }else{
        errorTel
    .textContent="Phone number is not correct";
    }
});

const password = document.querySelector("#pwd");
const pwdError = document.querySelector(".pwd-error");
password.addEventListener('input',function(){
    let passRegex = RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@]).{8,}$");
    if(passRegex.test(password.value)){
        pwdError.textContent="";
    }else{
        pwdError.textContent="Password is incorrect";
    }
});

const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input', function () {
    output.textContent = salary.value;
});