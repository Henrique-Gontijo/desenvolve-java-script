const nameInput = document.getElementById("name-field");
const likeButton = document.getElementById("like-button");
const likeParagraph = document.getElementById("likes-feedback");
let personList = []

function addName() {
    personList.push(nameInput.value)
    console.log(personList)
}

 function paragraphTextGenerate() {
     if (personList.length === 0) {
         likeParagraph.innerText = "Ninguém curtiu esta página";
     } else if (personList.length === 1) {
         likeParagraph.innerHTML = `"${personList[0]}" curtiu esta página`
    } else if (personList.length === 2) {
        likeParagraph.innerText = `"${personList[0]}" e "${personList[1]}" curtiram esta página`
    } else if (personList.length === 3) {
        likeParagraph.innerHTML = `"${personList[0]}", "${personList[1]}" e mais 1 pessoa curtiram esta página`
    } else if (personList.length >= 3) {
        likeParagraph.innerHTML = `"${personList[0]}", "${personList[1]}" e mais ${(personList.length - 2)} pessoas curtiram esta página`
    }
}

paragraphTextGenerate()
likeButton.addEventListener('click', () => {
    addName()
    paragraphTextGenerate()
})
