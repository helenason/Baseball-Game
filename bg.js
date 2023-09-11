function paintImage(num){
    const image = new Image();
    image.src=`images/${num+1}.jpg`;
    image.classList.add("bgImg");
    document.querySelector("body").appendChild(image);
}
function getRandom(){
    const ran = Math.floor(Math.random()*3); // 0,1,2
    return ran;    
}
function init(){
    const randomNum = getRandom();
    paintImage(randomNum);
}
init();