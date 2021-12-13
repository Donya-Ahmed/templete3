$(document).ready(function(){
    $(".owl-carousel").owlCarousel(
        {
            items:2,
            nav:true,
            dots:false,
            navText:['<i class="fas fa-long-arrow-alt-left"></i>','<i class="fas fa-long-arrow-alt-right"></i>'],
            loop:true,
           
          
        }
    );
  });

  var topBtn = document.getElementById('topBtn')

window.addEventListener('scroll' , function(){

    if(document.documentElement.scrollTop > 600) topBtn.style.display = "inline-block"
    else topBtn.style.display = "none"
    
})