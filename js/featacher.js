document.getElementById('btn-show-cash-out').addEventListener('click',function(){
    document.getElementById('cash-out-form').classList.remove('hidden');

    document.getElementById('add-mony-form').classList.add('hidden')
})

document.getElementById('btn-show-add-money').addEventListener('click',function(){
    document.getElementById('cash-out-form').classList.add('hidden');

    document.getElementById('add-mony-form').classList.remove('hidden')
})