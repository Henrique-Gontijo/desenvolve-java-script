const htmlMain = document.getElementsByTagName("main")[0];
const postInput = document.getElementById("post-field");
const postButton = document.getElementById("post-button");
const userNameInput = document.getElementById("username-field");
const avatarInput = document.getElementById("avatar-field");
const saveUserButton = document.getElementById("saveUser-button");
const profileDiv = document.getElementById("user-profile");

function loadUserDataInHTML() {
    const userData = JSON.parse(localStorage.getItem("userData"));

    const profileAvatar = document.createElement("img");
    profileAvatar.id = "profile-avatar";
    profileAvatar.src = userData.avatar;

    const profileP = document.createElement("P");
    profileP.innerText = "Seu nome:";

    const profileUserName = document.createElement("strong");
    profileUserName.id = "profile-userName"
    profileUserName.innerText = userData.userName;

    profileDiv.appendChild(profileAvatar);
    profileDiv.appendChild(profileP);
    profileDiv.appendChild(profileUserName);

    userNameInput.value = userData.userName;
    avatarInput.value = userData.avatar;
}

if (! localStorage.getItem("userData")) {
    localStorage.setItem("userData", JSON.stringify({userName: "Guest", avatar:"https://placecats.com/poppy/400/400"}));
}

loadUserDataInHTML();


if (! localStorage.getItem("feed")) {
    localStorage.setItem("feed", "[]");
}

saveUserButton.addEventListener("click", async () => {
    const userName = userNameInput.value;
    const userAvatar = avatarInput.value;
    const userData = {userName: userName, avatar: userAvatar};
    localStorage.setItem("userData", JSON.stringify(userData));

    profileDiv.innerHTML = "";
    loadUserDataInHTML();

    alert("Dados de usuário salvos com sucesso!");
})

const getApiImage = async () => {
    const apiResponse = await fetch("https://api.thecatapi.com/v1/images/search");
    const apiData = await apiResponse.json();

    return apiData;
}

const createPostObject = (text, imgLink) => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    const postObject = {date: new Date(), userName: userData.userName, avatar: userData.avatar,
        postText: text, catImg: imgLink, likeN: 0
    }

    return postObject;
}

function generateTimeString(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hour = date.getHours();
    const minute = date.getMinutes();

    console.log(hour, minute)
    return `${day < 10 ? "0" + day : day}/${month < 10 ? "0" + month : month}/${year} - ${hour}:${minute < 10 ? "0" + minute : minute}`;
}

function addPostToHTML(index) {
    const feed = JSON.parse(localStorage.getItem("feed"));
    let postObject = feed[index] ;

    const postDiv = document.createElement("div");
    postDiv.classList.add("post");

    const postTopDiv = document.createElement("div");
    postTopDiv.classList.add("post-top");

    const avatarImg = document.createElement("img");
    avatarImg.src = postObject.avatar;
    avatarImg.classList.add("post-avatar");

    const userName = document.createElement("strong");
    userName.classList.add("post-userName");
    userName.innerText = postObject.userName;

    const dateP = document.createElement("p");
    dateP.classList.add("post-date");
    const date = new Date(postObject.date);
    dateP.textContent = generateTimeString(date);

    const suportP = document.createElement("p");
    suportP.classList.add("middle");

    const likeButton = document.createElement("button");
    likeButton.classList.add("like-button");

    const likeImg = document.createElement("img");
    likeImg.src = "img/heart.png";
    likeButton.appendChild(likeImg);

    const likeP = document.createElement("p");
    likeP.classList.add("like-number");
    likeP.innerText = postObject.likeN;

    const postP = document.createElement("p");
    postP.innerText = postObject.postText;

    const catImg = document.createElement("img");
    catImg.classList.add("post-image")
    catImg.src = postObject.catImg;

    

    postTopDiv.appendChild(avatarImg);
    postTopDiv.appendChild(userName);
    postTopDiv.appendChild(dateP);
    postTopDiv.appendChild(suportP);
    postTopDiv.appendChild(likeButton);
    postTopDiv.appendChild(likeP);
    postDiv.appendChild(postTopDiv);
    postDiv.appendChild(postP);
    postDiv.appendChild(catImg);
    htmlMain.appendChild(postDiv);

    likeImg.addEventListener("mouseover", () => {
        likeImg.src = "img/heart2.png"
    })

    likeImg.addEventListener("mouseout", () => {
        likeImg.src = "img/heart.png"
    })

    likeButton.addEventListener("click", () => {
        postObject.likeN ++;
        localStorage.setItem("feed", JSON.stringify(feed));
        likeP.innerText = postObject.likeN;
    })
}

const loadAllPosts = () => {
    const feed = JSON.parse(localStorage.getItem("feed"));
    for (let i in feed) {
        addPostToHTML(i);
    }
}

loadAllPosts();

postButton.addEventListener("click", async () => {
    try {
        const apiData = await getApiImage();
        const newPost = createPostObject(postInput.value, apiData[0].url);
        postInput.value = "";
        let feed = JSON.parse(localStorage.getItem("feed"));
        feed.push(newPost);
        localStorage.setItem("feed", JSON.stringify(feed));
        addPostToHTML(feed.length - 1);
        
    } catch (error) {
        console.log("Erro ao buscar imagem da API: ", error);
    }
});

