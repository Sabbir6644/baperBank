
document.getElementById('deposit-btn').addEventListener('click', function(){
    
     const depositInput = document.getElementById('deposit-input');
     const depositValueString = depositInput.value;
     const depositValue = parseFloat(depositValueString);
     if(isNaN(depositValue)){
          alert ('Please Provide number');
          depositInput.value = '';
          return;
     }
     const depositInitialValue = document.getElementById('deposit');
     const depositStringValue = depositInitialValue.innerText;
     const depositValueFlot = parseFloat(depositStringValue);
     const calculateDeposit = depositValue + depositValueFlot;
     depositInitialValue.innerText= calculateDeposit;
     
     depositInput.value = '';
     const primaryBalance = document.getElementById('balance');
     const primaryBalanceValueString = primaryBalance.innerText;
     const primaryBalanceValue = parseFloat(primaryBalanceValueString);
     const newBalance= primaryBalanceValue + depositValue;
     primaryBalance.innerText = newBalance;
})

   // console.log(depositInitialValue);

document.getElementById('withdraw-btn').addEventListener('click', function (){
     const withdrawInput = document.getElementById('withdraw-input');
     const withdrawValueString = withdrawInput.value;
     const withdrawValue = parseFloat(withdrawValueString);   
     if(isNaN(withdrawValue)){
          alert ('Please Provide number');
          withdrawInput.value = '';
          return;
     } 
    
     
     const withdrawInitialValue = document.getElementById('withdraw');
     const withdrawStringValue = withdrawInitialValue.innerText;
     const withdrawValueFlot = parseFloat(withdrawStringValue);
    
     
     const primaryBalance = document.getElementById('balance');
     const primaryBalanceValueString = primaryBalance.innerText;
     const primaryBalanceValue = parseFloat(primaryBalanceValueString);
     
     if (withdrawValue > primaryBalanceValue) {
          alert ('You do not have enough money');
          withdrawInput.value = '';
          return; 
      }
      const calculateWithdraw = withdrawValue + withdrawValueFlot;
     withdrawInitialValue.innerText= calculateWithdraw;
     withdrawInput.value = '';
     const newBalance= primaryBalanceValue - withdrawValue;
     

     primaryBalance.innerText = newBalance;
    

})

