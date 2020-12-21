//Movement animation to happen
const card = document.querySelector('.card');
const container = document.querySelector('.container');
//Items
const title = document.querySelector('.title');
const sneakers = document.querySelector('.sneakers img');
const purchase = document.querySelector('.purchase');
const description = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');


// Moving animation event
container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;6
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate In 
container.addEventListener('mouseenter', (e) => {
    card.style.transition = 'none';
    sneakers.style.transform = 'translateZ(200px) rotateZ(-45deg)';
    purchase.style.transform = 'translateZ(75px)';
    description.style.transform = 'translateZ(125px)';
    sizes.style.transform = 'translateZ(100px)';
    title.style.transform = 'translateZ(150px)';
})
// Animate Out
container.addEventListener('mouseleave', (e) => {
    card.style.transition = 'all 0.5s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`
    sneakers.style.transform = 'translateZ(0px) rotateZ(0deg)';
    purchase.style.transform = 'translateZ(0px)';
    description.style.transform = 'translateZ(0px)';
    sizes.style.transform = 'translateZ(0px)';
    title.style.transform = 'translateZ(0px)';
})



var myArray = ['a', 'b', 'c', 'd'];

myArray =["start",...myArray, "end"];

console.log(myArray)