<<<<<<< HEAD
var kittens = [
  "Milo",
  "Otis",
  "Garfield"] 

function destructivelyAppendKitten(Ralph){
    kittens.push(Ralph);
  return kittens;
}

function destructivelyPrependKitten(Ralph){
  kittens.unshift(Ralph);
  return kittens;
}

function destructivelyRemoveLastKitten(Garfield){
  kittens.pop(Garfield)
  return kittens;
}

function destructivelyRemoveFirstKitten(Milo){
  kittens.shift();
  return kittens;
}
function appendKitten(Broom){
 const cats = ["Milo", "Otis", "Garfield"];
 const moreCats = ["Broom"];
 const allCats = cats.concat(moreCats);
 return allCats;
}
function prependKitten(Arnold){
 const cats = ["Milo", "Otis", "Garfield"];
 const dude = ["Arnold"]
 const allkittens = dude.concat(cats)
 return allkittens
}
function removeLastKitten(){
  return kittens.slice(0, 2)
}
function removeFirstKitten(){
  return kittens.slice(1)
=======
var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function AppendKitten(ralph){
>>>>>>> 1148c53f63ee288d973cd0805fe86808a17dc3fb
}