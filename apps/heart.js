let count = 0;
const main = document.getElementById("main");
const heart = document.getElementById("heart");
const counter = document.getElementById("counter");
const sentence = document.getElementById("sentence");
const video = document.querySelector("video");

const restart = () => { 
    location.href="index.html";
}
const showHorror=()=>{
    videoContainer.style.display = "block";
    video.play();
    video.addEventListener("ended", () => {
        videoContainer.style.display = "none";
        main.innerHTML = `
        <p>❤️ Damla & Kerem ❤️ </p>
        <img src="assets/images/damker.jpeg">
        <p>
        Doğum günün kutlu olsun nice mutlu bizli senelere❤️ 
        </p>
        <button onclick="restart()">Restart</button>
        `;
    })
}
heart.addEventListener("click", () => {
    count++;
    counter.textContent = `${count}`;

    const index = (count - 1) % sentences.length;
    sentence.textContent = sentences[index];

    if (count === sentences.length) {
        showHorror();
    }
});