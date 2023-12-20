var acounts = [
    {
        "id": 0,
        "username": "admin",
        "email": "admin@gmail.com",
        "password": "admin"
    }
    /*Shablon
    {
        "id": 0,
        "username": "admin",
        "email": "admin@gmail.com",
        "password": "admin"
    },
    */
];

function ValidationLogIn() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let username = document.getElementById('username').value;

    for (let i = 0; i <= acounts.length; i++) {
        if (username == acounts[i].username && email == acounts[i].email && password == acounts[i].password) {
            alert("Log in was Successful!");
        }
        else{
            console.log(false);
        }
    }
}

function ValidationRegister() {
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let confirmPass = document.getElementById('confirmPass');
    let username = document.getElementById('username');

    if (!validateEmail(email.value)) {
        alert('Please enter correct email!');
        return;
    }
    if (!validatePass(password.value)) {
        alert('Please enter correct email!');
        return;
    }
    for (let i; i <= acounts.length; i++) {
        if (username == acounts[i].username) {
            alert('Username exist!');
        }
    }
    if (password == confirmPass) {
        alert('Passwords doesnt match!');
    }

    alert('Registration is Successful');
}

function vaidateEmail() {
    const conditions = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return conditions.test(email);
}

function validatePass() {
    const minLenght = 8;
    const HasUppercase = /[A-Z]/.test(password);
    const HasLowercase = /[a-z]/.test(password);
    const HasNumbers = /\d/.test(password);

    return (password.Lenght >= minLenght && HasUppercase && HasLowercase && HasNumbers);
}


