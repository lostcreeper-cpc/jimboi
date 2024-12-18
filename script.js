// Check if the browser supports service workers and register it
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js').then(() => {
            console.log('Service Worker Registered');
        });
    });
}

// Get references to DOM elements
const button = document.getElementById('getJokeBtn');
const jokeDisplay = document.getElementById('jokeDisplay');

// Function to fetch a random joke from an API
function fetchRandomJoke() {
    fetch('https://v2.jokeapi.dev/joke/Any?type=single') // Joke API URL (single joke)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Display the joke from the response data
            if (data.joke) {
                jokeDisplay.textContent = data.joke;
            } else {
                jokeDisplay.textContent = "Sorry, no joke found!";
            }
        })
        .catch(error => {
            console.error('Error fetching joke:', error);
            jokeDisplay.textContent = 'Sorry, something went wrong. Please try again!';
        });
}

// Event listener to fetch a joke when the button is clicked
button.addEventListener('click', fetchRandomJoke);
