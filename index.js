window.addEventListener("DOMContentLoaded", () => {
  
  function loadLeagueMatchLight() {
    let result = true;

    fetch("https://uryoxbdq7g.execute-api.us-east-2.amazonaws.com/", {method:'GET', headers:{'Content-Type': 'application/json'}})
    .then(res => res.json())
    .then(data => {console.log(data); result = data})

    const image = document.getElementById("league-image")
    image.src = result ? "./media/won.png" : "./media/lost.png"
  }

  loadLeagueMatchLight()
})