// Retrieve the player details from sessionStorage
const playerDetails = JSON.parse(sessionStorage.getItem('playerDetails'));

// Display the player details on the page
document.getElementById('player-name').textContent = playerDetails.firstName + ' ' + playerDetails.lastName;
document.getElementById('player-age').textContent = playerDetails.age;
document.getElementById('player-height').textContent = playerDetails.height;
document.getElementById('player-nationality').textContent = playerDetails.nationality;
document.getElementById('player-weight').textContent = playerDetails.weight;
document.getElementById('player-photo').src = playerDetails.photo;
document.getElementById('team-logo').src = playerDetails.logo;
