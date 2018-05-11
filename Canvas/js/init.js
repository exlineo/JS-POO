var canvas = new Canvas(1000, 700);
var fruit = new Fruit("images/orange.jpg", canvas);

document.addEventListener('keydown', function(e){
    fruit.deplacement(e);
    console.log(fruit.x);
});

console.log("Affiche moi le canvas dans le fruit", fruit.canvas);