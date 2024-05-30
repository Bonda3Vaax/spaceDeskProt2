$(document).ready(function() {
    // Initially hide the 'myDiv' element
    $('#myDiv').hide();

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
            $('#myDiv').show();

            // Get the fortune text from the API result
            let fortuneText = result.text;

            // Capitalize the first letter and add a period if not present
            fortuneText = fortuneText.charAt(0).toUpperCase() + fortuneText.slice(1);
            if (fortuneText.charAt(fortuneText.length - 1) !== '.') {
                fortuneText += '.';
            }

            // Update the content of the 'fortuneContent' element
            $('#fortuneContent').text(fortuneText);

            // Optionally clear the message after 7 seconds
            // setTimeout(() => {
            //     $('#fortuneContent').text('');
            // }, 7000);
            
            // Log the API result to the console
            console.log(result);
        } catch (error) {
            // Log any errors that occur during the fetch
            const errorMessage = 'Error fetching Fortune: ' + error.message;
            console.error(errorMessage);
        }
    }

    // Attach the event listeners after the DOM is fully loaded
    $('#searchButton').on('click', fetchFortune);

    // Ensure the planet content is initially hidden
    $('#planetContent').hide();

    $('#searchButton2').on('click', function() {
        // Toggle the display property of the planet content
        $('#planetContent').toggle();
    });
});

// Function to navigate to a new page
function openPage(url) {
    window.location.href = url;
}
