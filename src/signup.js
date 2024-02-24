function check(input) {
    const password = document.querySelector('.pass').value;
    const confirmPassword = input.value;

    const error = document.getElementById('alert');

    if (password !== confirmPassword) {
        error.textContent = 'Passwords do not match';
        document.getElementById('submit').disabled = true;
    } else {
        error.textContent = '';
        document.getElementById('submit').disabled = false;
    }
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateForm() {
    const emailPhone = document.querySelector('.email-phn input').value;
    const isEmail = validateEmail(emailPhone);

    const error = document.getElementById('alert');

    if (!(isEmail)) {
        error.textContent = 'Invalid email';
        document.getElementById('submit').disabled = true;
    } else {
        error.textContent = '';
        document.getElementById('submit').disabled = false;
    }
}