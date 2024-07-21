let score = 0;
let cross = true;
let man = document.querySelector(".man");
let gameover = document.querySelector(".gameover");
let obstacle = document.querySelector(".obstacle");
let scorecount = document.querySelector("#scorecount");
let container = document.querySelector(".container");
let audio1 = new Audio("aahat-horror-40808.mp3");
let audio2 = new Audio("horror.mp3")
setTimeout(() => {
    audio1.play();
}, 1000);
document.addEventListener("keydown", function (event) {
    console.log("key code is:", event.code);
    if (event.code == "ArrowUp") {
        man.classList.add("mananimate");
        setTimeout(() => {
            man.classList.remove("mananimate");
        }, 700);
    } if (event.code == "ArrowRight") {
        let manx = parseInt(window.getComputedStyle(man, null).getPropertyValue("left"));
        man.style.left = manx + 112 + "px";
    } if (event.code == "ArrowLeft") {
        let manX = parseInt(window.getComputedStyle(man, null).getPropertyValue("left"));
        man.style.left = (manX - 112) + "px";
    }
});
setInterval(() => {
    let manX = parseInt(window.getComputedStyle(man, null).getPropertyValue("left"));
    let manY = parseInt(window.getComputedStyle(man, null).getPropertyValue("top"));
    let obsX = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue("left"));
    let obsY = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue("top"));
    let offsetX = Math.abs(manX - obsX);
    // console.log(offsetX);
    let offsetY = Math.abs(manY - obsY);
    if (offsetX < 143 && offsetY < 52) {

        gameover.innerText = `Game Over! reload the game for play again`;
        obstacle.classList.remove("aniobstacle");
        container.classList.remove("container");
        container.classList.add("container2");
        man.classList.add("man2");
        //man.classList.add("mananimate2");
        audio2.play();
        setTimeout(() => {
            audio1.pause();
            audio2.pause();
        }, 1000)


    } else if (offsetX < 143 && cross) {
        score++;
        cross = false;
        scorecount.innerText = `Your Score: ${score}`;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            let anidur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue("animation-duration"));
            let newdur = anidur - 0.1;
            obstacle.style.animationDuration = newdur + "s";
            //  console.log("new",newdur);

        }, 500);

    }


}, 10);