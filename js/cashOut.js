document.getElementById('btn-cash-out').addEventListener('click',function(e){
    e.preventDefault();
    console.log(654)
    const cashOut =document.getElementById('input-cash-out').value;
    const cashOutNumber =parseFloat(cashOut);
    const pinNumber =document.getElementById('input-cash-out-pin').value;
    if(pinNumber ==='1111'){
        console.log(5454)
        const blacne =document.getElementById('carrent-blance').innerText;
        
        const blanceNumber =parseFloat(blacne);
        console.log(blanceNumber);
        const newBlance = blanceNumber-cashOutNumber;
        document.getElementById('carrent-blance').innerText= newBlance;
    }
    else{
        alert('Faild to cash out...')
    }
})