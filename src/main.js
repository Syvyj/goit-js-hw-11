import { fetchImages } from "./js/pixabay-api.js";
import { renderImages } from "./js/render-functions.js";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

document.getElementById("search-form").addEventListener("submit", async (event) => {
  event.preventDefault();

  const query = document.getElementById("search-input").value.trim();
  if (!query) {
    iziToast.warning({
      title: "Warning",
      message: "Please enter a search term!",
    });
    return;
  }

  document.querySelector('header').classList.add('searched');
  document.querySelector('main').classList.add('visible');

  const gallery = document.querySelector('.gallery');
  const loader = document.querySelector('.loader');

  gallery.innerHTML = ''; // Clear the gallery between requests
  loader.style.display = 'block'; // Show the loader

  try {
    const images = await fetchImages(query);
    renderImages(images);
  } catch (error) {
    iziToast.error({
      title: "Error",
      message: "Failed to fetch images. Please try again later.",
    });
  } finally {
    loader.style.display = 'none'; // Hide the loader
  }
});