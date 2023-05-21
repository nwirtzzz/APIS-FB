// KEY 026ee852cd568beb7c2a195d49356a02 // 9dd0e7569da3d86a764f524963c18e67 // 25a627c54b3da162c2377c2add3f8678 // fa4cc47689f0dcd9325410c6cdbd6d0d


const teamIds = [33, 34, 35, 36, 37];

for (let i = 0; i < teamIds.length; i++) {
  const teamId = teamIds[i];
  fetch(`https://v3.football.api-sports.io/teams?id=${teamId}`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "v3.football.api-sports.io",
      "x-rapidapi-key": "9dd0e7569da3d86a764f524963c18e67"
    }
  })
  .then(response => response.json())
  .then(data => {
    const team = data.response[0].team;
    console.log(data);
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
    teamContainer.addEventListener('click', () => {
     
      localStorage.setItem('selectedTeam', JSON.stringify(team));
      
      window.location.href = 'team.html';
    });

    document.getElementById('teams').appendChild(teamContainer);
  })
  .catch(err => {
    console.log(err);
  });
}





const playerIds = [278, 279, 280, 281, 282]; // Array of player IDs

const fetchPlayerData = (id) => {
  return fetch(`https://v3.football.api-sports.io/players?id=${id}&season=2019`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "v3.football.api-sports.io",
      "x-rapidapi-key": "9dd0e7569da3d86a764f524963c18e67"
    }
  })
    .then(response => response.json())
    .then(data => {
      return data.response[0].player;
    });
};

const fetchPlayers = async () => {
  const players = await Promise.all(playerIds.map(id => fetchPlayerData(id)));
  console.log(players);

  // Render player data on the page
  players.forEach(player => {
    const playerDiv = document.createElement('div');
    playerDiv.innerHTML = `
      <img src="${player.photo}" alt="Player Photo">
      <h2>${player.firstname} ${player.lastname}</h2>
      <p>Age: ${player.age}</p>
    `;
    document.getElementById('players-container').appendChild(playerDiv);
  });
};

fetchPlayers();



    fetch("https://v3.football.api-sports.io/fixtures/headtohead?h2h=33-34", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "9dd0e7569da3d86a764f524963c18e67"
      }
    })
    .then(response => response.json())
  .then(data => {
    const team = data.response[0].team;

    console.log(data);
  })
    .catch(err => {
      console.log(err);
    });    