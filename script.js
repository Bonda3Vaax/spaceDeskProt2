

const myDiv = document.getElementById('myDiv');

myDiv.style.display = 'none';

const url = 'https://fortune-cookie4.p.rapidapi.com/slack';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '8c6d76b497mshdf5aee64139bc3cp1f01cfjsn9e4046c458c5',
        'X-RapidAPI-Host': 'fortune-cookie4.p.rapidapi.com'
    }
};


// Define the async function to fetch fortune
async function fetchFortune() {
    try {
        // Fetch data from the API
        const response = await fetch(url, options);
        const result = await response.json();
        myDiv.style.display = 'block';
        // Update the content of the centered-div
        const fortuneContent = document.getElementById('fortuneContent');
        fortuneContent.textContent = result.text;

        // Clear the message after 7 seconds
        // setTimeout(() => {
        //     fortuneContent.textContent = '';
        // }, 7000);
        
        console.log(result);
    } catch (error) {
        // Log any errors that occur during the fetch
        console.error('Error fetching Fortune:', error);
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
                
                // movieCard.style.background = 'transparent';
                
            } else {
                planetContent.style.display = 'none';
            }
        });
    }
});
