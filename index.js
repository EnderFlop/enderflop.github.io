window.addEventListener("DOMContentLoaded", () => {
  const image = document.getElementById("league-image")
  function loadLeagueMatchLight() {
    fetch("https://uryoxbdq7g.execute-api.us-east-2.amazonaws.com/", {method:'GET', headers:{'Content-Type': 'application/json'}})
    .then(res => res.json())
    .then(data => {
      console.log("win last game:" + data);   
      image.src = result ? "./media/won.png" : "./media/lost.png"
    })
    .catch(error => {
      console.log(error)
      image.src = "./media/poro.png"
    })
  }

  loadLeagueMatchLight()
})