// slide bar

let slidebar = document.getElementsByClassName('slidebar')[0];
let openSlide = document.getElementById('open-slide');
let closeSlide = document.getElementById('close-slide');
closeSlide.style.display = "none";
isOpen = false;

function slideBtn(){
    if(isOpen == false){
        slidebar.style.display = "flex";
        openSlide.style.display = "none";
        closeSlide.style.display = "block";
        isOpen = true;
    }
    else{
        slidebar.style.display = "none";
        openSlide.style.display = "block";
        closeSlide.style.display = "none";
        isOpen = false;

    }

}

// night mode

let isDark = false;
function mode(){
if(isDark == false){
document.body.style.backgroundColor = "black";
document.body.style.color = "white";
isDark = true;
}else{
document.body.style.backgroundColor = "white";
document.body.style.color = "black";
isDark = false;
}

}
