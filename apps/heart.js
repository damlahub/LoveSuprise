let count = 0;
const videoContainer = document.getElementById("videoContainer");
const main = document.getElementById("main");
const heart = document.getElementById("heart");
const counter = document.getElementById("counter");
const sentence = document.getElementById("sentence");
const video = document.querySelector("video");

const restart = () => { 
    location.href="index.html";
}
const lastScene = ()=>{
    const { title, image, description } = customizedTexts;
        videoContainer.style.display = "none";
        main.innerHTML = `
            <h1>${title}</h1>
            <img src="${image}">
            <p>${description}</p>
            <button onclick="restart()">Restart</button>
        `;
}
const showHorror = () => {
    const video = document.createElement("video");
    video.setAttribute("autoplay", true);
    video.style.width = "100%";

    const source = document.createElement("source");
    source.setAttribute("src", customizedTexts.clip);

    video.appendChild(source);
    videoContainer.appendChild(video);
    videoContainer.style.display = "block";
    
    video.play();
    // last scene
    video.onended = () => {
        lastScene();
    };
};
heart.addEventListener("click", () => {
    count++;
    counter.textContent = `${count}`;

    const index = (count - 1) % sentences.length;
    sentence.textContent = sentences[index];

    if (count === sentences.length) {
        showHorror();
    }
});
