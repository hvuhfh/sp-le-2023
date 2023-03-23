let punkti = 0;

let red = 0;
let green = 0;
let blue = 0;
let platums = 200;
let diametrs = 200;
function OnButtonClick(){
    punkti += 1;
    document.getElementById("score").innerHTML = punkti;
    
    red = getRandomInt(256);
    green = getRandomInt(256);
    blue = getRandomInt(256);

    let rgbCode = "rgb(" + red.toString() + "," + green.toString() + "," + blue.toString() + ")";
    diametre -=5;

    if(diametre <=5){
    document.getElementById("button").style.backgroundColor = blue ;

   platums = width -=50;
   augstums = width -=50;

    document.getElementById("button").style.width = width.toString()  + "px";
}


function GenereNejaunoSkaitli(līdz){ 


    return Math.floor
}