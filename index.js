var k = document.querySelectorAll(".drum"); //array of button elements is obtained

for (var i = 0; i < k.length; i++) {              //using for loop the elementsin the array is chosen and addEventListener is applied accordingly
  k[i].addEventListener("click", function(){
    var buttonInnerHtml = this.innerHTML;
    checksound(buttonInnerHtml);
    addanimation(buttonInnerHtml);
  });
}

document.addEventListener("keypress", function(e) {     //keypress is used to get key pressed by user using the function
  checksound(e.key);
  addanimation(e.key);
});

function checksound(k) {        //k---parameter and is passed into the function and gets substituted by values of e.key and buttonInnerHtml respectively
  switch (k) {                //switch-case which helps in playing the appropriate sounds according to the click of mouse or keyboard press by comparing the key/innerHTML pressed by user with that present in program
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play(); //method used inside addEventListener property
      break;

    case "a":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play(); //method used inside addEventListener property
      break;

    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play(); //method used inside addEventListener property
      break;

    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play(); //method used inside addEventListener property
      break;

    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play(); //method used inside addEventListener property
      break;

    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play(); //method used inside addEventListener property
      break;

    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play(); //method used inside addEventListener property
      break;

    default:
      console.log(buttonInnerHtml);

  }
}

function addanimation(currentKey){      //currentKey is an parameter which gets substituted by the value of e.key and buttonInnerHtml respectively
  var activebtn=document.querySelector("."+currentKey);       //selecting the buttoons/keys in keyboard using their class which is same as value stored in buttonInnerHtml and e.key except the dot(.) and its passed into the function with parameter of currentKey
  activebtn.classList.add("pressed");   //class is added for animation purpose into the css file for the button which has been clicked or triggered using the keyboard
  setTimeout(function(){            //timeout function is called which helps with animation purpose
    activebtn.classList.remove("pressed");      //added class has been removed in same way to prevent the animation from being permenant
  },100);

}
