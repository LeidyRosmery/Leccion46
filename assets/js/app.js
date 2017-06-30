var menu= document.getElementById('menuTogle')
var lastScrollTop = 0;
window.addEventListener("scroll", function() {
    var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
       menu.style.display= "block";
       console.log("hacia abajo");

    }
    else{
      if( currentScroll <= 3 ){
        console.log("hacia arria");
           menu.style.display= "none";
      }
    }
    lastScrollTop = currentScroll;
}, false);
