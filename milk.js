const miniSection = document.getElementsByClassName('container');

for (i = 0; i < miniSection.length; i++) {
    miniSection[i].addEventListener('click', function() {
        this.classList.toggle('active');
            console.log("good");
    })
}

const navContent = document.getElementsByClassName('nav_item');

for (i = 0; i < navContent.length; i++) {
     navContent[i].addEventListener('click', function () {
            this.classList.toggle('show');
        });
}

for (i = 0; i < navContent.length; i++) {
   navContent[i].addEventListener('mouseenter', function() {
       this.classList.toggle('show');
   })
}

for (i = 0; i < navContent.length; i++) {
       navContent[i].addEventListener('mouseleave', function(){
            this.classList.remove('show');
         });
}

const harmburger = document.getElementById('nav-toggle')
const navbar = document.querySelector('.navbar')
const toggleWord = document.querySelector('.toggle-word')
const header = document.querySelector('.header')
toggleWord.innerText = 'Menu'

    harmburger.addEventListener('click', () => {
        harmburger.classList.toggle('visible');
        navbar.classList.toggle('visible');    
        header.classList.toggle('visible') ;
})

const menuBar = document.querySelector('.fa-bars')
const Closebtn = document.querySelector('.fa-times')

menuBar.addEventListener('click', () => {
    toggleWord.innerText = 'Close'
})

Closebtn.addEventListener('click', () => {
    toggleWord.innerText = 'Menu'
});

const searchIcon = document.getElementById('search-icon')
const searchTab = document.querySelector('.search_tab');
searchIcon.addEventListener('click', () => {
    searchTab.classList.toggle('show-search');
    
});


//contacts panel js
const contacts = document.querySelector('.contacts');
const closeSocialTab = document.querySelector('.close-btn');
const social = document.querySelector('.social-panel');

contacts.addEventListener('click', () => {
    social.classList.toggle('slide')
});
closeSocialTab.addEventListener('click', () => {
    social.classList.remove('slide')
});


// Js for read for me mode
const textRead = document.querySelector('.read');
const textStop = document.querySelector('.pause');
const textResume = document.querySelector('.resume');
const text = document.body.innerHTML


function read(){
    textRead.classList.add('display')
    textStop.classList.add('display')
    textResume.classList.add('display')
   const reader = new SpeechSynthesisUtterance(text);
   reader.pitch = 2;
  
   window.speechSynthesis.speak(reader);
}

function stop(){
    window.speechSynthesis.pause();
}
function resume(){
    window.speechSynthesis.resume();
}

speechSynthesis.cancel();


