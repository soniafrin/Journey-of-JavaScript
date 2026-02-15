const CashOutBtn = document.getElementById("cash-out-btn").addEventListener("click", function(event){
    event.preventDefault();
    const cash_out_pin = getValueById("cash-out-pin");
    const cash_out_amount = getValueById("cash-out-amount")
    const cash_out_account = document.getElementById("account-number").value
    const availableBalance = getInnerTextById("available-balance")
    if(cash_out_pin === 1234){
        if( cash_out_amount) {
            const restAmmount = availableBalance - cash_out_amount;
            setInnerTextByIdAndValue("available-balance", restAmmount);
            const transactionHis = document.getElementById("trasaction-history");
     const p = document.createElement("p")
     p.innerText = `
     money cash out ${cash_out_amount} from ${cash_out_account} on ${Date.now} ;
     `
     transactionHis.appendChild(p);
     handleToggle("cash-out", "none")
     handleToggle("trasaction-history-box", "block")
     
        }
        else{
            alert("write your cash out amount")
        }
    }
    else{
        alert("Write a valid pin")
    }

    // console.log( typeof convertedPin, " VALUE")

})