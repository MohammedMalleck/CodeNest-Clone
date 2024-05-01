const bodyEl = document.querySelector('body');
const toggleElement = document.querySelector('.toggle');
const hamburgerIcon = document.getElementById('hamburger-icon');
const siderBarEl = document.querySelector('.nav-link-responsive');
const xMarkEl = document.getElementById('x-mark');
const textEl = document.querySelector('.js-auto-text');
const texts = ['Web Developers' , 'Jobs' , 'Courses'];
const typeBarEl = document.querySelector('.js-type-bar');
const homeLinkEl = document.querySelector('.home-link');

toggleElement.addEventListener('click' , ()=>{
  bodyEl.classList.toggle('active')
})

hamburgerIcon.addEventListener('click' , ()=>{
  siderBarEl.classList.toggle('show-sidebar');
})
xMarkEl.addEventListener('click' , ()=>{
  siderBarEl.classList.remove('show-sidebar');
})

document.querySelectorAll('.read-more')
  .forEach((readMoreEl)=>{
    readMoreEl.addEventListener('click' , ()=>{
      const careerInfoEl = readMoreEl.parentElement;
      careerInfoEl.classList.add('show-more');
  });
});

const homePage = homeLinkEl.classList.contains('active') ? true : false;

if(homePage){

//Generate Dynamic Text
let textIndex = 0;

animateText(texts,textEl,textIndex);

function animateText(texts,element,textIndex){
  let index = 0;
  if(textIndex > 2){
    textIndex = 0;
  }
  const text = texts[textIndex];
  let interval =  setInterval(()=>{
    if(index < text.length){
      element.innerHTML += text.charAt(index);
      index ++;
    }else if (index === text.length){
      clearInterval(interval);
      setTimeout(()=>{
        element.innerHTML = '';
        textIndex ++;
        animateText(texts,element,textIndex);
      },1000) 
    }
  },150)
}
}
