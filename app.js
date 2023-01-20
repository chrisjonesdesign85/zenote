//username
let username = "Chris"

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
    let yes = document.querySelector("#myModal > div > div > form > fieldse > label:nth-child(2) > input").value
    let textBox = document.querySelector("#text").value
    let div = document.createElement("div")
    div.classList.add('post-test')
    let h1 = document.createElement("h1")
    h1.setAttribute("contenteditable", "true")
    h1.textContent = yes
    div.appendChild(h1)
    let p = document.createElement("p")
    p.setAttribute("contenteditable", "true")

    // insert user text area data into the new parapgrah
    p.textContent = textBox

    // add the p the the new post div
    div.appendChild(p)

    // Create post-info section

    // assign date to a variable
    let date = new Date().toDateString()

    // create a div
    postInfo = document.createElement("div")

    //add class name of post-info to the div
    postInfo.classList.add('post-info')

    //create a p element
    postInfoP = document.createElement("p")

    // Create post-info data
    let info = `<p>Created on <span class="date">${date}</span> by<span class="author"> ${username}</span`;

    postInfoP.innerHTML = info


    // postInfo.appendChild(infoData)
    div.appendChild(postInfoP)

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