document.getElementById('deposit-btn').addEventListener('click', function () {
     const value = inputValue('deposit-input');
     const text = textValue('deposit');
     const newAmount = text + value;
     const balance = textValue('balance');
     const totalBalance = balance + value;
     textSet('deposit', newAmount)
     textSet('balance', totalBalance);

})

document.getElementById('withdraw-btn').addEventListener('click', function () {
     const value = inputValue('withdraw-input');
     const text = textValue('withdraw');
     const newAmount = text + value;
     
     const balance = textValue('balance');
     const totalBalance = balance - value;
     if(value>balance){
          alert('Tor baper bank a ato tk nai.')
          return;
     }
     textSet('withdraw', newAmount)
     textSet('balance', totalBalance);
})

