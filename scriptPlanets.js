

// Get references to HTML elements
// const planetContent = document.getElementById('planetContent');

const searchBox = document.getElementById('searchBox');
const searchButton3 = document.getElementById('searchButton3');
const errorMessage = document.getElementById('errorMessage');

const movieTitle = document.getElementById('movieTitle');
const movieText = document.getElementById('movieText');
const movieCard = document.getElementById('movieCard');
const movieMass = document.getElementById('movieMass');
const movieRadius = document.getElementById('movieRadius');
const movieTemperature = document.getElementById('movieTemperature');
const movieDistance = document.getElementById('movieDistance');
const movieMajorAxis = document.getElementById('movieMajorAxis');


// Hide error message and movie card initially
errorMessage.style.display = 'none';
movieCard.style.display = 'none';
planetContent.style.display = 'none';

// Add event listener to search button
searchButton3.addEventListener("click", search);

// Function to handle the search button click
function search() {
  const query = searchBox.value.trim();
  searchBox.value = ''; // Get the search query from the input box and trim any extra spaces
  if (query) { // Ensure the query is not empty
    loadData(query); // Load data based on the query
  }
}

// Asynchronous function to fetch data from the API
async function loadData(query) {
  const url =`https://planets-by-api-ninjas.p.rapidapi.com/v1/planets?name=${query}`;
  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8c6d76b497mshdf5aee64139bc3cp1f01cfjsn9e4046c458c5',
		'X-RapidAPI-Host': 'planets-by-api-ninjas.p.rapidapi.com'
	}
};

  try {
    searchButton3.disabled = true; // Disable the search button to prevent multiple requests

    const response = await fetch(url, options, query); // Fetch data from the API
    const data = await response.json(); // Parse the response as JSON

    console.log(data); // Log the data for debugging
    displayData(data); // Display the data on the webpage

  } catch (error) {
    console.error(error); // Log any errors
    showError('Failed to load data'); // Display a user-friendly error message

  } finally {
    searchButton3.disabled = false; // Re-enable the search button
  }
}

// Function to display the fetched data on the webpage
function displayData(data) {
  if (data.Error) {
    showError(data.Error); // Show the error message from the API
    return; // Exit the function
  }

  // Display movie details
  movieCard.style.display = 'block'; // Show the movie card
  errorMessage.style.display = 'none'; // Hide the error message
  movieTitle.innerText = data[0].name; // Display the movie title
  movieText.innerText = `Mass: ${data[0].mass}`; // Display the planet's mass
  movieRadius.innerText = `Radius: ${data[0].radius}`; // Display the planet's radius
  movieTemperature.innerText = `Temperature: ${data[0].temperature}`; // Display the planet's temperature
  movieDistance.innerText = `Distance: ${data[0].distance_light_year} light years`; // Display the planet's distance
  movieMajorAxis.innerText = `Major Axis: ${data[0].semi_major_axis}`;
  // movieImage.src = (data.Poster === 'N/A') ? './placeholder.jpg' : data.Poster; // Use the fetched poster image or a placeholder
}

// Function to show error messages
function showError(message) {
  errorMessage.style.display = 'block'; // Show the error message
  errorMessage.innerText = message; // Display the provided error message
  movieCard.style.display = 'none'; // Hide the movie card
}


