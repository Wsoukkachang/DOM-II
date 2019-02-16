// Your code goes here

// #1 using mouseover, hover over nav to change color to orange and split
const navArea = document.querySelectorAll('.nav a'); // selecting nav area

navArea.forEach(content => {
    content.addEventListener('mouseover', function(event){
        console.log('You hovered over the nav');
        event.target.style.color = "orange";
        TweenMax.to(navArea[0], 2, {x:-400, ease:Bounce.easeOut});// splits nav -- moves to left
        TweenMax.to(navArea[1], 2, {x:-400, ease:Bounce.easeOut});
        TweenMax.to(navArea[2], 2, {x:-100, ease:Bounce.easeOut});
        TweenMax.to(navArea[3], 2, {x:-100, ease:Bounce.easeOut});
        TweenLite.to(content, 2, {rotationX:45, scaleX:0.8, z:-300});
        event.preventDefault(); //stops nav from going to new page
    })
});

// #2 using drag, drag anything over paragraphs to console log action
const dragOverP = document.querySelectorAll('p'); // selecting all p's

dragOverP.forEach( p => {
    p.addEventListener('dragleave', function(){
        console.log(`The object you are dragging is over a paragraph`);
        event.stopPropagation(); // stops any other events
    })
});

// #3 using click, click on buttons to console log action and change button green
let buttons= document.querySelectorAll('.content-pick .btn'); //selecting buttons

buttons.forEach(content => {
    content.addEventListener('click', function(event){
        console.log('You clicked a button');
        event.target.style.background = "green";
        event.stopPropagation(); // stops any other events
    })
})

// #4 using dblclick, double cick an image to make the width to 50%
let images = document.querySelectorAll('.container img'); //selecting images

images.forEach(content => {
    content.addEventListener('dblclick', function(event){
        console.log('You double clicked a image');
        
        event.target.style.width = "50%";
    })
})

// #5 using keydown, console log key pressed in form area
let formArea = document.querySelector('.form-container'); // selecting form area

formArea.addEventListener('keydown', function(event){
  console.log(`This is a keydown: ${event.code}`);
})

// #6 using click, when submit button is clicked, height and width of buttom changes to 200px
let submitBtn = document.querySelector('.form-container .row-btn'); //selecting submit button

submitBtn.addEventListener('click', function(event){
    event.preventDefault(); //stops button from refreshing
    console.log('You pressed the submit button');
    event.target.style.height = "200px";
    event.target.style.width = "200px";
});

// #7 using dblclick, when h2s are double clicked, console log then starts back and forth animation
let h2s = document.querySelectorAll('.container h2'); //selecting h2s

h2s.forEach(content => {
    content.addEventListener('dblclick', function(event){
        console.log('You double clicked on a h2');
        event.target.style.animationDuration = "3s";
        event.target.style.animationName = "slidein"; //makes sliding animation
        event.target.style.animationIterationCount = "infinite";
        event.target.style.animationDirection = "alternate";
    })
})

// #8 using dblclick, when h1 is double clicked, console log then starts animations
let h1main = document.querySelector('.main-navigation h1'); //selecting h1

h1main.addEventListener('dblclick', function(event){
    console.log('You double clicked on a h1');
    TweenMax.to(".logo-heading", 1, {opacity:0.6});
    TweenMax.to(".logo-heading", 3, {x:300});
    TweenMax.to(".logo-heading", 3, {rotation:1440, scale:1.4});
    TweenMax.to("html", 0.5, {"--myColor":"green", yoyo:true, repeat:-1}); //changes color from black to green-- repeats
    TweenLite.to(h1main, 2, {rotationX:45, scaleX:0.8, z:-300}); //makes it look 3D
})

// #9 using mouseover, hover over footer "copyright text" to change text and start animation
let copyrightText = document.querySelector('footer p'); //selecting footer p

console.log(copyrightText);

copyrightText.addEventListener('mouseover', function(event){
    console.log('You hovered over a footer');
    copyrightText.textContent = 'THIS SITE IS SO FUNNNNNN!!!'; //changes text
    TweenMax.to("footer", 3, {rotation:720, scale:1.0}); //spins footer
})

// #10 using mouseover, double clicked over a destination content and start animation
let destinations = document.querySelectorAll('.destination'); //selecting destination content

destinations.forEach( element => {
    element.addEventListener('dblclick', function(){
        console.log(`You double clicked over a destination content`);
        TweenMax.to(destinations[0], 3, {x:590, opacity:0.5}); // moves around content 
        TweenMax.to(destinations[1], 3, {x:-250, opacity:0.5}); // moves around content 
        TweenMax.to(destinations[2], 3, {x:-250, rotation:360, scale:1.1}); //moves around content and makes center one larger
    })
});