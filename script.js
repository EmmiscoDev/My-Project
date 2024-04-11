
const screen = document.getElementById('screen')
function clearScreen(){
  screen.value = "";
}
function backSpace(){
  var x = screen.value
  screen.value = x.substring (0, x.length-1)
}
function insert(a) { 
  screen.value = screen.value + a;
}
function equalTo(){
  var x = screen.value;
  screen.value = eval(x)
}

