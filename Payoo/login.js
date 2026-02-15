const login_btn = document.getElementById("login-btn")
login_btn.addEventListener("click", function(event){
    event.preventDefault();
    const account_number = document.getElementById("account-number").value
    const login_pin = getValueById("login-pin")
    if(account_number.length === 11){
        if(login_pin === 1234){
            window.location = "./home.html"
        }
        else{
        alert("vul pin");

        }
    }
    else{
        alert("wrong account number");

    }
})