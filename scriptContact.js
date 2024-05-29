// Function to navigate to a new page
function openPage(url) {
    window.location.href = url; // Change the current URL to the provided one
}

// Add event listener to the contact form for the submit event
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Get form field values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Check if all fields are filled
    if (name && email && subject && message) {
        alert('Form submitted successfully!'); // Show success alert
        // Here you can add your code to handle form submission, e.g., sending the data to a server
        this.reset(); // Reset the form fields
    } else {
        alert('Please fill in all the fields.'); // Show error alert if any field is empty
    }
});

// Add event listener to the search button for the click event
document.getElementById('searchButton5').addEventListener('click', function() {
    var formContainer = document.getElementById('contactFormContainer'); // Get the form container element
    // Toggle the display property of the form container
    if (formContainer.style.display === 'none' || formContainer.style.display === '') {
        formContainer.style.display = 'block'; // Show the form container
    } else {
        formContainer.style.display = 'none'; // Hide the form container
    }
});

