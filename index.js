// // // document.addEventListener("DOMContentLoaded", function(){
// // // window.addEventListener("scroll" ,function (){
// // //     if(window.scrollY>50) {
// // //         document.getElementById("navbar-top").classList.add("fixed-nav");
// // //         navbar_height = document.querySelector('.navbar').offsetHeight;
// // //         this.document.body.style.marginTop = navbar_height;
// // //     }
// // //     else{
// // //         this.document.body.style.marginTop = '0'
// // //         document.getElementById("navbar-top").classList.remove("fixed-nav");
// // //     }
  
// // // })
// // // })
// // document.addEventListener("DOMContentLoaded", function(){
// //     window.addEventListener('scroll', function() {
// //         if (window.scrollY > 50) {
// //           document.getElementById('navbar-top').classList.add('fixed-nav');
// //           // add padding top to show content behind navbar
// //           navbar_height = document.querySelector('.navbar').offsetHeight;
// //          // document.getElementById = "second-content".style.marginTop = navbar_height + 'px';
// //           body.style.paddingTop = "second-content".style.marginTop = navbar_height + 'px';
// //         } else if(this.window.scrollY < 50){
// //           document.getElementById('navbar_top').classList.remove('fixed-nav');
// //            // remove padding top from body
// //           document.body.style.paddingTop = '0';
// //         } 
// //     });
// //   }); 
$(document).ready(function () {
  $(window).scroll(function(){
    if ($(this).scrollTop() > 0) {
       $('#navbar-top').addClass('fixed-nav');
      //  navbar_height = document.querySelector('.navbar').offsetHeight;
      //  $(".second-content").css("padding-top",'300px')
    } else {
       $('#navbar-top').removeClass('fixed-nav');
    }
  });

})

