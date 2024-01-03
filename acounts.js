var accounts = [{
    "user": [{
        "id": 0,
        "username": "admin",
        "email": "admin@gmail.com",
        "password": "admin"
    }]
},
{
    "user": [{
        "id": 1,
        "username": "test",
        "email": "test@gmail.com",
        "password": "test"
    }]
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
    let email_input = document.getElementById('email').value;
    let password_input = document.getElementById('password').value;
    let username_input = document.getElementById('username').value;
    let failed_Login = true;

    /*for (let i = 0; i <= accounts.length; i++) {
        console.log(accounts[i].username.toString());
        if (username_input.toString() == (accounts[i].username).toString()) {
            if (email_input.toString() == (accounts[i].email).toString()) {
                if (password_input.toString() == (accounts[i].password).toString()) {
                    alert("Влязохте успешно!");
                    failed_Login = false;
                }
            }
        }
    }*/
    for (let i = 0; i <= accounts.length; i++) {
        if (username_input == accounts[i].user[0].username && email_input == accounts[i].user[0].email && password_input == accounts[i].user[0].password) {
            alert("Sucessfully logged in.");
            failed_Login = false;
            break;
        }
    }

    if (failed_Login == true) {
        alert("Грешни данни! Моля проверете пак!");
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


