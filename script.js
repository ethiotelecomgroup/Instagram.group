


  import confetti from 'https://jsdelivr.net';

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
            const join=document.getElementById('join');
   join.textContent='joined';
      join.addEventListener('click', () => {
    confetti({
      particleCount: 150,  // Number of confetti pieces
      spread: 70,          // Angle spread of the blast
      origin: { y: 0.6 }   // Start slightly above the bottom window edge
    });
  });            


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
