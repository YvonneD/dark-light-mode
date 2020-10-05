const toggleSwitch=document.querySelector('input[type="checkbox"]');
const nav=document.getElementById('nav');
const image1=document.getElementById('img1')
const image2=document.getElementById('img2')
const image3=document.getElementById('img3')

function toggleDarkLightMode(isLight){
    nav.style.backgroundColor=isLight?'rgb(255 255 255/30%)':'rgb(0 0 0/50%)';
    isLight?imageMode('light'):imageMode('dark')
}


//darkMode
// function darkMode(){
//     nav.style.backgroundColor='rgb(0 0 0/50%)';
//     imageMode('dark')

// }

//image mode
function imageMode(color){
    image1.src=`img/eating1-${color}.svg`;
    image2.src=`img/eating2-${color}.svg`;
    image3.src=`img/eating3-${color}.svg`;
}

//lightMode
// function lightMode(){
//     nav.style.backgroundColor='rgb(255 255 255/30%)';
//     imageMode('light')
// }

//switch theme
function switchTheme(event){
if(event.target.checked){
    document.documentElement.setAttribute('data-theme','dark')
    localStorage.setItem('theme','dark')
    toggleDarkLightMode(false)
}else{
    document.documentElement.setAttribute('data-theme','light')
    localStorage.setItem('theme','light')
    toggleDarkLightMode(true)
}
}
//event linstener
toggleSwitch.addEventListener('change',switchTheme)

//check local storage
const currentTheme=localStorage.getItem('theme');
if(currentTheme){
    document.documentElement.setAttribute('data-theme',currentTheme);
    if(currentTheme==='dark'){
        toggleSwitch.checked=true;
        toggleDarkLightMode(false)
    }
}