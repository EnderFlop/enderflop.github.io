window.addEventListener("DOMContentLoaded", () => {
  
  function loadLeagueMatchLight() {
    fetch("https://uryoxbdq7g.execute-api.us-east-2.amazonaws.com/", {method:'GET', headers:{'Content-Type': 'application/json'}})
    .then(res => res.json())
    .then(data => console.log(data))
  }

  loadLeagueMatchLight()

})