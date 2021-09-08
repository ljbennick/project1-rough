function hide(){
    var div = document.getElementById('change-theme');
    div.style.display = 'none';
  }

document.getElementById('change-theme').onclick = function() {
    if (document.getElementById('theme').href == "bloodborne.css") {
      document.getElementById('theme').href = "startup.css";
    } else {
        document.getElementById('theme').href = "bloodborne.css";
        hide()
        document.getElementById("demo").innerHTML = "Welcome to my project!";

    } 
  };

//   document.getElementById('change-theme').onclick = function() {
//     if (document.getElementById('theme').href == "startup.css") {
//       document.getElementById('theme').href = "bloodborne.css";
//     } else if (document.getElementById('theme').href == "bloodborne.css"){
//       document.getElementById('theme').href = "startup.css";
//     } 
//   };