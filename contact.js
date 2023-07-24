var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var phoneError = document.getElementById('phone-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName() {
    var name = document.getElementById('contact-name').value;
    if (name.length == 0) {
        nameError.innerHTML = 'name is requred'
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = 'write full name';
        return false;
    }
    nameError.innerHTML = '<i class="fas fa-check-circle"><i>';
    return true;
}

function validatephone() {
    var phone = document.getElementById('contact-phone').value;
    if (name.length == 0) {
        nameError.innerHTML = 'Phone no is requred'
    }
    if (phone.length !== 10) {
        nameError.innerHTML = 'Enter 10 digits';
        return false;
    }
    if (!phone.match(/^[0-9]{10}[A-Za-z]*$/)) {
        phoneError.innerHTML = 'Only digit please';
        return false;
    }
    phoneError.innerHTML = '<i class="fas fa-check-circle"><i>';
    return true;
}

function validateEmail() {
    var email = document.getElementById('contact-email').value;
    if (email.length == 0) {
        nameError.innerHTML = 'Email is requred'
    }
    if (!email.match(/^[A-Za-z]\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = 'Email valid';
        return false
    }
    emailError.innerHTML = '<i class="fas fa-check-circle"><i>';
    return true;
}

function validateMessage() {
    var message = document.getElementById('contact-message').value;
    var required = 30;
    var left = required - message.length;
    if (left > 0) {
        messageError.innerHTML = left + 'more charecters required';
        return false;
    }
    if (!message.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = 'write full name';
        return false
    }
    messageError.innerHTML = '<i class="fas fa-check-circle"><i>';
    return true;
}

function validateForm() {
    
    if (!validateName() || validateEmail() || validatephone || validateMessage()) {
        submitError.innerHTML = 'please fix error to subit';
        return false;
    }
    
}