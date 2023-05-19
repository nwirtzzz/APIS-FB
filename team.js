// Retrieve the stored team data from local storage
const selectedTeam = JSON.parse(localStorage.getItem('selectedTeam'));

if (selectedTeam) {
  console.log(selectedTeam); // Debugging statement

  const teamDetailsContainer = document.getElementById('team-details');

  // Create elements to display team details
  const teamLogo = document.createElement('img');
  teamLogo.src = selectedTeam.logo;

  const teamNameElement = document.createElement('h2');
  teamNameElement.textContent = selectedTeam.name;

  const teamCountryElement = document.createElement('p');
  teamCountryElement.textContent = `Country: ${selectedTeam.country}`;

  const teamFoundedElement = document.createElement('p');
  teamFoundedElement.textContent = `Founded: ${selectedTeam.founded}`;

  const teamCityElement = document.createElement('p');
  teamCityElement.textContent = `City: ${selectedTeam.venue.city}`;

  const teamImage = document.createElement('img');
  teamImage.src = selectedTeam.venue.image;

  // Append elements to the team details container
  teamDetailsContainer.appendChild(teamLogo);
  teamDetailsContainer.appendChild(teamNameElement);
  teamDetailsContainer.appendChild(teamCountryElement);
  teamDetailsContainer.appendChild(teamFoundedElement);
  teamDetailsContainer.appendChild(teamCityElement);
  teamDetailsContainer.appendChild(teamImage);
} else {
  console.log('No team data found'); // Debugging statement

  // If no team data is found or there is an error, redirect to the homepage
  window.location.href = 'index.html';
}

// Remove the stored team data from local storage
localStorage.removeItem('selectedTeam');