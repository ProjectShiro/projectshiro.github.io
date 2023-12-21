const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/bg3memecrew-web.png") {
    myImage.setAttribute("src", "images/bg3memecrew-game.png");
  } else {
    myImage.setAttribute("src", "images/bg3memecrew-web.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

myButton.onclick = () => {
  setUserName();
};

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
	  myHeading.textContent = `Baldur's Gate is cool, Yo`;
  } else {
	  localStorage.setItem("name", myName);
	  myHeading.textContent = `Baldur's Gate is cool, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Baldur's Gate is cool, ${storedName}`;
}