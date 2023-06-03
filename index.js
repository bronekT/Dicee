
var  output1 =  Math.round(Math.random() * 5)+1;
var  output2 =  Math.round(Math.random() * 5)+1;

if (output1 === 1){
    document.querySelector(".img1").setAttribute("src" , "dice1.png");
} else if (output1 === 2){
    document.querySelector(".img1").setAttribute("src" , "dice2.png");
} else if (output1 === 3){
    document.querySelector(".img1").setAttribute("src" , "dice3.png");
} else if (output1 === 4){
    document.querySelector(".img1").setAttribute("src" , "dice4.png");
} else if (output1 ===5){
    document.querySelector(".img1").setAttribute("src" , "dice5.png");
} else {
    document.querySelector(".img1").setAttribute("src" , "dice6.png");
} 



if (output2 === 1){
    document.querySelector(".img2").setAttribute("src" , "dice1.png");
} else if (output2 === 2){
    document.querySelector(".img2").setAttribute("src" , "dice2.png");
} else if (output2 === 3){
    document.querySelector(".img2").setAttribute("src" , "dice3.png");
} else if (output2 === 4){
    document.querySelector(".img2").setAttribute("src" , "dice4.png");
} else if (output2 ===5){
    document.querySelector(".img2").setAttribute("src" , "dice5.png");
} else {
    document.querySelector(".img2").setAttribute("src" , "dice6.png");
} 

if (output1 > output2) {
    document.querySelector(".winner").textContent = "Player 1 WIN";
} else if (output1 < output2) {
    document.querySelector(".winner").textContent = "Player 2 WIN";
} else {
    document.querySelector(".winner").textContent = " Same Score ";
}




