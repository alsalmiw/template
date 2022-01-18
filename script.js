const form = document.getElementById('form');
const password1El = document.getElementById('password1'),
password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');
let isValid=false;
let passwordsMatch=false;

function validateForm(){
    // using constraint api
    isValid = form.checkValidity();
    // error messgae
    
    if(!isValid){
        message.textContent='Please fill out all fields';
        message.style.color='red';
        messageContainer.style.borderColor='red';
        messageContainer.style.backgroundColor='white';
        return;
    }
    if (password1El.value === password2El.value)
    {
        passwordsMatch=true;
        password1El.style.borderColor='rgb(97, 139, 12)';
        password2El.style.borderColor='rgb(97, 139, 12)';
    }else{
        passwordsMatch=false;
        message.textContent = 'Make sure passwords match';
        message.style.color = 'red';
        messageContainer.style.borderColor='red';
        password1El.style.borderColor='red';
        password2El.style.borderColor='red';
        messageContainer.style.backgroundColor='white';
        return;
    }

    if (isValid && passwordsMatch){
        message.textContent='Successfully Registered!';
        message.style.color = 'rgb(97, 139, 12)';
        messageContainer.style.borderColor='rgb(97, 139, 12)';
        messageContainer.style.backgroundColor='white';
    }
}

function storeFormData(){
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value
    };
    console.log(user);
}

function processFormData(e){
    e.preventDefault();

    // Validate form
    validateForm();
    if(isValid && passwordsMatch){
         storeFormData();
    }
   

}
// Event Listener
form.addEventListener('submit', processFormData);