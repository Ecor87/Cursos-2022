/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function navFunction() {
    var x = document.getElementById("navHamburgerLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }