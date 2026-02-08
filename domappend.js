// console.log("I am exploring append")
const placesList = document.getElementById("places_list");
const li = document.createElement("li")
li.innerText = "singapore"
console.log(li)
placesList.appendChild(li)
console.log(placesList)

const mainContainer = document.getElementById("main_container")
// const mainContainer = document.getElementsByTagName("main")
// console.log(mainContainer)
    const section = document.createElement("section")
console.log(section)
        const h2 = document.createElement("h2")
        h2.innerText = "I am exploring append child"
section.appendChild(h2)
        const ul = document.createElement("ul")
        section.appendChild(ul)
            const li2 = document.createElement("li")
            li2.innerText = "append child one"
            ul.appendChild(li2)

            const li3 = document.createElement("li")
            li3.innerText = "append child Two"
            ul.appendChild(li3)

            const li4 = document.createElement("li")
            li4.innerText = "append child three"
            ul.appendChild(li4)

            const li5 = document.createElement("li")
            li5.innerText = "append child four"
            ul.appendChild(li5)

            const li6 = document.createElement("li")
            li6.innerText = "append child five"
            ul.appendChild(li6)

mainContainer.appendChild(section)

// set innerHtml directly
const dressSection = document.createElement("section")
// console.log(dressSection)
dressSection.innerHTML = `
<h2>Creating another section directly with innerHTML</h2>
<ul>
    <li> direct innerHTML li one</li>
    <li> direct innerHTML li Two</li>
    <li> direct innerHTML li three</li>
    <li> direct innerHTML li four</li>
</ul>
`
mainContainer.append(dressSection)