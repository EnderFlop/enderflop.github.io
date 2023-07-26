window.addEventListener("DOMContentLoaded", () => {
  let ZINDEX = 300;

  function loadLeagueMatchWidget() {
    const image = document.getElementById("league-image")
    fetch("https://xinhm4ccu5.execute-api.us-east-2.amazonaws.com/league-widget", {method:'GET', headers:{'Content-Type': 'application/json'}})
    .then(res => res.json())
    .then(data => {
      console.log("league widget loaded")
      image.src = data ? "./media/won.png" : "./media/lost.png"
    })
    .catch(error => {
      console.log(error)
      image.src = "./media/poro.png"
    })
  }

  function setupWindows() {
    const windows = Array.from(document.getElementsByClassName("window"))
    windows.forEach((windw) => {
      makeDraggable(windw)
      makeMinMax(windw)
      makeGoToTop(windw)
    })
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

  function makeMinMax(windw) {
    //SETUP BUTTONS
    const titleBar = windw.getElementsByClassName("title-bar")[0]

    const titleBarControls = document.createElement("div")
    titleBarControls.classList.add("title-bar-controls")

    const minButton = document.createElement("button")
    minButton.ariaLabel = "Minimize"
    titleBarControls.appendChild(minButton)

    const maxButton = document.createElement("button")
    maxButton.ariaLabel = "Maximize"
    titleBarControls.appendChild(maxButton)

    titleBar.appendChild(titleBarControls)

    const windowBody = windw.getElementsByClassName("window-body")[0]

    minButton.onclick = () => {
      windowBody.style.display = "none"
    }

    maxButton.onclick = () => {
      windowBody.style.display = "block"
    }
  }

  function makeGoToTop(windw) {
    windw.onmousedown = moveWindowToTop;

    function moveWindowToTop(event) {
      event.preventDefault();
      windw.style["z-index"] = ZINDEX;
      ZINDEX += 1;
    }
  }

  function main () {
    setupWindows()
    loadLeagueMatchWidget()
  }

  main()

  //nice background?
    //parallax?
    //calm pixel art, rain?
    //just look at dimdevs stuff lol
  //music player?
    //ask brawlersworld?
  //add closing windows, taskbar where you can reopen windows
})