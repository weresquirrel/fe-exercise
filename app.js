
$(() => {

  const $menu = $('button');
  const $nav = $('nav');
  const $body = $('body');
  const $house = $('.house');
  const $beach = $('.beach');
  const $stud = $('.stud');

  $menu.on('click', function() {
    $menu.toggleClass('hamburger cross');
    $nav.toggleClass('off on');
  });

  $house.hover(function() {
    $body.removeClass();
    $body.addClass('house-bg');
    $body.addClass('white');
    // console.log('on');
  }, function() {
    $body.removeClass();
    // console.log('off');
  });

  $beach.hover(function() {
    $body.removeClass();
    $body.addClass('beach-bg');
    $body.addClass('white');
  }, function() {
    $body.removeClass();
  });

  $stud.hover(function() {
    $body.removeClass();
    $body.addClass('stud-bg');
    $body.addClass('white');
  }, function() {
    $body.removeClass();
  });


//////
});
