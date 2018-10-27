$(function() {
  var scroll_offset = $('#intro').offset();
  $(window).scroll(function() {
    var scrolltop = $(this).scrollTop();
    if (scrolltop >= scroll_offset.top) {
      $('.scrollSite').show();
    } else {
      $('.scrollSite').hide();
    }
  });
  $('#icon-aboutme').click(function() {
    $('.canvas-box').animate({ scrollTop: scroll_offset.top }, 500);
  });
});
