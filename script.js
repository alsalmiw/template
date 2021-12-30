const toggleSwitch=document.querySelector('input[type="checkbox"]'),
nav=document.getElementById('nav'),
toggleIcon=document.getElementById('toggle-icon'),
image1=document.getElementById('image1'),
image2=document.getElementById('image2'),
image3=document.getElementById('image3'),
textBox=document.getElementById('text-box');

function imageMode(color){
image1.src=`./img/undraw_proud_coder_${color}.svg`;
image2.src=`./img/undraw_feeling_proud_${color}.svg`;
image3.src=`./img/undraw_conceptual_idea_${color}.svg`;
}

// function lightMode(){
// nav.style.backgroundColor='rgb(255 255 255/ 50%)';
// textBox.style.backgroundColor='rgb(0 0 0 /50%)';
// toggleIcon.children[0].textContent='Light Mode';
// toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
// imageMode('light');

// }

// function darkMode(){
// nav.style.backgroundColor='rgb(0 0 0 / 50%)';
// textBox.style.backgroundColor='rgb(255 255 255 /50%)';
// toggleIcon.children[0].textContent='Dark Mode';
// toggleIcon.children[1].classList.replace('fa-sun', "fa-moon");
// imageMode('dark');
// }

function toggleDarkLightMode(isLight){
nav.style.backgroundColor= isLight?'rgb(255 255 255/ 50%)' : 'rgb(0 0 0 / 50%)';
textBox.style.backgroundColor=isLight?'rgb(0 0 0 /50%)': 'rgb(255 255 255 /50%)';
toggleIcon.children[0].textContent= isLight? 'Light Mode' : 'Dark Mode';
isLight? toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun'):toggleIcon.children[1].classList.replace('fa-sun', "fa-moon");
isLight? imageMode('light') : imageMode('dark');
}

function switchTheme(event){
console.log(event.target.checked);
if(event.target.checked){
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark')
    //darkMode();
    toggleDarkLightMode(false);
}
else{
    document.documentElement.setAttribute('data-theme','light');
    localStorage.setItem('theme', 'dark');
    //lightMode();
    toggleDarkLightMode(true);
}
}

toggleSwitch.addEventListener('change', switchTheme);

//check local storage for theme color
const currentTheme = localStorage.getItem('theme');
console.log(currentTheme);
if(currentTheme){
    document.documentElement.setAttribute('data-theme', currentTheme);
    if(currentTheme=== 'dark'){
        toggleSwitch.checked=true;
        //darkMode();
        toggleDarkLightMode(false);
    }
}