 document.getElementById("addMoneyBtn").addEventListener('click' , function(){
    // showSectionById("addMoneySection").classList.remove('hidden')
    // showSectionById("cashOutSection").classList.add('hidden')
    // showSectionById("transection").classList.add('hidden')

    showSectionById('addMoneySection')


    // showSectionById('addMoneyBtn').classList.add('tral')
    // showSectionById('cashOutBtn').classList.remove('tral')
    // showSectionById('transectionBtn').classList.remove('tral')

    activeColorById('addMoneyBtn')
})
 document.getElementById("cashOutBtn").addEventListener('click' , function(){
    // showSectionById("addMoneySection").classList.add('hidden')
    // showSectionById("cashOutSection").classList.remove('hidden')
    // showSectionById("transection").classList.add('hidden')
    showSectionById('cashOutSection')

    // showSectionById('cashOutBtn').classList.add('tral')
    // showSectionById('addMoneyBtn').classList.remove('tral')
    // showSectionById('transectionBtn').classList.remove('tral')

    activeColorById('cashOutBtn')

   
})
 document.getElementById("transectionBtn").addEventListener('click' , function(){
    // showSectionById("addMoneySection").classList.add('hidden')
    // showSectionById("cashOutSection").classList.add('hidden')
    // showSectionById("transection").classList.remove('hidden')

    showSectionById('transection')

    
    // showSectionById('cashOutBtn').classList.remove('tral')
    // showSectionById('addMoneyBtn').classList.remove('tral')
    // showSectionById('transectionBtn').classList.add('tral')

    
    activeColorById('transectionBtn')
})