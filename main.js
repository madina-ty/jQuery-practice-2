$(document).ready(function() {
  var leftBlockWidth = 250; 
  var sliderPosition = 50; 
  var topBlockHeight = 50; 
  var bottomBlockHeight = 50; 

  $("#toggleButton").click(function() {
    if ($(this).text() === "❯") {
      // Скрыть левый блок
      $(this).text("❮");
      $(".left-block").css("width", "0px");
      $(this).css("left", "0px");
    } else {
      // Показать левый блок
      $(this).text("❯");
      $(".left-block").css("width", leftBlockWidth + "px");
      $(this).css("left", leftBlockWidth + "px");
    }
  });

  $("#slider").mousedown(function(e) {
    e.preventDefault(); 
    $(document).mousemove(function(e) {
      var newPosition = e.pageY - $(window).height() / 2; 
      sliderPosition = Math.max(newPosition, 0); 
      sliderPosition = Math.min(sliderPosition, $(window).height()); 

      topBlockHeight = $(window).height() / 2 - sliderPosition;
      bottomBlockHeight = $(window).height() / 2 + sliderPosition;

      topBlockHeight = Math.max(topBlockHeight, 100);
      bottomBlockHeight = Math.max(bottomBlockHeight, 100);

      $(".top-block").css("height", topBlockHeight + "px");
      $(".bottom-block").css("height", bottomBlockHeight + "px");
    });
  });

  $(document).mouseup(function() {
    $(document).unbind("mousemove"); 
  });
});
