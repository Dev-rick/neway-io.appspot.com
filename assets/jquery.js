
window.onresize = function() {

  var windowWidth = window.outerWidth;
  if (windowWidth < 863)
  {
    console.log("< 863")
    $('#neway-protocol').attr('src','/assets/neway-protocol.svg');
    $('neway-protocol-svg').attr('viewBox', '0 0 701 660');
    $('neway-protocol-svg').attr('class', 'c253');
    $('neway-protocol-svg').css('font-size', '50');

  }
  else
  {
    $('#neway-protocol').attr('src', '/assets/neway-protocol.svg');
  }
};
