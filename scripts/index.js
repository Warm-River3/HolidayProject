const imagesButton = document.getElementById("imagesButton");
// const musicButton = document.getElementById("musicButton");
const videoButton = document.getElementById("videosButton");
const mapButton = document.getElementById("mapButton");

imagesButton.addEventListener("click", ()=>{
    // musicButton.classList.remove("active");
    videoButton.classList.remove("active");
    mapButton.classList.remove("active");
    imagesButton.classList.add("active");
})

// musicButton.addEventListener("click", ()=>{
//     musicButton.classList.add("active");
//     videoButton.classList.remove("active");
//     mapButton.classList.remove("active");
//     imagesButton.classList.remove("active");
// })

videoButton.addEventListener("click", ()=>{
    // musicButton.classList.remove("active");
    videoButton.classList.add("active");
    mapButton.classList.remove("active");
    imagesButton.classList.remove("active");
})
mapButton.addEventListener("click", ()=>{
    // musicButton.classList.remove("active");
    videoButton.classList.remove("active");
    mapButton.classList.add("active");
    imagesButton.classList.remove("active");
})