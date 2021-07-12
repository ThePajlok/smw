function exit_app() {
    process.exit()
  };
function mini_app() {
    getCurrentWindow().minimize();
  };
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >= 500) {
        //clearHeader, not clearheader - caps H
        $(".clearHeader").addClass("darkHeader");
    }
}); //missing );
function openTab(cityName) {
  var i;
  var x = document.getElementsByClassName("con");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(cityName).style.display = "block";  
}
function reloadApp(){
  location.reload();
}