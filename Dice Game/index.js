var randomm = Math.floor(Math.random()*6)+1;
console.log(randomm);
document.querySelector(".img1").setAttribute("src","images/dice"+randomm+".png");
var randomms = Math.floor(Math.random()*6)+1;
document.querySelector(".img2").setAttribute("src","images/dice"+randomms+".png");
if(randomm === randomms){
  document.querySelector("h1").innerText="Draw!";
}
else if (randomm > randomms) {
  document.querySelector("h1").innerText="Player 1 Wins";
}
else{
  document.querySelector("h1").innerText="Player 2 Wins";
}
