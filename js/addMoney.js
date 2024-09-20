



document.getElementById("add-money-button").addEventListener('click' , function(e){
    e.preventDefault();
    
    const addMoneyAmount = document.getElementById("add-money-amount")
    const addMoneyValue = addMoneyAmount.value;
    const addMoneyNumber = parseFloat(addMoneyValue)
   

    const addMoneyPin = document.getElementById("add-money-pin")
    const addPinValue = addMoneyPin.value;
    if(isNaN(addMoneyNumber) ){
        return alert("invalid amount")
     }
     
    

    if(addPinValue === '12345'){
      const balance = document.getElementById("balance")
      const balanceValue = balance.innerText;
      const balanceNumber = parseFloat(balanceValue)

     
      const totalMoney = balanceNumber + addMoneyNumber;
      balance.innerText = totalMoney

    //   transection section
const tHistory = document.getElementById("transection-history")
      const transectionHistory = document.createElement('p')
      transectionHistory.innerHTML = `
      
        <p class="text-md px-3 py-2 rounded-xl font-bold bg-white text-green-700  ">Added Amount : ${addMoneyNumber}  New Balance : ${totalMoney}</p>

      `
      
      tHistory.appendChild(transectionHistory)
    }
    else{
        alert("Invalid Pin")
    }

})