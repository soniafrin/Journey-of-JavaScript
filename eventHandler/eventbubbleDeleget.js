    // console.log(items)
const items = document.getElementById("item-list");
    items.addEventListener("click", function(event){
    // console.log(event.target.parentNode)
    event.target.parentNode.removeChild(event.target)  
    })

// const items = document.getElementById("item-list");
//     // console.log(items)
//     items.addEventListener("click", function(event){
//     console.log(event.target)
//     })



//add new item
document.getElementById("add-new-item").addEventListener("click", function(event){
    const newItem = document.createElement("li")
    newItem.innerHTML = "new item"
    const itemList = document.getElementById("item-list")
    itemList.appendChild(newItem)
    newItem.classList.add("item")
})

