let screenelem = document.querySelector(".screen");
let screen = document.querySelector(".screen").innerText;
let minusbtn = document.querySelector(".decrease");
let resetbtn = document.querySelector(".reset");
let plusbtn = document.querySelector(".increase");
screen = Number.parseInt(screen);
//   console.log(screen);
function colorcheck() {
  if (screen >= 1) {
    screenelem.style.color = "green";
    console.log("plus");
  }
  else if( screen < 0){
    screenelem.style.color = "red";
    console.log("minus");

  }
  else{
    console.log("reset");
    screenelem.style.color = "#090956";
  }
}
function plusfun() {
    screen = screen + 1;
    screenelem.innerText = screen;
    colorcheck();
}

function minusfun() {
    screen = screen - 1;
    screenelem.innerText = screen;
    colorcheck();
}
function resetfun() {
    screen = 0;
    screenelem.innerText = screen;
    colorcheck();
}
colorcheck();


plusbtn.addEventListener("click", plusfun);
minusbtn.addEventListener("click", minusfun);
resetbtn.addEventListener("click", resetfun);