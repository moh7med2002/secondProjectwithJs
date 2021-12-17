// Start Close and open nav in header
let menu=document.querySelector(".menu");
let myIcon=document.querySelector('.menu i');
let nav=document.querySelector(".nav");
let opacity=0;
menu.onclick=function(){
    //Change Icon Class
    myIcon.className= myIcon.className=="fas fa-bars"?"fas fa-times":"fas fa-bars";
    opacity=opacity===1?0:1;
    if(opacity==1){
        nav.style.cssText=`display:flex;`;
    }
    else{
        nav.style.cssText=`display:none;`;
    }

}
// End Close and open nav in header
// Start Search div
let searchIcon=document.getElementById("search");
searchIcon.onclick=function(){
    document.querySelector('.searchProcess').style.cssText="bottom:0px";
};
let closeSearch=document.getElementById('closeSearch');
closeSearch.onclick=function(){
    document.querySelector('.searchProcess').style.cssText="bottom:-200px";
};
// End Search div
// Start login
let logIn=document.querySelector(".formLogin");
let logIcon=document.getElementById("user");
let closeForm=document.getElementById('closeLogIn');
let createAccount=document.getElementById('createAccount');
let signUp=document.querySelector('.forgetAccount');
let closeSignUp=document.getElementById('closeSignUp');
let alreadyhaveAccount=document.getElementById('haveAccount');
logIcon.onclick=function(){
    logIn.style.cssText="display:block";
};
closeForm.onclick=function(){
    logIn.style.cssText="display:none";
};
createAccount.onclick=function(){
    logIn.style.cssText="display:none";
    signUp.style.cssText="display:block";
};
closeSignUp.onclick=function(){
    signUp.style.cssText="display:none";
};
alreadyhaveAccount.onclick=function(){
    signUp.style.cssText="display:none";
    logIn.style.cssText="display:block";
};
// End login
// Start Slider
let sliderNumbers=Array.from(document.querySelectorAll('.container-sliders .box'));
let sliderStart=0;
let sliderContainer=document.querySelector('.container-sliders');
let prev=document.getElementById('prev');
prev.onclick=prevSliders;
let next=document.getElementById('next');
next.onclick=nextSliders;
function nextSliders(){
    prev.classList.remove('disabled');
    if(sliderStart<sliderNumbers.length-1){
        sliderStart++;
        sliderContainer.style.cssText=`transform: translateX(${-sliderStart * 100}%);`
    }
    if(sliderStart===(sliderNumbers.length-1)){
            next.classList.add('disabled');
    }
};
function prevSliders(){
    next.classList.remove('disabled');
    if(sliderStart>=1 ){
        sliderStart--;
        sliderContainer.style.cssText=`transform: translateX(${-sliderStart * 100}%);`
    }

    if(sliderStart===0){
        prev.classList.add('disabled');
    }
};
// End Slider