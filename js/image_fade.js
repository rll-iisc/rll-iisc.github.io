$(document).ready(function () {
  slideShow(4000);

});

function slideShow(speed) {

  $('ul.images').append('<li id="slideshow-caption" class="caption"><div class="slideshow-caption-container"><p></p></div></li>');
  $('ul.images li').css({ opacity: 0.0 });
  $('ul.images li:first').css({ opacity: 1.0 }).addClass('show');

  var timer = setInterval('gallery()', speed);

  $('ul.images').hover(
    function () {
      clearInterval(timer);
    },
    function () {
      timer = setInterval('gallery()', speed);
    }
  );
}

function gallery() {

  var current = ($('ul.images li.show') ? $('ul.images li.show') : $('#ul.images li:first'));

  if (current.queue('fx').length == 0) {

    var next = ((current.next().length) ? ((current.next().attr('id') == 'slideshow-caption') ? $('ul.images li:first') : current.next()) : $('ul.images li:first'));
    var desc = next.find('img').attr('alt');
    next.css({ opacity: 0.0 }).addClass('show').animate({ opacity: 1.0 }, 1000);
    current.animate({ opacity: 0.0 }, 1000).removeClass('show');

  }
}