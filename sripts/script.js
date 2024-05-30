// Get the element with the ID 'myDiv'
const myDiv = document.getElementById('myDiv');

// Initially hide the 'myDiv' element
myDiv.style.display = 'none';

// Define the URL and options for the API request
const url = 'https://fortune-cookie4.p.rapidapi.com/slack';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '8c6d76b497mshdf5aee64139bc3cp1f01cfjsn9e4046c458c5',
        // 'X-RapidAPI-Key': process.env.RAPIDAPI_KEY, // Accessing the API key from environment variables
        'X-RapidAPI-Host': 'fortune-cookie4.p.rapidapi.com'
    }
};

// Define the async function to fetch fortune
async function fetchFortune() {
    try {
        // Fetch data from the API
        const response = await fetch(url, options);
        const result = await response.json();
        
        // Show the 'myDiv' element
        myDiv.style.display = 'block';
        
        // Get the element with the ID 'fortuneContent'
        const fortuneContent = document.getElementById('fortuneContent');

        // Get the fortune text from the API result
        let fortuneText = result.text;

        // Capitalize the first letter and add a period if not present
        fortuneText = fortuneText.charAt(0).toUpperCase() + fortuneText.slice(1);
        if (fortuneText.charAt(fortuneText.length - 1) !== '.') {
            fortuneText += '.';
        }

        // Update the content of the 'fortuneContent' element
        fortuneContent.textContent = fortuneText;

        // Optionally clear the message after 7 seconds
        // setTimeout(() => {
        //     fortuneContent.textContent = '';
        // }, 7000);
        
        // Log the API result to the console
        console.log(result);
    } catch (error) {
        // Log any errors that occur during the fetch
        const errorMessage = 'Error fetching Fortune: ' + error.message;
        console.error(errorMessage);
    }
}

// Wait for the DOM content to be loaded before attaching the event listener
document.addEventListener('DOMContentLoaded', function() {
    // Get the button elements by their IDs
    const searchButton = document.getElementById('searchButton');
    const searchButton2 = document.getElementById('searchButton2');
    const planetContent = document.getElementById('planetContent');
    
    // Check if the searchButton exists in the DOM
    if (searchButton) {
        // Add a click event listener to the button
        searchButton.addEventListener('click', fetchFortune);
    }

    // Check if the searchButton2 and planetContent exist in the DOM
    if (searchButton2 && planetContent) {
        // Ensure the planet content is initially hidden
        planetContent.style.display = 'none';
        
        // Add a click event listener to the button
        searchButton2.addEventListener('click', function() {
            // Toggle the display property of the planet content
            if (planetContent.style.display === 'none' || planetContent.style.display === '') {
                planetContent.style.display = 'flex';
            } else {
                planetContent.style.display = 'none';
            }
        });
    }
});

// Function to navigate to a new page
function openPage(url) {
    window.location.href = url;
}
