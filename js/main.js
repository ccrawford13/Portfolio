var elements = document.getElementsByTagName('script');

Array.prototype.forEach.call(elements, function(element) {
  if (element.type.indexOf('math/tex') != -1) {
     // Extract math markdown
     var textToRender = element.innerText || element.textContent;

     // Create span for KaTeX
     var katexElement = document.createElement('span');

     // Support inline and display math
     if (element.type.indexOf('mode=display') != -1){
       katexElement.className += "math-display";
       textToRender = '\\displaystyle {' + textToRender + '}';
     } else {
       katexElement.className += "math-inline";
     }

     katex.render(textToRender, katexElement);
     element.parentNode.insertBefore(katexElement, element);
  }
});

// jQuery
$(document).ready(function() {
// Fade Header in on scroll-up, out on scroll down
  var previousScroll = 0,
    headerOrgOffset = $('.site-nav').offset().top;

  $(window).scroll(function() {
    var currentScroll = $(this).scrollTop();
    console.log(currentScroll + " and " + previousScroll + " and " + headerOrgOffset);
    if(currentScroll > headerOrgOffset) {
      if (currentScroll > previousScroll) {
        $('.site-nav').fadeOut();
      } else {
        $('.site-nav').fadeIn();
        $('.site-nav').addClass('scrolled');
      }
    } else {
      $('.site-nav').removeClass('scrolled');
    }
    previousScroll = currentScroll;
  });

  $('a[href^="#"]').on('click',function (e) {
    e.preventDefault();
    var target = this.hash;
    var $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 900, 'swing');
  });
});
