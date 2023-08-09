var randomNumber1 = Math.floor(Math.random()*6)+1;  //1-6

var randomDicee = "dice" + randomNumber1 + ".png";   //dicee1.png-dicee6.png

var randomImageSource = "images/" + randomDicee;    //images/dicee1.png-imagesdicee6.png

var imgage1 = document.querySelectorAll("img")[0];

 imgage1.setAttribute("src" , randomImageSource);



var randomNumber2 = Math.floor(Math.random()*6)+1;  //1-6

var randomDicee2 = "dice" + randomNumber2 + ".png";  //dicee1.png-dicee6.png

var randomImageSource2 = "images/" + randomDicee2;   //images/dicee1.png-imagesdicee6.png

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src" , randomImageSource2);



if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML="🚩 Player 1 wins!";
}
else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML="Player 2 wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML="Draw!";
}
