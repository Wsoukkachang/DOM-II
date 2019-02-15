// Your code goes here

// #1 using mouseover, hover over nav to change color to orange
const navArea = document.querySelectorAll('.nav'); // selecting nav area

navArea.forEach(content => {
    content.addEventListener('mouseover', function(event){
        console.log('You hovered over the nav');
        event.target.style.color = "orange";
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

// #3 using click, click on buttons to console log action
let buttons= document.querySelectorAll('.content-pick .btn'); //selecting buttons

buttons.forEach(content => {
    content.addEventListener('click', function(event){
        console.log('You clicked a button');
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

console.log(submitBtn);

submitBtn.addEventListener('click', function(event){
    event.preventDefault(); //stops button from refreshing
    console.log('You pressed the submit button!');
    event.target.style.height = "200px";
    event.target.style.width = "200px";
});

