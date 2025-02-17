const refs = {
  searchForm: document.querySelector('.search-form'),
  gallery: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'), // Add loader reference
};

// ...existing code...

async function handleSubmit(event) {
  event.preventDefault();
  const searchQuery = event.target.elements.searchQuery.value.trim();
  
  if (!searchQuery) {
    Notiflix.Notify.failure('Please enter a search query');
    return;
  }

  currentPage = 1;
  refs.gallery.innerHTML = ''; // Clear gallery before new search
  
  try {
    refs.loader.style.display = 'block'; // Show loader
    const data = await fetchImages(searchQuery, currentPage);
    refs.loader.style.display = 'none'; // Hide loader
    
    if (data.hits.length === 0) {
      Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.');
      return;
    }

    renderGallery(data.hits);
    new SimpleLightbox('.gallery a');
    Notiflix.Notify.success(`Hooray! We found ${data.totalHits} images.`);
  } catch (error) {
    refs.loader.style.display = 'none'; // Hide loader on error
    Notiflix.Notify.failure('Something went wrong. Please try again.');
  }
}

// ...existing code...

async function loadMore() {
  try {
    refs.loader.style.display = 'block'; // Show loader
    const data = await fetchImages(currentSearchQuery, currentPage);
    refs.loader.style.display = 'none'; // Hide loader
    
    renderGallery(data.hits);
    // ...existing code...
  } catch (error) {
    refs.loader.style.display = 'none'; // Hide loader on error
    Notiflix.Notify.failure('Something went wrong. Please try again.');
  }
}
