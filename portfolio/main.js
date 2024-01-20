function myMenuFunction(){
    
    var menubtn=document.getElementById("menunav");

    if(menubtn.className === "menu"){
        menubtn.className += "responsive";
    }else{
        menubtn.className = "menu";

    }
}

let navbar=document.querySelector('nav')
window.onscroll=function(){
    if(window.scrollY>0){
        navbar.style.background=" white";

    }else{
        navbar.style.background= 'transparent';
    }
}