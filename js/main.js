const x = document.getElementById("menu-id");
function callback(){
    if(window.pageYOffset >= 605 && window.pageYOffset < 1049){
        x.classList.remove("color2");
        x.classList.add("color1");
    }
    
    if (window.pageYOffset >= 1050 && window.pageYOffset < 1689){
        x.classList.remove("color1");
        x.classList.remove("color3");
        x.classList.add("color2");
    }

    if (window.pageYOffset >= 1690){
        x.classList.remove("color2");
        x.classList.add("color3");
    }
}


window.addEventListener("scroll",callback);
window.addEventListener("load",callback);