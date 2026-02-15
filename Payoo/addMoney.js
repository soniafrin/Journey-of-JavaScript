const add_money_btn = document.getElementById("add-money-btn")
.addEventListener("click", function(event){
    event.preventDefault();
    const add_amount = getValueById("add-amount")
    // console.log(typeof add_amount)
    const available_balance = getInnerTextById("available-balance")
    const account_number = document.getElementById("account-number").value
     const sum = available_balance + add_amount;
    const add_money_pin = getValueById("add-money-pin");
    if(add_money_pin === 1234){
     setInnerTextByIdAndValue("available-balance", sum);

     const transactionHis = document.getElementById("trasaction-history");
     const p = document.createElement("p")
     p.innerText = `
     money added ${add_amount} from ${account_number};
     `
     transactionHis.appendChild(p);
     handleToggle("add-money", "none")
     handleToggle("trasaction-history-box", "block")
     

   
    }
    else{
        alert("Write a valid pin")
    }

    
})



