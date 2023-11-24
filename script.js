function addPoint(player) {
  const scoreElement = document.getElementById(`score${player}`);
  var score = parseInt(scoreElement.innerHTML);
  const goal = parseInt(document.getElementById('goal').value);

  score = score + 1;
  scoreElement.innerHTML=score;

  if(score===goal){
    document.getElementById('winner-message').innerHTML = `Player ${player} wins!`;
    party.confetti(scoreElement);
    party.confetti(scoreElement); 
    party.confetti(scoreElement); 
    party.confetti(scoreElement);

  }

}