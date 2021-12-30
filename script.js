const menuBars =document.getElementById('menu-bars'),
overlay=document.getElementById('overlay'),
nav1= document.getElementById('nav-1'),
nav2= document.getElementById('nav-2'),
nav3= document.getElementById('nav-3'),
nav4= document.getElementById('nav-4'),
nav5= document.getElementById('nav-5');
const navItems=[nav1,nav2,nav3,nav4,nav5];

function toggleNav(){
    menuBars.classList.toggle('change');
    // show or not navigation
    overlay.classList.toggle('overlay-active');
    if(overlay.classList.contains('overlay-active')){
        overlay.classList.replace('overlay-slide-left','overlay-slide-right');
        // nav1.className='slide-in-1';
        // nav2.className='slide-in-2';
        // nav3.className='slide-in-3';
        // nav4.className='slide-in-4';
        // nav5.className='slide-in-5';
        navAnimation('in');
    }else{
        overlay.classList.replace('overlay-slide-right','overlay-slide-left');
        // nav1.className='slide-out-1';
        // nav2.className='slide-out-2';
        // nav3.className='slide-out-3';
        // nav4.className='slide-out-4';
        // nav5.className='slide-out-5';
        navAnimation('out');

    }
}

function navAnimation(direction){

    navItems.forEach((nav, i) =>{
        nav.className=`slide-${direction}-${i+1}`;
        console.log(nav.classList);
    });
}

menuBars.addEventListener('click', toggleNav);
// nav1.addEventListener('click', toggleNav);
// nav2.addEventListener('click', toggleNav);
// nav3.addEventListener('click', toggleNav);
// nav4.addEventListener('click', toggleNav);
// nav5.addEventListener('click', toggleNav);
navItems.forEach((nav)=>{
    nav.addEventListener('click',toggleNav);
})
