// This script provides functionality to search for planet data using the Planets API and display the results on a webpage.
// It handles fetching data, displaying results, and managing UI states for error messages and content visibility.

// Get references to HTML elements
const searchBox = document.getElementById('searchBox'); // Input box for user to type the search query
const searchButton3 = document.getElementById('searchButton3'); // Button to initiate the search
const errorMessage = document.getElementById('errorMessage'); // Element to display error messages

const movieTitle = document.getElementById('movieTitle'); // Element to display the planet name
const movieText = document.getElementById('movieText'); // Element to display the planet mass
const movieCard = document.getElementById('movieCard'); // Container for displaying planet details
const movieMass = document.getElementById('movieMass'); // Element to display the planet mass (not used in this script)
const movieRadius = document.getElementById('movieRadius'); // Element to display the planet radius
const movieTemperature = document.getElementById('movieTemperature'); // Element to display the planet temperature
const movieDistance = document.getElementById('movieDistance'); // Element to display the planet distance
const movieMajorAxis = document.getElementById('movieMajorAxis'); // Element to display the planet major axis
const planetContent = document.getElementById('planetContent'); // Container for additional planet content

// Hide error message, movie card, and planet content initially
errorMessage.style.display = 'none';
movieCard.style.display = 'none';
planetContent.style.display = 'none';

// Add event listener to search button
searchButton3.addEventListener("click", search);

/**
 * Handles the search button click event.
 * Gets the search query from the input box, clears the input box, and loads data based on the query.
 */
function search() {
  const query = searchBox.value.trim(); // Get the search query from the input box and trim any extra spaces
  searchBox.value = ''; // Clear the search box
  if (query) { // Ensure the query is not empty
    loadData(query); // Load data based on the query
  }
}

/**
 * Fetches data from the Planets API based on the search query.
 * @param {string} query - The search query entered by the user.
 */
async function loadData(query) {
  const url = `https://planets-by-api-ninjas.p.rapidapi.com/v1/planets?name=${query}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '8c6d76b497mshdf5aee64139bc3cp1f01cfjsn9e4046c458c5', // API key for accessing the Planets API
      // 'X-RapidAPI-Key': process.env.RAPIDAPI_KEY, // Accessing the API key from environment variables
      'X-RapidAPI-Host': 'planets-by-api-ninjas.p.rapidapi.com' // API host
    }
  };

  try {
    searchButton3.disabled = true; // Disable the search button to prevent multiple requests

    const response = await fetch(url, options); // Fetch data from the API
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

/**
 * Displays the fetched data on the webpage.
 * @param {Array} data - The data array returned by the API.
 */
function displayData(data) {
  if (!data.length || data.Error) {
    showError(data.Error || 'No data found'); // Show the error message from the API or default message
    return; // Exit the function
  }

  // Display planet details
  movieCard.style.display = 'block'; // Show the movie card
  errorMessage.style.display = 'none'; // Hide the error message
  movieTitle.innerText = data[0].name; // Display the planet name
  movieText.innerText = `Mass: ${data[0].mass}`; // Display the planet's mass
  movieRadius.innerText = `Radius: ${data[0].radius}`; // Display the planet's radius
  movieTemperature.innerText = `Temperature: ${data[0].temperature}`; // Display the planet's temperature
  movieDistance.innerText = `Distance: ${data[0].distance_light_year} light years`; // Display the planet's distance
  movieMajorAxis.innerText = `Major Axis: ${data[0].semi_major_axis}`; // Display the planet's major axis
}

/**
 * Shows an error message on the webpage.
 * @param {string} message - The error message to display.
 */
function showError(message) {
  errorMessage.style.display = 'block'; // Show the error message
  errorMessage.innerText = message; // Display the provided error message
  movieCard.style.display = 'none'; // Hide the movie card
}
