if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').then( () => {
    console.log('Service Worker Registered')
})
})
}

const button = document.getElementById('getJokeBtn');
const jokeDisplay = document.getElementById('jokeDisplay');


function fetchRandomJoke() {
    fetch('https://v2.jokeapi.dev/joke/Any?type=single') 
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            
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

button.addEventListener('click', fetchRandomJoke);
