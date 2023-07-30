window.addEventListener("load", ()=>{
    // variables
    const bill = document.querySelector("#bill-total")
    const tip = document.querySelector("#tip")
    const decreaseBtn = document.querySelector(".minus")
    const increaseBtn = document.querySelector(".plus")
    const peopleCount = document.querySelector(".people-num")
    const totalPerPers = document.querySelector(".total")
    // const calcBtn = document.querySelector(".calc-btn")

    let peopleCountNum = Number(peopleCount.innerText)

    function calcBillTip(){
        const billval = Number(Math.abs(bill.value))
        const tipVal = Number(tip.value)

        const billCalc = (tipVal / 100) * billval
        const billFormular = (billval + billCalc) / Number(peopleCountNum)
        totalPerPers.textContent = billFormular.toFixed(2)
    }
    decreaseBtn.addEventListener("click", decreasePeople)
    increaseBtn.addEventListener("click", increasePeople)
    // calcBtn.addEventListener("click", calcBillTip)
    function increasePeople() {
        peopleCountNum++
        peopleCount.innerText = peopleCountNum
    }
    function decreasePeople() {
        if(peopleCountNum > 1) {
            peopleCountNum--
        }
        peopleCount.innerText = peopleCountNum
    }
    // calculate automatically
    setInterval(()=>{
        calcBillTip()
    }, 500)
})