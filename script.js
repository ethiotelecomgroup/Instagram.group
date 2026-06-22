


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
   join.textContent='joined';
      
    confetti({
      particleCount: 150,  // Number of confetti pieces
      spread: 40,     
      origin: { y: 0.6 } ,

     gravity: 0.2,
     ticks: 100


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
