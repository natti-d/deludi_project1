var accounts = [
    {
        "id": 0,
        "username": "admin",
        "email": "admin@gmail.com",
        "password": "admin"
    },
    {
        "id": 1,
        "username": "test",
        "email": "test@gmail.com",
        "password": "test"
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

function validationLogIn() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let username = document.getElementById('username').value;
    let failed_Login = true;

    for (let i = 0; i <= accounts.length; i++) {
        if (username == accounts[i].username) {
            if (email == accounts[i].email) {
                if (password == accounts[i].password) {
                    alert("Влязохте успешно!");
                    failed_Login = false;
                }
            }
        }
    }
    console.log(1);
    alert("Грешни данни! Моля проверете пак!");

    if (failed_Login) {
    }
}

function ValidationRegister() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPass = document.getElementById('confirmPass').value;
    let username = document.getElementById('username').value;

    if (!validateEmail(email.value)) {
        alert('Please enter correct email!');
        return;
    }
    if (!validatePass(password.value)) {
        alert('Please enter correct email!');
        return;
    }
    for (let i = 0; i <= accounts.length; i++) {
        if (username == accounts[i].username) {
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


