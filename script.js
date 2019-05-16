var children;
var currentCircle;
var interval;
var score = 0;

function startGame() {
  var circleContainer = document.getElementById('circle-container');
  children = circleContainer.children;

  //lightCircle();
  interval = setInterval(lightCircle, 1000)

  /* for(var i = 0; i < children.length; i++) {
     children[i].classList.add('active');
     console.log(children[i]);
   }*/
}

function getRandomIndex() {
  var randomItem = Math.floor(Math.random() * children.length);
  return randomItem;
}

function lightCircle() {
  console.log("lightCircle")
  if (currentCircle != null) {
    currentCircle.classList.remove('active');
  }
  var randomIndex = getRandomIndex();
  console.log(randomIndex);
  var randomCircle = children[randomIndex];
  console.log(randomCircle);
  randomCircle.classList.add('active');
  currentCircle = randomCircle;
}

function stopGame() {
  clearInterval(interval);
  document.getElementById("gameResult").style.visibility = "visible";
  document.getElementById('finalScore').innerHTML = "Your final score was " + score;

}

function updateScore(obj) {
  if (obj.classList.contains("active")) {
    score += 1;
    document.getElementById('scoreCard').innerHTML = "Your Score " + score;
  } else {
    stopGame();

  }
}
