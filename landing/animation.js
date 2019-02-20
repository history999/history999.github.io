$(window).scroll(function() {
    $('.mov-form-send').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+500) {
        $(this).addClass('heartBeat');
      }
    });
  });

$(window).scroll(function() {
    $('.mov-why').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+500) {
        $(this).addClass('flash');
      }
    });
  });