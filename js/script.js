const loginButton = document.getElementById("login-button").addEventListener('click' , function(e){
    e.preventDefault();
   
    const phoneNumber = document.getElementById("phone-num")
    const phoneNumberValue = phoneNumber.value;
    const pinNumber = document.getElementById("pin-number")
    const pinNumberValue = pinNumber.value;
   
    console.log(phoneNumberValue , pinNumberValue)
   
    if(phoneNumberValue === "123" && pinNumberValue === "00"){
         
         window.location.href = "./home.html"
         
        }
        else{
               alert("please enter the correct value")
            }
   
   })