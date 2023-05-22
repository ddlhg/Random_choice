//RESTAURANT Container:
let btnRestaurant = document.getElementById('btnRestaurant');
let outputRestaurant = document.getElementById('outputRestaurant');
let restaurant = [
    'Texas Roadhouse',
    'Chick-fill A',
    'Cheddars Scratch Kitchen',
    'Cracker Barrel',
    'Panda Express',
    'Wendys',
    'The Cheesecake Factory',
    'Olive Garden',
];

btnRestaurant.addEventListener('click', function(){
    var randomRestaurant = restaurant[Math.floor(Math.random() * restaurant.length)]
    outputRestaurant.innerHTML = randomRestaurant;
})

//PLACE Container:
let btnPlace = document.getElementById('btnPlace');
let outputPlace = document.getElementById('outputPlace');
let place = [
    'Park',
    'Beach',
    'Bar',
    'Museum',
    'Arcade',
    'Pool',
    'Club',
];

btnPlace.addEventListener('click', function(){
    var randomPlace = place[Math.floor(Math.random() * place.length)]
    outputPlace.innerHTML = randomPlace;
})

//FOOD Container:
let btnFood = document.getElementById('btnFood');
let outputFood = document.getElementById('outputFood');
let food = [
    'Colombian',
    'Mexican',
    'Italian',
    'Korean',
    'Chinese',
];

btnFood.addEventListener('click', function(){
    var randomFood = food[Math.floor(Math.random() * food.length)]
    outputFood.innerHTML = randomFood;
})

//COLOR Container:
let btnColor = document.getElementById('btnColor');
let outputColor = document.getElementById('outputColor');
let color = [
    'Blue !',
    'Purple !',
    'Pink !',
    'Red !',
    'Black !',
    'Yellow !',
    'Orange !',
];

btnColor.addEventListener('click', function(){
    var randomColor = color[Math.floor(Math.random() * color.length)]
    outputColor.innerHTML = randomColor;
})

//Name Container:
let btnName = document.getElementById('btnName');
let outputName = document.getElementById('outputName');
let name = [
    'Daniela !',
    'Nicole !',
    'Juan !',
    'Camilo !',
    'Laura !',
    'Maria !',
    'Lily !',
];

btnName.addEventListener('click', function(){
    var randomName = name[Math.floor(Math.random() * name.length)]
    outputName.innerHTML = randomName;
})

//NUMBER Container:
const btnNumber = document.getElementById('btnNumber');
const outputNumber = document.getElementById('outputNumber');

const randomNumberGenerator = ()=>{
    const randomNumber = Math.floor(Math.random() * 10 +1);
    outputNumber.textContent = randomNumber;
};

btnNumber.addEventListener('click', randomNumberGenerator);
randomNumber();
