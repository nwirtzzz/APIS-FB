// Retrieve the stored team data from local storage
const selectedTeam = JSON.parse(localStorage.getItem('selectedTeam'));

if (selectedTeam) {
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
  teamCityElement.textContent = `City: ${selectedTeam.city}`;

  const teamImage = document.createElement('img');
  teamImage.src = selectedTeam.image;

  // Append elements to the team details container
  teamDetailsContainer.appendChild(teamLogo);
  teamDetailsContainer.appendChild(teamNameElement);
  teamDetailsContainer.appendChild(teamCountryElement);
  teamDetailsContainer.appendChild(teamFoundedElement);
  teamDetailsContainer.appendChild(teamCityElement);
  teamDetailsContainer.appendChild(teamImage);

  // Remove the stored team data from local storage
  localStorage.removeItem('selectedTeam');
} else {
  // If no team data is found, redirect to the homepage
  window.location.href = 'index.html';
}