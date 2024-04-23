$(".navigation-list").clone().appendTo(".mobile-menu-body");

$(".hamburger").on("click", function () {
  if (!$(".mobile-menu").hasClass("mobile-view")) {
    $(".mobile-menu").addClass("mobile-view");
  } else {
    $(".mobile-menu").removeClass("mobile-view");
  }
});

AOS.init({
  disable: function () {
    var maxWidth = 800;
    return window.innerWidth < maxWidth;
  },
});
$("#menu-close").on("click", function () {
  $(".mobile-menu").removeClass("mobile-view");
  $(".dropdown-li").removeClass("open");
  $(".dropdown-li").find(">.dropdown-list").hide(200);
});

$(".mobile-menu .dropdown-li>a").append('<i class="fa fa-angle-right"></i>');

$(".mobile-menu .dropdown-li>a").click(function () {
  const parent = $(this).parent(".dropdown-li");
  if (!parent.hasClass("open")) {
    const ulParent = parent.parent();
    ulParent.find(".dropdown-li.open").find(">.dropdown-list").hide(200);
    ulParent.find(".dropdown-li.open").removeClass("open");
    parent.addClass("open");
    parent.find(">.dropdown-list").show(200);
  } else {
    parent.removeClass("open");
    parent.find(">.dropdown-list").hide(200);
  }
});

$(".animated-progress span").each(function () {
  $(this).animate(
    {
      width: $(this).attr("data-progress") + "%",
    },
    4000
  );
  $(this).text($(this).attr("data-progress") + "%");
});



// Counter
// Function to animate counting
function animateCount(targetElement, startValue, endValue, duration) {
  let startTime;
  const step = (timestamp) => {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    const currentCount = Math.floor(progress * (endValue - startValue) + startValue);
    targetElement.textContent = currentCount.toLocaleString(); // Display with commas
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

// Function to start animation when element is in view
function startCountAnimationWhenVisible(element, startValue, endValue, duration) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCount(entry.target, startValue, endValue, duration);
        observer.unobserve(entry.target); // Stop observing once element is in view
      }
    });
  });

  observer.observe(element);
}

// Select elements and start counting animation when they become visible
const batchCountElement = document.getElementById('batchCount');
const profileCountElement = document.getElementById('profileCount');
const earnedCountElement = document.getElementById('earnedCount');
const tradesCountElement = document.getElementById('tradesCount');
const batchCountElement3 = document.getElementById('batchCount3');
const profileCountElement3 = document.getElementById('profileCount3');
const earnedCountElement3 = document.getElementById('earnedCount3');
const tradesCountElement3 = document.getElementById('tradesCount3');
const batchCountElement4 = document.getElementById('batchCount4');
const profileCountElement4 = document.getElementById('profileCount4');
const earnedCountElement4 = document.getElementById('earnedCount4');
const tradesCountElement4 = document.getElementById('tradesCount4');

// Example animations for batch count, profile count, earned count, and trades count
startCountAnimationWhenVisible(batchCountElement2, 0, 69, 1000);
startCountAnimationWhenVisible(batchCountElement, 0, 24, 1000);
startCountAnimationWhenVisible(profileCountElement, 0, 870, 1000);
startCountAnimationWhenVisible(earnedCountElement, 0, 14600, 1000);
startCountAnimationWhenVisible(tradesCountElement, 0, 253, 1000);
startCountAnimationWhenVisible(batchCountElement4, 0, 24, 1000);
startCountAnimationWhenVisible(profileCountElement4, 0, 870, 1000);
startCountAnimationWhenVisible(earnedCountElement4, 0, 13100, 1000);
startCountAnimationWhenVisible(tradesCountElement4, 0, 153, 1000);
startCountAnimationWhenVisible(batchCountElement3, 0, 20, 1000);
startCountAnimationWhenVisible(profileCountElement3, 0, 420, 1000);
startCountAnimationWhenVisible(earnedCountElement3, 0, 13200, 1000);
startCountAnimationWhenVisible(tradesCountElement3, 0, 215, 1000);
startCountAnimationWhenVisible(header-animate, 0, 69, 1000);
