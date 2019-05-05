$(document).ready(function() {
  $('.nav-link').on('click', event => {
    console.log("clicked");
    if (!$('navlinks a').hasClass('nav-active')) {
      $(event.currentTarget).addClass('nav-active');
      $(event.currentTarget).siblings().removeClass('nav-active');
    }
  })

  const scrollLink = $('.scroll');

  // Smooth scrolling
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1500);
  })

  // Active link switching
  $(window).scroll( () => {
    let scrollbarLocation = $(this).scrollTop();
    //console.log('Scrollbar Location: ' + scrollbarLocation)
    scrollLink.each(function() {

      // Determine location of beginning of each section based on
      // hashtag reference of href attribute
      let sectionOffset = $(this.hash).offset().top;
      //console.log('Section Offset: ' + scrollbarLocation)
      //
      if (sectionOffset <= scrollbarLocation) {
        $(this).addClass('nav-active');
        $(this).siblings().removeClass('nav-active');
        //console.log(sectionOffset <= scrollbarLocation);
      }
    })

  })

  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("scrollTopBtn").style.display = "block";
    } else {
      document.getElementById("scrollTopBtn").style.display = "none";
    }
  }

  $('#scrollTopBtn').on('click', () => {
    $('html,body').animate({scrollTop:0}, 1500);
    //document.body.scrollTop = 0;
    //document.documentElement.scrollTop = 0;
  });

});
