//get username
let username = "Chris"

//Get the modal
let modal = document.getElementById("myModal")

// Get the button that opens the modal.
let newPostBtn = document.getElementById("new-post")

//Get the <span> element that closes the modal
let closeX = document.getElementsByClassName("close")[0];

// get the post submit button
let postSubmit = document.getElementsByClassName("btn")

// form title
let formTitleValue = document.forms["myForm"]["title"]
//form subject
let subjectValue = document.forms["myForm"]["subject"]
// form textarea
let boxValue = document.forms["myForm"]["textarea"]

//When the user clicks the button, open the modal
newPostBtn.onclick = () => {
    modal.style.display = "block"
}

// When the user clicks on (x), close the modal
closeX.onclick = () => {

    // If the forms are not blank just add the note back to the main container
    if (formTitleValue.value !== "") {
        addNote()
    }

    // Close the Modal a.k.a. "Ninja Vanish!!"
    modal.style.display = "none"

    // Clear out the forms on exit
    clearForms()
}

//When the user clicks anywhere outside of the modal, close it
// window onclick = (event) => {
//     if (event.target === modal) {
//         modal.style.display = "none"
//     }
// }

addNote = () => {
    // get the input value
    let inputValue = document.querySelector("#myModal > div > div > form > fieldset > label:nth-child(2) > input").value

    // get text box value
    let textBox = document.querySelector("#text").value

    // Form Validation
    if (inputValue == "") {
        alert("Every Zenote must have a Title.")
        return false;
    }



    // dynamically created content

    // create a div element
    let div = document.createElement("div")

    // add 'post' class name to the div
    div.classList.add('post')

    // create a div for the title
    let titleDiv = document.createElement("div")

    // add 'title-div' class name to the div
    titleDiv.classList.add("title-div")

    // create an H1 element
    let h1 = document.createElement("h1")

    // add the post-title class to the h1 element
    h1.classList.add('post-title')

    // Capitalize First Letter of Title.

    // put the form title value in a variable
    let formTitle = formTitleValue.value

    //get the first letter of our variable formTitle
    const firstLetter = formTitle.charAt(0)

    // Capitalize the first letter and store it in a variable
    const firstLetterCap = firstLetter.toUpperCase()

    // Get the remaining letters in the title
    const remainingLetters = formTitle.slice(1)

    // Combine both the newly Capitalized first letter and the remaining letters into a variable
    const capitalizedWord = firstLetterCap + remainingLetters

    // get the new capitalized string from the input Title value and put it into the h1
    h1.textContent = capitalizedWord

    // add the h1 one to the newly created div
    titleDiv.appendChild(h1)

    // add the titleDiv to the 'postDiv'
    div.appendChild(titleDiv)

    // create options div
    let optionsDiv = document.createElement("div")

    // add the options class name to the new div
    optionsDiv.classList.add("options")

    // create edit icon
    let editIcon = document.createElement("i")

    // add the edit font-awesome icon
    editIcon.classList.add("fas")
    editIcon.classList.add("fa-edit")

    // add the onClick attribute to the edit Icon
    editIcon.setAttribute("onClick", "updatePost(this)")

    // create delete icon
    let deleteIcon = document.createElement("i")

    // add the delete font-awesome icon
    deleteIcon.classList.add("fas")
    deleteIcon.classList.add("fa-trash-alt")

    // add the onClick attribute to the delete Icon
    deleteIcon.setAttribute("onClick", "deletePost(this)")

    // add the icons to the options div
    optionsDiv.appendChild(editIcon)
    optionsDiv.appendChild(deleteIcon)

    // add the options div to the titleDiv
    titleDiv.appendChild(optionsDiv)

    // create a paragraph element
    let p = document.createElement("p")

    // insert user text area data into the new parapgrah
    p.textContent = textBox

    // add the p the the new post div
    div.appendChild(p)

    // assign date to a variable
    let date = new Date().toDateString()

    // create a post-info div
    postInfo = document.createElement("div")

    //create a p element
    postInfoP = document.createElement("p")

    //add class name of post-info to the div
    postInfoP.classList.add('post-info')

    // Create post-info data
    let info = `<p>Created on <span class="date">${date}</span> by<span class="author"> ${username}</span`;

    // update the post info paragrah with the date and username
    postInfoP.innerHTML = info

    // postInfo.appendChild(infoData)
    div.appendChild(postInfoP)

    // get the container div
    let container = document.querySelector("body > div.container")

    // add the div with all the data into the container div
    container.appendChild(div)

    // add AOS fade-in to the note divs
    // div.setAttribute("data-aos", "fade-in")
    // clear the forms
    clearForms()

    // close the modal
    closeNote()
}

// close modal
closeNote = () => {
    modal.style.display = "none";
}


// clear forms 
let clearForms = () => {
    formTitleValue.value = ""
    subjectValue.value = ""
    boxValue.value = ""
}

// update post
let updatePost = (e) => {
    deletePost(e)
    modal.style.display = "block";
    formTitleValue.value = e.parentElement.parentElement.textContent
    boxValue.value = e.parentElement.parentElement.nextSibling.textContent
}

// delete post
let deletePost = (e) => {
    e.parentElement.parentElement.parentElement.classList.add('fade-out')

    setTimeout(function () {
        e.parentElement.parentElement.parentElement.remove()
    }, 900)
}
