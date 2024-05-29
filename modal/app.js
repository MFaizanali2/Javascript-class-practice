let show = document.querySelector("#box");
let isshow = false;
function showbox(){
    // box.style.opacity = "1";
    // box.style.backgroundColor = "black";
    // box.style.transition = ".5s";
    isshow = !isshow;
    if(isshow){
        box.style.backgroundColor = "black";
        box.style.transition = ".5s";
    }else{
        box.style.backgroundColor = "red";
        box.style.transition = ".5s";
    }
}
function hidebox(){
    box.style.opacity = "0";
    box.style.transition = "1s";
}