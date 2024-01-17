let button = document.getElementById("myButton");
let isBlack = false;

button.addEventListener("click", function(){
    if(isBlack === true){
     document.body.style.background = 'white';
     document.body.style.color = "black";
     button.innerHTML = 'Black'
     isBlack = false
   } else {
     document.body.style.background = "black";
     document.body.style.color = 'white';
     button.innerHTML = 'White'
     isBlack = true
   }
});