


 import  confetti from 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/+esm';

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
   join.textContent='joined successfully!';
      
   confetti({
  particleCount: 150,
  spread: 60,
  origin: { y: 0.6 }, 
  startVelocity: 15,  // Cuts the initial upward blast speed in half
  gravity: 1.0,       // Standard gravity so it falls at a natural pace
  ticks: 150          // Gives it more time to finish falling before disappearing
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




