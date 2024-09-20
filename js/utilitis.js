function getCashOutValueById (id){

    const cashOut = document.getElementById(id)
    const cashOutValue = cashOut.value;

    const cashOutNumber = parseFloat(cashOutValue)
    return cashOutNumber;
}

function getBalance (id){
    const mainBalance = document.getElementById(id)
const mainBalanceValue = mainBalance.innerText;
    const mainBalanceNumber = parseFloat(mainBalanceValue)
    return mainBalanceNumber;
}

function showSectionById (id){
  document.getElementById("addMoneySection").classList.add('hidden')
   document.getElementById("cashOutSection").classList.add('hidden')
    document.getElementById("transection").classList.add('hidden')

     document.getElementById(id).classList.remove('hidden')
   
}

function activeColorById (id){
    document.getElementById("addMoneyBtn").classList.remove('tral')
    document.getElementById("cashOutBtn").classList.remove('tral')
    document.getElementById("transectionBtn").classList.remove('tral')

    document.getElementById(id).classList.add('tral')
}