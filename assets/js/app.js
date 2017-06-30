console.log("entra");
var menu=$('#menuTogle');
var lastScrollTop = 0;

$( window ).scroll(function() {
   console.log("entra");
  var currentScroll=window.pageYOffset || document.documentElement.scrollTop;
  if (currentScroll > lastScrollTop) {
     menu.css("display","block");
     console.log("hacia abajo");
  }
  else{
    if( currentScroll <= 3 ){
      menu.css("display","none");
    }
  }
    lastScrollTop = currentScroll;
});
