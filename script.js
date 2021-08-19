let button1 = document.querySelector("#button1")

let content1 = document.querySelector("#content1")

let AFFH = "Agriculture, forestry, fishing, and hunting"
let MQOGE = "Mining, quarrying, and oil and gas extraction"

//content 1
for (let x in database[AFFH]) {
    let text = database[AFFH][x]

    let contentPart = document.createElement("a")
        contentPart.innerHTML = database[AFFH][x].info.name
        contentPart.id = database[AFFH][x].info.name.toString()
        contentPart.className = "AFFH"
        contentPart.href = "#"
        content1.appendChild(contentPart)
}
//end of content 1

//content 2
for (let x in database[MQOGE]) {
    let text = database[MQOGE][x]

    let contentPart = document.createElement("a")
        contentPart.innerHTML = database[MQOGE][x].info.name
        contentPart.id = database[MQOGE][x].info.name.toString()
        contentPart.className = "MQOGE"
        contentPart.href = "#"
        content2.appendChild(contentPart)
}
//end of content 2
// ^^^^^ Also Navbar stuff do not touch ^^^^^

for (let i = 1; i < 5; i++) {
    let Id = database[AFFH][i].info.name
document.getElementById(Id).onclick = GFG_click;

}

for (let i = 1; i < 5; i++) {

    let Id2 = database[MQOGE][i].info.name
    document.getElementById(Id2).onclick = GFG_click;
}


function GFG_click(clicked) {
    clickedButton = this.id
    console.log(clickedButton)

    profiles.innerHTML = ""

    for (let i = 1; i < 5; i++) {

        //dropdown 1
        if (clickedButton == database[AFFH][i].info.name) {

            let Header = document.createElement("h1")
            let div = document.createElement("div")
            // let image = document.createElement("img")
            let text1 = document.createElement("p")
            let text2 = document.createElement("p")
            let text3 = document.createElement("p")
            let text4 = document.createElement("p")
            let link = document.createElement("a")
            

            // image.src
            Header.innerHTML = database[AFFH][i].info.name
            text1.innerHTML = "What do people do in the " + database[AFFH][i].info.name + " industry?: "
            text2.innerHTML = database[AFFH][i].info.description + "<hr>"
            text3.innerHTML = "The total amount of people who work in this industry is about " + database[AFFH][i].info.total
            text4.innerHTML = "Out of the " + database[AFFH][i].info.total + " people who work in this industry " + database[AFFH][i].info.BlackEmployed + " are Black/African American, " + database[AFFH][i].info.AsianEmployed + " are Asian and, " + database[AFFH][i].info.HispanicEmployed + " are Hispanic/Latino."
            link.innerHTML = "Click here for " + database[AFFH][i].info.name + " job applications"
            link.href = "https://www.agcareers.com/crop-production-jobs.cfm"

            // div.appendChild(image)
            div.appendChild(Header)
            div.appendChild(text1)
            div.appendChild(text2)
            div.appendChild(text3)
            div.appendChild(text4)
            div.appendChild(link)
            profiles.appendChild(div)
        }
        //end of dropdown 1

        //drowpdown 2
        else if (clickedButton == database[MQOGE][i].info.name) {

            let Header = document.createElement("h1")
            let div = document.createElement("div")
            // let image = document.createElement("img")
            let text1 = document.createElement("p")
            let text2 = document.createElement("p")
            let text3 = document.createElement("p")
            let text4 = document.createElement("p")

            // image.src
            Header.innerHTML = database[MQOGE][i].info.name
            text1.innerHTML = "What do people do in the " + database[MQOGE][i].info.name + " industry?: "
            text2.innerHTML = database[MQOGE][i].info.description + "<hr>"
            text3.innerHTML = "The total amount of people who work in this industry is about " + database[MQOGE][i].info.total
            text4.innerHTML = "Out of the " + database[MQOGE][i].info.total + " people who work in this industry " + database[MQOGE][i].info.BlackEmployed + " are Black/African American, " + database[MQOGE][i].info.AsianEmployed + " are Asian and, " + database[MQOGE][i].info.HispanicEmployed + " are Hispanic/Latino."

            // div.appendChild(image)
            div.appendChild(Header)
            div.appendChild(text1)
            div.appendChild(text2)
            div.appendChild(text3)
            div.appendChild(text4)
            profiles.appendChild(div)
        }
        //end of dropdown 2
        
    }
}


// VVVVVV Navbar stuff do not touch VVVVVV

//button 1
button1.onmouseover = function(event) {
    event.preventDefault()

    button1.style.backgroundColor = "red"
    content1.style.backgroundColor = "grey"
    content1.style.display = "block"
}

button1.onmouseout = function(event) {
    event.preventDefault()

    button1.style.backgroundColor = "#04abb4"
    content1.style.display = "none"
}

content1.onmouseover = function(event) {
    event.preventDefault()

    button1.style.backgroundColor = "red"
    content1.style.backgroundColor = "grey"
    content1.style.display = "block"
}

content1.onmouseout = function(event) {
    event.preventDefault()

    button1.style.backgroundColor = "#04abb4"
    content1.style.display = "none"
}
//end of button 1

//button 2
button2.onmouseover = function(event) {
    event.preventDefault()

    button2.style.backgroundColor = "red"
    content2.style.backgroundColor = "grey"
    content2.style.display = "block"
}

button2.onmouseout = function(event) {
    event.preventDefault()

    button2.style.backgroundColor = "#04abb4"
    content2.style.display = "none"
}

content2.onmouseover = function(event) {
    event.preventDefault()

    button2.style.backgroundColor = "red"
    content2.style.backgroundColor = "grey"
    content2.style.display = "block"
}

content2.onmouseout = function(event) {
    event.preventDefault()

    button2.style.backgroundColor = "#04abb4"
    content2.style.display = "none"
}
//end of button 2
