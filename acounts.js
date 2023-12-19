var acounts = [
{
    "id": 0,
    "username": "admin",
    "email": "admin@gmail.com",
    "password": "admin"

},
];
/*doesnt work*/
const button = document.getElementById('password');
button.addEventListener("input",function(){ alert("too long"); })

const loginForm = document.getElementById('Login_id');
loginForm.addEventListener('submit', Validation);

function Validation(event)
{
    event.preventDefault();

    const email = document.getElementById('email');
    const password = document.getElementById('password');

    if(!validateEmail(email.value))
    {
        alert('Please enter correct email!');
        return;
    }
    if(!validatePass(password.value))
    {
        alert('Please enter correct email!');
        return;
    }

    alert('Log in is Successful')
}

function vaidateEmail()
{
    let conditions = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return conditions.test(email);
}

function validatePass()
{
    let minLenght = 8;
    let HasUppercase = /[A-Z]/.test(password);
    let HasLowercase = /[a-z]/.test(password);
    let HasNumbers = /[0-9]/.test(password);

    return (password.Lenght >= minLenght && HasUppercase && HasLowercase && HasNumbers);
}
