window.addEventListener("DOMContentLoaded", () => {
  function loadLeagueMatchWidget() {
    const image = document.getElementById("league-image")
    fetch("https://xinhm4ccu5.execute-api.us-east-2.amazonaws.com/league-widget", {method:'GET', headers:{'Content-Type': 'application/json'}})
    .then(res => res.json())
    .then(data => {
      console.log("win last game: " + data);   
      image.src = data ? "./media/won.png" : "./media/lost.png"
    })
    .catch(error => {
      console.log(error)
      image.src = "./media/poro.png"
    })
  }

  function makeWindowsDraggable() {
    const windows = Array.from(document.getElementsByClassName("window"))
    console.log(windows)
    windows.forEach((windw) => makeDraggable(windw))
  }

  function makeDraggable(windw) {
    //https://www.w3schools.com/howto/howto_js_draggable.asp >>> saved me hours of work :DD
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    const titleBar = windw.getElementsByClassName("title-bar")[0]
    titleBar.onmousedown = dragMouseDown;

    function dragMouseDown(event) {
      event.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = event.clientX;
      pos4 = event.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }

    function elementDrag(event) {
      event.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - event.clientX;
      pos2 = pos4 - event.clientY;
      pos3 = event.clientX;
      pos4 = event.clientY;
      // set the element's new position:
      windw.style.top = (windw.offsetTop - pos2) + "px";
      windw.style.left = (windw.offsetLeft - pos1) + "px";
    }
  
    function closeDragElement() {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }

  function main () {
    makeWindowsDraggable()
    loadLeagueMatchWidget()
  }

  main()

  //add minimize/maximize button
  //add closing windows
  //add taskbar where you can reopen windows
})