console.log("entra");
var menu=$('#menuTogle');
var lastScrollTop = 0;

$( window ).scroll(function() {
   console.log("entra");
  var pantalla= $(window).width();
  var currentScroll=window.pageYOffset || document.documentElement.scrollTop;
  if (pantalla>360) {

    if (currentScroll > lastScrollTop) {
       menu.css("display","block");
       console.log("hacia abajo");
       var pantalla= $(window).attr('width');
       console.log(pantalla);
    }
    else{
      if( currentScroll <= 3 ){
        menu.css("display","none");
      }
    }
  }

    lastScrollTop = currentScroll;
});
