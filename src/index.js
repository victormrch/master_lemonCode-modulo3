import logoImg from "./assets/logo_deadpool.jpg";
const userName = `Victor`;
const hello = `Hola ${userName}`;

console.log(hello);

const img = document.createElement("img");
img.src = logoImg;

console.log(img);
document.getElementById("imgContainer").appendChild(img);
