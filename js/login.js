// console.log(5454)
document.getElementById('button-login').addEventListener('click', function (event) {
    event.preventDefault();

    const phoneNumber = document.getElementById('phone-Number').value;
    const pinNumber = document.getElementById('pin-number').value;
    if (phoneNumber === '5' && pinNumber === '1111') {
        console.log("Enter your login in");
        window.location.href ='/home.html'

    }
    else {
        console.log('enter your number or pin');

    }


})