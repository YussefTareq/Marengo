let span =document.querySelectorAll(".stats .number");
let section =document.querySelector(".stats");
let started =false;
let start =false;


let spans =document.querySelectorAll(".skill .the-progress span")
let sectionTwo = document.querySelector(".our-skills");
let numbers =document.querySelectorAll(".skill h3 span")


window.onscroll =function(){
    if (window.scrollY >= sectionTwo.offsetTop - 100){
        if(!start){
            numbers.forEach((num)=> startCount(num));
            }
            start=true;
    spans.forEach((span)=>{
        span.style.width=span.dataset.width;
        
    });
}if (window.scrollY >= section.offsetTop -100){
    if(!started){
span.forEach((num)=>startCount(num));
}
started=true;
}

};
let countDownDate =new Date("Dec 31,2022 23:59:59").getTime();
let counter =setInterval(()=>{
    let dateNow =new Date().getTime();
    let dateDiff =countDownDate - dateNow;
    let days =Math.floor(dateDiff /(1000 * 60 *60* 24));
    let hours =Math.floor(dateDiff %(1000 * 60 *60*24)/(1000*60*60));
    let minutes =Math.floor(dateDiff %(1000 * 60 *60)/(1000*60));
    let seconds =Math.floor(dateDiff %(1000 * 60)/(1000));

    document.querySelector(".seconds").innerHTML=seconds<10?`0${seconds}`:seconds;
    document.querySelector(".minutes").innerHTML=minutes<10?`0${minutes}`:minutes;
    document.querySelector(".hours").innerHTML=hours<10?`0${hours}`:hours;
    document.querySelector(".days").innerHTML=days<10?`0${days}`:days;
    if(dateDiff<0){
        clearInterval(counter)
    }
},1000)





function startCount(ele){
    let goal =ele.dataset.goal;
    let count = setInterval(()=>{
        ele.textContent++;
        if (ele.textContent==goal){
            clearInterval(count);
        
    }
    },2000/goal)
}

