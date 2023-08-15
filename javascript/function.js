function inputValue(inputID){
     const depositInput = document.getElementById(inputID);
     const depositValueString = depositInput.value;
     const depositValue = parseFloat(depositValueString);
     depositInput.value = '';
     if(isNaN(depositValue)){
          alert ('Please Provide number');
          return;
          
     }
    
     return depositValue;
}

function textValue(textID){
     const depositInitialValue = document.getElementById(textID);
     const depositStringValue = depositInitialValue.innerText;
     const depositValueFlot = parseFloat(depositStringValue);
     return depositValueFlot; 
}

function textSet(setLocation,newValue){
     const textId = document.getElementById(setLocation);
     if(isNaN(newValue)){
          return;
          
     }
     textId.innerText = newValue;
}
