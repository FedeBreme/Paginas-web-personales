let button = document.getElementById("myButton");
let isBlack = false;

button.addEventListener("click", function(){
    if(isBlack === true){
     document.body.style.background = 'white';
     document.body.style.color = "black";
     button.innerHTML = 'Night Mode'
     isBlack = false
   } else {
     document.body.style.background = "black";
     document.body.style.color = 'white';
     button.innerHTML = 'Day Mode'
     isBlack = true
   }
});