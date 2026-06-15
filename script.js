




document.getElementById('loginForm').addEventListener('submit', function(event) {
    // Prevent the default browser form submission/redirect
    event.preventDefault(); 

    const formData = new FormData(this);

    fetch(this.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            alert('Form submitted successfully!');
            // Optional: Reset the form or update the UI here
            this.reset(); 
        } else {
            alert('Something went wrong. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred.');
    });
});
