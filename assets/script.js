require("dotenv").config();
const ACCESS_KEY = process.env.ACCESS_KEY;

async function fetchImageFromUnsplash(query) {
  const endpoint = `https://api.unsplash.com/search/photos?crop=faces&page=1&query=${query}&client_id=${ACCESS_KEY}`;

  try {
    const response = await fetch(endpoint);
    // console.log("Fetch Response OK ");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    if (data && data.results && data.results[0]) {
      // console.log("Data ", data.results);
      // const imageUrl = data.results[0].urls.small;
      const imageUrl = data.results[0].urls.raw;
      // full, raw, regular, small, small_s3, thumb are available.
      displayImage(imageUrl);
    } else {
      console.log("No images found for the given query.");
    }
  } catch (error) {
    console.error(
      "There was a problem with the fetch operation:",
      error.message
    );
  }
}

function displayImage(url) {
  const img = document.createElement("img");
  img.src = url;
  img.alt = url;
  img.height = 300;
  document.body.appendChild(img);
}

function imagesFromUnsplash() {
  let imgs = ["Biriyani", "Beef Steak", "Red Wine"];
  for (i = 0; i < imgs.length; i++) {
    fetchImageFromUnsplash(imgs[i]);
    // This Fetches an image of mountains from Unsplash
  }
}
