let message = null
let personList = ["Joana", "João do caminhão", "Jackson", "Flavinho", "Marcos"]
console.log(personList)

if (personList.length === 0) {
    message = "Ninguém curtiu esta página";
} else if (personList.length === 1) {
    message = `${personList[0]} curtiu esta página`
} else if (personList.length === 2) {
    message = `${personList[0]} e ${personList[1]} curtiram esta página`
} else if (personList.length >= 3) {
    message = `${personList[0]}, ${personList[1]} e mais ${(personList.length - 2)} pessoas curtiram esta página`
}

console.log(message)