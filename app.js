// movement animation to happen
const card= document.querySelector(".card");
const container=document.querySelector(".container");
const title=document.querySelector(".title");
const sneaker=document.querySelector(".sneaker");
const purchase=document.querySelector(".purchase button");
const description=document.querySelector(".info h3");
const sizes=document.querySelector(".sizes");

// movement event listner
container.addEventListener('mousemove',(e)=>{

    let xAxis=(window.innerWidth/2- e.pageX)/10;
    
    let yAxis= (window.innerHeight/2-e.pageY)/10;

     card.style.transform=`rotateX(${yAxis}deg) rotateY(${xAxis}deg)`
});


// animate in
container.addEventListener('mouseenter',(e)=>{
    card.style.transition="none";
    title.style.transform= `translateZ(150deg)`;
})

// animation out
container.addEventListener('mouseleave',(e)=>{
    console.log("hello");
    card.style.transition="all 0.5s ease";
    card.style.transform=`rotateX(0deg) rotateY(0deg)`;
    title.style.transform= `translateZ(0deg)`;
})
