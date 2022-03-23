
const card = document.getElementById('card');

function openRegister() {
    card.style.transform = "rotateY(-180deg)";
}
function openLogin() {
    card.style.transform = "rotateY(0deg)";
}


document.getElementById("forgot").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "flex";
})

document.querySelector(".close").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
})