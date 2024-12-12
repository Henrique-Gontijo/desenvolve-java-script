const textInput = document.getElementById("tweet-field");
const tweetButton = document.getElementById("tweet-button");
const htmlMain = document.getElementTagName("main")[0];

localStorage.setItem("userData", JSON.stringify(
    {name: "Louie", avatar: "https://placecats.com/louie/50/50"}
));

function createPostObject(text) {
    const userData = JSON.parse(localStorage.getItem("userData"));
    const postObject = {date: new Date(), userName: userData.name, avatar: userData.avatar,
        postText: text, catImg: "https://fastly.picsum.photos/id/14/600/335.jpg?hmac=_aYx5ZQ5HYQXc6qFQun4JmGcP1vicqK37SHUrpBeEho",
        likesN: 0
    }

    return postObject
}

function addPostToHTML(postObject) {
    const postDiv = document.createElement("div");
    postDiv.classList.add("post");

    const avatarImg = document.createElement("img");
    avatarImg.src = postObject.avatar;

    const userName = document.createElement("strong");
    userName.innerText = postObject.name;

    const postP = document.createElement("p");
    postP.innerText = postObject.postText;

    const catImg = document.createElement("img");
    catImg.src = postObject.catImg;

    const likeButton = document.createElement("button");
    likeButton.classList.add("like-button");
    likeButton.textContent = "<3"

    postDiv.appendChild(avatarImg);
    postDiv.appendChild(userName);
    postDiv.appendChild(postP);
    postDiv.appendChild(catImg);
    postDiv.appendChild(likeButton);
    document.body.main.appendChild(postDiv);
}

tweetButton.addEventListener("click", () => {
    const post = createPostObject(textInput.value);
    addPostToHTML(post);
});

