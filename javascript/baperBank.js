document.getElementById('submit-btn').addEventListener('click', function(){
     const inputEmail = document.getElementById('email-input');
     const emailValue = inputEmail.value;
     const inputPass = document.getElementById('input-password');
     const passValue = inputPass.value;
     console.log(emailValue, passValue);
     if(emailValue=== 'sabbirmats99@gmail.com' && passValue === '01755856644'){
          window.location.href= "bank.html"
     } else{
          inputEmail.value ='';
          inputPass.value = '';
          alert('Invalide User');
     }
})