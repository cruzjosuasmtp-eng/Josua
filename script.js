function menuOpen() {
    const togglebtn = document.querySelector('.toggle-btn');
    const sidebar = document.querySelector('.sidebar');

    togglebtn.classList.add('active');
    sidebar.classList.add('active');
    
}

function hidemenu() {
    const togglebtn = document.querySelector('.toggle-btn');
    const sidebar = document.querySelector('.sidebar');

    togglebtn.classList.remove('active');
    sidebar.classList.remove('active');
}
function liteOn(){
    const liteon= document.querySelector('.lite-on');
    const liteout= document.querySelector('.lite-out');
    const body =document.body;
    liteon.style.display='none';
    liteout.style.display='flex';
    body.classList.add('dark-mode');

}
function liteOff(){
    const liteon= document.querySelector('.lite-on');
    const liteout= document.querySelector('.lite-out');
    const body = document.body;
    liteon.style.display='flex';
    liteout.style.display='none';
    body.classList.remove('dark-mode');
}

function showname() {
    const welcome = document.querySelector('.welcome-img');
    const username = document.querySelector('.text').value;
    const textHere = document.querySelector('.text-here');
    const wave = document.querySelector('.img-bye');

    textHere.textContent = username;
    welcome.style.display= 'block';
    textHere.style.opacity='1';
    wave.style.display='none';
}
function showmodal(){
    const mode = document.querySelector('.connect');
    const modal = document.querySelector('.contact-us');
  
    mode.classList.add('active');
    modal.classList.add('active');
    if (typeof hidemenu === "function") {
        hidemenu();
    }
    

}

function closemodal(){
    
    const mode = document.querySelector('.connect');
    const modal = document.querySelector('.contact-us');
  
    mode.classList.remove('active');
    modal.classList.remove('active');


}


window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});
document.oncontextmenu = () => {
  alert(" Don' try to right click")
  return false
}

document.addEventListener("keydown", (e) => {
  if (e.key === "F12") {
    e.preventDefault();
    alert("Don't try to inspect element");
  }
  if (e.ctrlKey && e.key == "u"){
    alert("Huwag Po");
    return false
  }
  if(e.ctrlKey && e.key == "c"){
    alert("Naku Bawal mangopya");
    return false
  }
  if (e.ctrlKey && e.key == "V"){
    alert("Hay Naku");
    return false
  }

});
