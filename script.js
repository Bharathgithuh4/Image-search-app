// API Key and endpoint
const API_KEY = 'wQG_Yshq4Ik1HqbbrMpdUrj_R0r6i3oNerCVlHBpPFM';
const API_URL = 'https://api.unsplash.com/search/photos';

// DOM elements
const searchQueryInput = document.getElementById('search-query');
const searchButton = document.getElementById('search-btn');
const imageGallery = document.getElementById('image-gallery');

// Function to fetch images based on the search query
async function fetchImages(query) {
  const response = await fetch(`${API_URL}?query=${query}&client_id=${API_KEY}`);
  const data = await response.json();
  return data.results;
}

// Function to render images to the gallery
function renderImages(images) {
  imageGallery.innerHTML = ''; // Clear previous results
  images.forEach(image => {
    const imgElement = document.createElement('img');
    imgElement.src = image.urls.small;
    imgElement.alt = image.alt_description;
    imageGallery.appendChild(imgElement);
  });
}

// Event listener for the search button
searchButton.addEventListener('click', async () => {
  const query = searchQueryInput.value.trim();
  if (query) {
    const images = await fetchImages(query);
    renderImages(images);
  } else {
    alert('Please enter a search term.');
  }
});

// Event listener for the Enter key (optional)
searchQueryInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    searchButton.click();
  }
});
