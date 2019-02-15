// Your code goes here

// #1 using mouseover, hover over nav to change color to orange
const navArea = document.querySelectorAll('.nav');

navArea.forEach(content => {
  content.addEventListener('mouseover', function(event){
  console.log('mouseover');
  event.target.style.color = "orange"; })
});

// #2 using drag, drag anything over paragraphs to console log action
const dragOverP = document.querySelectorAll('p');

dragOverP.forEach( p => {
    p.addEventListener('dragleave', function(){
        console.log(`This object you are dragging is over a paragraph`);
        event.stopPropagation();
    })
});

// #3 using click, click on buttons to console log action
let buttons= document.querySelectorAll('.content-pick .btn');

buttons.forEach(content => {
    content.addEventListener('click', function(event){
        console.log('Clicked Button');
        event.stopPropagation();
    })
})