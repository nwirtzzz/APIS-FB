fetch("https://v3.football.api-sports.io/players?id=278&season=2019", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "v3.football.api-sports.io",
		"x-rapidapi-key": "94861d9837c67ac2b84dff859ac9c73c"
	}
})
.then(response => response.json())
		.then(data => {
      console.log(data)
			const player = data.response[0].player;
			document.getElementById('player-photo').src = player.photo;
			document.getElementById('player-name').textContent = `${player.firstname} ${player.lastname}`;
			document.getElementById('player-age').textContent = player.age;
			
		})

// Retrieve the player details from the API and navigate to the details page
function fetchPlayerDetails() {
  // Make an API request to fetch the player details
  fetch("https://v3.football.api-sports.io/players?id=278&season=2019", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "v3.football.api-sports.io",
		"x-rapidapi-key": "94861d9837c67ac2b84dff859ac9c73c"
	}})
    .then(response => response.json())
    .then(data => {
      // Extract the required player details from the API response
      console.log(data);

      const player = data.response[0].player;
      const firstName = player.firstname;
      const lastName = player.lastname;
      const age = player.age;
      const height = player.height;
      const nationality = player.nationality;
      const photo = player.photo;
      const weight = player.weight;
      const logo = data.response[0].statistics[0].team.logo;

      // Save the player details in sessionStorage to access them on the details page
      sessionStorage.setItem('playerDetails', JSON.stringify({
        firstName,
        lastName,
        age,
        height,
        nationality,
        photo,
        weight,
        logo
        
      }));

      // Navigate to the details page
      window.location.href = '/detalle-jugadores';
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

// Attach the click event listener to the button
document.getElementById('player-photo').addEventListener('click', fetchPlayerDetails);
