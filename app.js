//Get the modal
let modal = document.getElementById("myModal")

// Get the button that opens the modal.
let btn = document.getElementById("myBtn")

//Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

let postSubmit = document.getElementsByClassName("btn")

//When the user clicks the button, open the modal
btn.onclick = () => {
    modal.style.display = "block";

}

// When the user clicks on <span> (x), close the modal
span.onclick = () => {
    modal.style.display = "none";
}

//When the user clicks anywhere outside of the modal, close it
// window.onclick = (event) => {
//     if (event.target === modal) {
//         modal.style.display = "none"
//     }
// }


test = () => {
    // get title input value
    let yes = document.querySelector("#myModal > div > div > form > fieldse > label:nth-child(2) > input").value

    // get user input for title
    let textBox = document.querySelector("#text").value

    // get user input for text-box
    let div = document.createElement("div")

    // add the post-test class to the div
    div.classList.add('post-test')

    // create a new h1
    let h1 = document.createElement("h1")

    // make the h1 editable 
    h1.setAttribute("contenteditable", "true")

    // give the user input to the h1
    h1.textContent = yes

    // add the h1 to the new div
    div.appendChild(h1)

    // create a new p element
    let p = document.createElement("p")

    //make the p editable
    p.setAttribute("contenteditable", "true")

    // insert user text area data into the new parapgrah
    p.textContent = textBox

    // add the p the the new post div
    div.appendChild(p)

    // Create post-info section

    // assign date to a variable
    let date = Date().toString()

    // cut off the part of the date that we don't need
    let newDate = date.slice(-0, -36)

    // create a div
    postInfo = document.createElement("div")

    //add class name of post-info to the div
    postInfo.classList.add('post-info')


    let postInfoText = `<span>Created on </span> ${newDate} by Admin.`;


    let infoData = document.createTextNode(postInfoText)
    postInfo.appendChild(infoData)
    div.appendChild(postInfo)
    let container = document.querySelector("body > div.container")
    container.appendChild(div)
    // post-submit
    let yesValue = document.forms["myForm"]["title"]
    let subjectValue = document.forms["myForm"]["subject"]
    let boxValue = document.forms["myForm"]["textarea"]
    yesValue.value = ""
    subjectValue.value = ""
    boxValue.value = ""

    modal.style.display = "none";
}