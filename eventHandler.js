// <!--//Type:2 With Onclick and call function-->
function makeGreen(){
           document.body.style.backgroundColor = "green"
        }
function call_function(){
            document.body.style.backgroundColor = "blue"
        }

// <!--//Type:3 With Onclick and set function-->
const btn_with_set_fuction = document.getElementById("btn-with-set-fuction")
        btn_with_set_fuction.onclick = btnWithSetFuction;
        function btnWithSetFuction(){
            document.body.style.backgroundColor = "red"
        }
 const set_function2 = document.getElementById("set-function2")
        set_function2.onclick = setFunction2;

        function setFunction2(){
            document.body.style.backgroundColor = "tomato"
        }

// <!--//Type:4 With ID and write function-->
const change_text = document.getElementById("btn-change-text").onclick = function changeText(){
                const changeText = document.getElementById("change-text")
                changeText.innerText = "Hey! i am testing type 3 event handler"
            }
const id_and_write_function = document.getElementById("id-and-write-function").onclick = function idAndWriteFunction(){
            document.body.style.backgroundColor = "goldenrod"
        }
    
//  <!--//Type:5 With addEventListener-->
const make_yellow = document.getElementById("btn-make-yellow").addEventListener("click", function makeYellow(){
            document.body.style.backgroundColor = "yellow"

        })