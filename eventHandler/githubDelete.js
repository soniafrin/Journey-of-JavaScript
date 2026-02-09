const deleteGithub = document.getElementById("user-delete").addEventListener("keyup", function(event){ 
    const disabledBtn = document.getElementById("btn-disabled")
    const secret_title = document.getElementById("secret-title");
    // const text = event.target.value;
    if(event.target.value === "delete"){
        disabledBtn.removeAttribute("disabled");
    }
    else{
        disabledBtn.setAttribute("disabled", true);
    }
    disabledBtn.addEventListener("click", function(){
    
            secret_title.style.display = "none"

        })

})

