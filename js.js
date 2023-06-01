const teamIds = [33, 34, 35, 36, 37];

for (let i = 0; i < teamIds.length; i++) {
  const teamId = teamIds[i];
  fetch(`https://v3.football.api-sports.io/teams?id=${teamId}`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "v3.football.api-sports.io",
      "x-rapidapi-key": "7bdb194d2d9db9ed325d16ffdca49fd7"
    }
  })
  .then(response => response.json())
  .then(data => {
    const team = data.response[0].team;

    const teamName = team.name;
    const teamLogoUrl = team.logo;
    const teamLogo = document.createElement('img');
    teamLogo.src = teamLogoUrl;

    const teamContainer = document.createElement('div');
    teamContainer.classList.add('team-container');

    const teamNameElement = document.createElement('h2');
    teamNameElement.textContent = teamName;

    teamContainer.appendChild(teamNameElement);
    teamContainer.appendChild(teamLogo);
    
    // Add event listener to each team container
    teamContainer.addEventListener('click', () => {
      // Store the team data in local storage
      localStorage.setItem('selectedTeam', JSON.stringify(team));
      // Redirect to the separate page
      window.location.href = 'team.html';
    });

    document.getElementById('teams').appendChild(teamContainer);
  })
  .catch(err => {
    console.log(err);
  });
}

fetch("https://v3.football.api-sports.io/players?id=276&season=2019", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "v3.football.api-sports.io",
		"x-rapidapi-key": "026ee852cd568beb7c2a195d49356a02"
	}
})
.then(response => response.json())
		.then(data => {
			const player = data.response[0].player;
			document.getElementById('player-photo').src = player.photo;
			document.getElementById('player-name').textContent = `${player.firstname} ${player.lastname}`;
			document.getElementById('player-age').textContent = player.age;
			
		})