const teamIds = [33, 34, 35, 36];

for (let i = 0; i < teamIds.length; i++) {
  const teamId = teamIds[i];
  fetch(`https://v3.football.api-sports.io/teams?id=${teamId}`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "v3.football.api-sports.io",
      "x-rapidapi-key": "94861d9837c67ac2b84dff859ac9c73c"
    }
  })
  .then(response => response.json())
  .then(data => {
    const team = data.response[0].team;
    console.log(data)
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
