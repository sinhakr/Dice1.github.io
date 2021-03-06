var randomNumber1=Math.floor(Math.random() * 6) +1;
var randomimg1="dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src",randomimg1);
var randomNumber2=Math.floor(Math.random() * 6)+1;
var randomimg2="dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randomimg2);
var x=prompt("Enter Player1 Name:");
var y=prompt("Enter player2 Name:");
if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML="✌" + x + "Won";
}
else if(randomNumber1 < randomNumber2)
{
    document.querySelector("h1").innerHTML="👏" + y +"Won";
}
else
{
    document.querySelector("h1").innerHTML="😂Match Draw";
}