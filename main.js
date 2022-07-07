const rules = document.querySelector(".how-to-play");
const elements = document.querySelectorAll(".elements div img");
const showRules = document.querySelector(".rules button");
const myScore = document.querySelector(".number");
const images = [
    "images/icon-scissors.svg",
    "images/icon-paper.svg",
    "images/icon-rock.svg"
];
const altText = [
    "scissors",
    "paper",
    "rock"
]
showRules.addEventListener("click", function(){
    rules.style.display = "block";
});
const closeRules = document.querySelector(".top i");
if(closeRules) {
    closeRules.addEventListener("click",function() {
        rules.style.display = "none";
    })
}
//git the source of the clicked image
elements.forEach(function(image){
    image.addEventListener("click", function(){
        const result = document.querySelector(".win-container");
        document.querySelector(".elements").style.display = "none";
        result.style.display  = "flex";
        let msg = document.querySelector(".play-again");
        let you = document.querySelector(".you div img");
        you.src = this.src;
        let box = document.querySelector(".you div");
        box.classList.remove(this.alt);
        box.classList.add(this.alt);
        let index = Math.floor(Math.random() * 3);
        let house = document.querySelector(".house div img");
        let boxHouse = document.querySelector(".house div");
        boxHouse.classList.remove(altText[index]);
        boxHouse.classList.add(altText[index]);
        house.alt = altText[index];
        house.src = images[index];
        ///
        if((this.alt === "rock" && house.alt === "scissors") || (this.alt === "scissors" && house.alt === "paper") || (this.alt === "paper" && house.alt === "rock")){  
            msg.textContent = "you vin";
            myScore.textContent = Number(myScore.innerHTML) + 1;
            localStorage.setItem("score", Number(myScore.textContent));
        } else if(this.alt === house.alt) {
            msg.innerHTML = "Draw"
        } else {
            msg.innerHTML = "you lose"
        }
    });
});
const play = document.querySelector(".alert button");
play.addEventListener("click", function(){
    //localStorage.setItem("score", Number(myScore.textContent));
    window.location.reload();
})
window.addEventListener("load", function(){
    myScore.textContent = this.localStorage.getItem("score");
})