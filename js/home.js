document.getElementById('log-out').addEventListener('click', function () {
    window.location.href = '/index.html'
})


document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();

    const inputAddMoney = document.getElementById('input-add-money').value;
    const inputPinNumber = document.getElementById('input-pin-number').value;

    if (inputAddMoney === Number || inputPinNumber === '1111') {
        const Blance = document.getElementById('carrent-blance').innerText;
        const newInputMoney = parseFloat(inputAddMoney);
        const newBlance = parseFloat(Blance);
        const totalMoney = newBlance + newInputMoney
        document.getElementById('carrent-blance').innerText = totalMoney;
        // inputAddMoney.innerText = " ";
        // inputPinNumber.innerText = " ";
    }
    else {
        alert('Faild to add money .....')
    }


})