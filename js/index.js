// Your code goes here

// #1 using mouseover, hover over nav to change color to orange
const navArea = document.querySelectorAll('.nav'); // selecting nav area

navArea.forEach(content => {
  content.addEventListener('mouseover', function(event){
  console.log('You hovered over the nav');
  event.target.style.color = "orange"; })
});

// #2 using drag, drag anything over paragraphs to console log action
const dragOverP = document.querySelectorAll('p'); // selecting all p's

dragOverP.forEach( p => {
    p.addEventListener('dragleave', function(){
        console.log(`The object you are dragging is over a paragraph`);
        event.stopPropagation();
    })
});

// #3 using click, click on buttons to console log action
let buttons= document.querySelectorAll('.content-pick .btn'); //selecting buttons

buttons.forEach(content => {
    content.addEventListener('click', function(event){
        console.log('You clicked a button');
        event.stopPropagation();
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