function highlight(){
  $('h1').text('Hello');
  $('.jumbotron').addClass('highlight');
}
function unhighlight(){
  $('h1').text('Hello, world');
  $('.jumbotron').removeClass('highlight');
}
function hide(){
  $('.jumbotron').fadeOut();
}
function show(){
  $('.jumbotron').slideDown();
}
$(document).ready(function() {
  $('.jumbotron').on('mouseenter',highlight);
  $('.jumbotron').on('mouseleave',unhighlight);
  $('.buttonhide').on('click',hide);
  $('.buttonshow').on('click',show);
});
$('.buttonhide').text('Hide');
$('.buttonshow').text('show');
