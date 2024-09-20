document
  .getElementById("cashOut-money-button")
  .addEventListener("click", function (e) {
    e.preventDefault()
const cashOutPin = getCashOutValueById("cashOut-money-pin");
 const cashOutMoney = getCashOutValueById("cashOut-money-amount");
 if(isNaN(cashOutMoney) ){
    return alert("invalid amount")
 }

 
 
    if (cashOutPin === 12345 ) {
     const mainBalance = getBalance("balance");

        if(cashOutMoney > mainBalance){
    return alert("you donot have enough money")
        }
      
      console.log(mainBalance)
      const totalMoney = mainBalance - cashOutMoney;
      document.getElementById("balance").innerText = totalMoney;

   //   transection section
   const tHistory = document.getElementById("transection-history")
   const transectionHistory = document.createElement('p')
   transectionHistory.innerHTML = `
      
   <p class="text-md px-3 py-2 bg-red-200 rounded-xl text-black">Cash Out : ${cashOutMoney}  New Balance : ${totalMoney}</p>

 `
   
   tHistory.appendChild(transectionHistory)
      
    } else {
      alert("Invalid Pin ");
    }
  });
