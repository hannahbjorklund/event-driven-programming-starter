function onReady() {
  console.log('Yay!, onReady() got called when the page loaded.');
  //We can select things!
  //document is the HTML file...
  //query selector will match 1 thing, the first thing
  let header = document.querySelector('h1');
  //document.querySelector('.class');
  //document.getElementById('container');
  console.log(header);
  //manipulating
  header.classList.add('pink-text');
  //header.classList.remove('pink-text');
  //header.classList.toggle('pink-text');
  header.textContent = 'PRESS THE BUTTONS';
}

function onPotatoClick(){
  console.log("You clicked potato");
  let potatoFarm = document.getElementById("potatoFarm");
  potatoFarm.innerHTML += '<p onclick="deletePotato(event)">🥔</p>'
  let snd = new Audio("Hard thud sound effect.mp3");
  snd.play();
}

function deletePotato(event){
  console.log("You wish to delete a potato!", event.target);
  //event.target is where the click happened!
  event.target.remove();
  let snd = new Audio("Eating - Minecraft Sound Effect (HD).mp3");
  snd.play();
}

function onUnicornClick(){
  console.log("You clicked unicorn");
  let unicorns = document.getElementById("potatoFarm");
  unicorns.innerHTML += '<p onclick="deleteUnicorn(event)">🦄</p>'
  let snd = new Audio("Horse sound - Neigh.mp3");
  snd.play();
}

function deleteUnicorn(event){
  console.log("You wish to kill a unicorn :(", event.target);
  event.target.remove();
  let snd = new Audio("Horse Death (Minecraft Sound) - Sound effect for editing.mp3");
  snd.play();
}
// Will call onReady() when the page loads.
onReady()