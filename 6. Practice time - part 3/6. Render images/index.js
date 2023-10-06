// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.
const containerEl = document.getElementById("container")
const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
]
 function renderpic(pic) {
    let picString =""
    for (let i = 0; i < pic.length; i++) {
        picString += `
                <img class="team-img" src="${pic[i]}">
        `
    }
    containerEl.innerHTML = picString
 }
 renderpic(imgs)