const addMoney = document.getElementById("add-money-card").addEventListener("click", function(){
    handleToggle("add-money", "block")
    handleToggle("cash-out", "none") 
})
const CashOut = document.getElementById("cash-out-card").addEventListener("click", function(){
    handleToggle("add-money", "none")
    handleToggle("cash-out", "block")
})

// transactionHistory
const transactionS = document.getElementById("transactions").addEventListener("click", function(){
    handleToggle("trasaction-history-box", "block")
})
