const imageContainer = document.getElementById("img_container");

const getImages = async () => {
  const apiKey = "y4IHXNAEoU3df2MuwZdQDhJuzH9L9breBPbAAGHVzQMRQTxcQoAXDaqU";

  fetch(`https://api.pexels.com/v1/search?query=${document.getElementById("search_i").value}&page=2&per_page=15`, {
    method: "GET",
    headers: {
      Authorization: apiKey,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      imageContainer.innerHTML = data.photos
        .map((photo) => {
          return ` <img src="${photo.src.large}" alt="">`;
        })
        .join("");

      // This will log the retrieved data to the console
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

getImages();


document.getElementById("search_image").addEventListener("click", getImages)