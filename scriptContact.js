
function openPage(url) {
    window.location.href = url;
  }


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    if (name && email && subject && message) {
        alert('Form submitted successfully!');
        // Here you can add your code to handle form submission, e.g., sending the data to a server
        this.reset(); // Reset the form
    } else {
        alert('Please fill in all the fields.');
    }
});


document.getElementById('searchButton5').addEventListener('click', function() {
    var formContainer = document.getElementById('contactFormContainer');
    if (formContainer.style.display === 'none' || formContainer.style.display === '') {
        formContainer.style.display = 'block';
    } else {
        formContainer.style.display = 'none';
    }
});


