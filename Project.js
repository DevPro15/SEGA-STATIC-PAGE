var current = $(window).scrollTop();
var total = $(window).height() - current;
var ele = $(".Text1");
var ele2 = $(".Text2");
var ele3 = $(".Text3");
var ele4 = $(".Text4");
var ele5 = $(".mainText1");
var ele6 = $(".mainText2");
var currPosition = ele.position().left + 360;
var trackLength = 300;
$(window).scroll(function (event) {
  current = $(window).scrollTop();
  console.log({ total: total, current: current });
  console.log((current / total) * 100);
  var newPosition = trackLength * (current / total);
  ele.css({ left: currPosition + newPosition + "px" });
  ele2.css({ right: currPosition + newPosition + "px" });
  ele3.css({ left: currPosition + newPosition + "px" });
  ele4.css({ right: currPosition + newPosition + "px" });
  ele5.css({ left: currPosition + newPosition + "px" });
  ele6.css({ right: currPosition + newPosition + "px" });
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
    $(".download").fadeOut();
  } else {
    $(".download").fadeIn();
  }
});