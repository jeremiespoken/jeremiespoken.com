// Slide headers up
function moveHeading() {
  $("h1")
    .velocity({
      translateY: "0",
    }, [400,30], 1800);
}

// Slide in list items
function slideInItems() {
  $('.highlight')
    .velocity({
      translateY: 0,
    }, [400,30], 1800);
  $(".slide-in")
    .velocity("transition.slideUpIn", {
        stagger: 80,
        drag: true
    });

  // Aniate icon
  setTimeout(function(){
    $('#tipCalc')
      .velocity({
        scale: 1,
      }, [400,30], 1000);
  }, 500);
}

// Center heading position
$(".about-heading")
  .velocity({
    translateY: (($(window).outerHeight() - 64) - $(".about-heading").height()) / 2,
    opacity: 1
  }, 0);

$('#tipCalc')
    .velocity({
      scale: 0,
    }, 0);

$('.highlight')
    .velocity({
      translateY: $(window).height(),
    }, 0);

// Fire intro animation
$(".about-heading")
  .blast({ delimiter: "character" })
  .velocity("transition.slideUpIn",
     {
       display: null,
       stagger: 25,
       duration: 600,
       complete: function() {
          setTimeout(moveHeading, 10);
          setTimeout(slideInItems, 800);
       }
     }
  );