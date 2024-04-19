const vidContainer = document.getElementById("vid_c");

const getVideos = async () => {
  const apiKey = "y4IHXNAEoU3df2MuwZdQDhJuzH9L9breBPbAAGHVzQMRQTxcQoAXDaqU";

  fetch(`https://api.pexels.com/videos/search?query=${document.getElementById("search_vid").value}&page=2&per_page=15`, {
    method: "GET",
    headers: {
      Authorization: apiKey,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      vidContainer.innerHTML = data.videos
        .map((video) => {
          return ` <video width="350" height="350"  controls mute>
          <source src="${video.video_files[0].link}" type="video/mp4">
          Your browser does not support the video tag.
        </video>`;
        })
        .join("");

      // This will log the retrieved data to the console
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

getVideos();


document.getElementById("search_video").addEventListener("click", getVideos)