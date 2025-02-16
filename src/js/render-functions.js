import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

export function renderImages(images) {
  const gallery = document.getElementById("gallery");
  
  if (images.length === 0) {
    gallery.innerHTML = "<p>No images found. Try another search.</p>";
    gallery.classList.add('visible');
    return;
  }

  const markup = images
    .map(
      (img) => `
      <a href="${img.largeImageURL}" class="gallery-item">
        <img src="${img.webformatURL}" alt="${img.tags}" loading="lazy"/>
        <div class="info">
          <p>Likes: ${img.likes}</p>
          <p>Views: ${img.views}</p>
          <p>Comments: ${img.comments}</p>
          <p>Downloads: ${img.downloads}</p>
        </div>
      </a>`
    )
    .join("");

  gallery.innerHTML = markup;
  gallery.classList.add('visible');

  const lightbox = new SimpleLightbox(".gallery-item");
  lightbox.refresh();
}