document.addEventListener('DOMContentLoaded', () => {
    getRandomNumber();
  });
  
  function getRandomNumber() {
    fetch('/random-number')
      .then(response => response.json())
      .then(data => {
        const randomNumber = data.number;
        document.getElementById('randomNumber').textContent = `Random Number: ${randomNumber}`;
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  
  document.getElementById('reloadButton').addEventListener('click', () => {
    location.reload();
  });
  