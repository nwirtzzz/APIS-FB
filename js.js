const teamIds = [33, 34, 35, 36, 37];


for (let i = 0; i < teamIds.length; i++) {
  const teamId = teamIds[i];
  fetch(`https://v3.football.api-sports.io/teams?id=${teamId}`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "v3.football.api-sports.io",
      "x-rapidapi-key": "026ee852cd568beb7c2a195d49356a02"
    }
  })
  .then(response => response.json())
  .then(data => {
    const teamName = data.response[0].team.name;
    const teamLogoUrl = data.response[0].team.logo;
    const teamLogo = document.createElement('img');
    teamLogo.src = teamLogoUrl;
    const teamContainer = document.createElement('div');
    teamContainer.classList.add('team-container');
    const teamNameElement = document.createElement('h2');
    teamNameElement.textContent = teamName;
    teamContainer.appendChild(teamNameElement);
    teamContainer.appendChild(teamLogo);
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