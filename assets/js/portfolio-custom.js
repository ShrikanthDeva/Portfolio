// Portfolio Custom JavaScript
$(document).ready(function () {
  // Initialize tooltips for tech stack
  $('[data-toggle="tooltip"]').tooltip({
    html: true,
    placement: function (context, source) {
      // Always place tooltip above the image
      return "top";
    },
    container: "body",
    boundary: "window",
    trigger: "hover focus",
  });

  // Animate timeline items on scroll
  function animateTimeline() {
    $(".timeline-item").each(function (i) {
      var itemTop = $(this).offset().top;
      var winBottom = $(window).scrollTop() + $(window).height();
      if (winBottom > itemTop + 40) {
        $(this).css({ opacity: 1, transform: "translateY(0)" });
      }
    });
  }
  
  $(window).on("scroll resize", animateTimeline);
  setTimeout(animateTimeline, 400);

  // Initialize certificate cards
  $(".cert-card").addClass("animate__animated animate__fadeInUp");

  // Add non-clickable class to Girl Script Summer of Code card
  $(".cert-card").each(function () {
    if ($(this).data("title") === "Girl Script Summer Of Code") {
      $(this).addClass("non-clickable");
    }
  });

  // Certificate card click handler
  $(".cert-card").on("click", function (e) {
    var link = $(this).data("link");
    var title = $(this).data("title");

    // Disable click functionality for Girl Script Summer of Code card
    if (
      title === "Girl Script Summer Of Code" ||
      $(this).hasClass("non-clickable")
    ) {
      e.preventDefault();
      return false;
    }

    // For other cards with valid links
    if (link && link !== "#") {
      e.preventDefault();
      window.open(link, "_blank");
      return;
    }

    // For cards without valid links, show modal
    var org = $(this).data("org");
    var date = $(this).data("date");
    var img = $(this).data("img");

    $("#cert-modal-img").attr("src", img);
    $("#cert-modal-title").text(title);
    $("#cert-modal-org").text(org);
    $("#cert-modal-date").text(date);
    $("#cert-modal-link").attr("href", link);
    $("#cert-modal").show();
  });

  // Initialize profile cards
  $(".profile-card").addClass("animate__animated animate__fadeInUp");
  
  // Profile card click handler
  $(".profile-card").on("click", function (e) {
    var link = $(this).data("link");
    var title = $(this).data("title");
    var desc = $(this).data("desc");
    var img = $(this).data("img");

    // If there's a valid link, open it directly instead of modal
    if (link && link !== "#") {
      e.preventDefault();
      window.open(link, "_blank");
      return;
    }

    // Otherwise show modal with details
    $("#profile-modal-img").attr("src", img);
    $("#profile-modal-title").text(title);
    $("#profile-modal-desc").text(desc);
    $("#profile-modal-link").attr("href", link);
    $("#profile-modal").show();
  });

  // Initialize project cards
  $(".project-card").addClass("animate__animated animate__fadeInUp");
  $(".project-card").on("click", function (e) {
    var link = $(this).data("link");
    
    // Always open project link in new tab if available
    if (link && link !== "#") {
      e.preventDefault();
      window.open(link, "_blank");
    }
  });

  // Modal close functionality
  $(".cert-modal-close").on("click", function () {
    $(this).closest(".cert-modal").hide();
  });

  // Close modal when clicking outside
  $(".cert-modal").on("click", function (e) {
    if (e.target === this) {
      $(this).hide();
    }
  });
  
  // Custom counter with "+" signs
  var customCounterInit = function() {
    if ( $('.section-counter-custom').length > 0 ) {
      $('.section-counter-custom').waypoint( function( direction ) {

        if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
          $(this.element).addClass('ftco-animated');

          $(this.element).find('.number').each(function(){
            var $this = $(this),
              num = $this.data('number');
            
            // Use animateNumber with custom step function to add "+"
            $this.animateNumber(
              {
                number: num,
                numberStep: function(now, tween) {
                  var target = Math.ceil(now);
                  var isComplete = target >= num;
                  var displayValue = target.toLocaleString();
                  
                  // Add "+" sign when animation is complete
                  if (isComplete) {
                    displayValue += '+';
                  }
                  
                  $(tween.elem).text(displayValue);
                }
              }, 3000
            );
          });
          
        }

      } , { offset: '95%' } );
    }
  }
  
  // Initialize custom counter
  customCounterInit();
});

// Tooltip initialization for tech stack
$(function () {
  $('[data-toggle="tooltip"]').tooltip({
    html: true,
    placement: function (context, source) {
      // Always place tooltip above the image
      return "top";
    },
    container: "body",
    boundary: "window",
    trigger: "hover focus",
  });
});
