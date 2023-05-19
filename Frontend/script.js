function getRandomNumberAndReload() {
  fetch('/random-number')
    .then(response => response.json())
    .then(data => {
      const randomNumber = data.number;
      // Do something with the random number
      console.log(randomNumber);
      // Display the random number in the HTML element
      document.getElementById('randomNumber').textContent = randomNumber;
      // Reload the page
      //window.location.reload();
    })
    .catch(error => {
      // Handle any errors that occurred during the request
      console.error('Error:', error);
    });
}
