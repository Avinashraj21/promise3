// Function to fetch the Astronomy Picture of the Day (APOD) from NASA API
function fetchApodData() {
    const apiKey = 'DEMO_KEY'; // NASA provides a free demo key
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            displayApodData(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            displayError('Failed to fetch APOD data.');
        });
}

// Function to display the fetched APOD data in the UI
function displayApodData(data) {
    const container = document.getElementById('data-container');
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <img src="${data.url}" class="card-img-top" alt="APOD Image">
        <div class="card-body">
            <h5 class="card-title">${data.title}</h5>
            <p class="card-text">${data.explanation}</p>
            <p class="card-text"><small class="text-muted">Date: ${data.date}</small></p>
        </div>
    `;
    container.appendChild(card);
}

// Function to display error messages
function displayError(message) {
    const container = document.getElementById('data-container');
    const errorDiv = document.createElement('div');
    errorDiv.classList.add('alert', 'alert-danger', 'text-center');
    errorDiv.textContent = message;
    container.appendChild(errorDiv);
}

// Fetch and display the APOD data when the page loads
document.addEventListener('DOMContentLoaded', fetchApodData);
