// Step 1: Read existing JSON data (optional)
var accounts = [];
try {
    const data = fetch('./accounts.json');
    accounts = JSON.parse(data);
    console.log("loaded");
} catch (err) {
    console.error('Error reading JSON file:', err);
    console.log("unloaded");
}

function validationLogIn() {
    let email_input = document.getElementById('email-input').value;
    let password_input = document.getElementById('password-input').value;
    let username_input = document.getElementById('username-input').value;
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

    let failed_Reg = false;

    console.log(email);
    if (!validateEmail(email)) {
        alert('Please enter correct email!');
        failed_Reg = true;
        return;
    }
    if (!validatePass(password)) {
        alert('Please enter correct password!');
        failed_Reg = true;
        return;
    }
    /*for (let i = 0; i <= accounts.length; i++) {
        if (username == accounts[i].username) {
            alert('Username exist!');
            failed_Reg = true;
            break;
        }
    }*/

    if (password != confirmPass) {
        alert('Passwords doesnt match!');
        failed_Reg = true;
        return;
    }
    if (failed_Reg == false) {
        alert('Registration is Successful');
        // Step 2: Modify/Add data
        const newData = {
            "user": [{
                "id": accounts.length,
                "username": username,
                "email": email,
                "password": password
            }]
        };        
        accounts.push(newData); // Add the new data to the array
        
        // Step 3: Write the updated JSON data back to the file
        try {
            const jsonData = JSON.stringify(accounts, null, 2);
            fs.writeFileSync('yourfile.json', jsonData);
            console.log('Data added successfully.');
        } catch (err) {
            console.error('Error writing to JSON file:', err);
        }
    }
}

function validateEmail(email) {
    const conditions = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    console.log(conditions.test(email));
    return conditions.test(email);
}

function validatePass(password) {
    const minLenght = 8;
    const HasUppercase = /[A-Z]/g;
    const HasLowercase = /[a-z]/g;
    const HasNumbers = /[0-9]/g;
    return ((password.length >= 8) && HasLowercase.test(password) && HasUppercase.test(password) && HasNumbers.test(password));
}


