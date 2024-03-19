// burger menu
function toggleMenu() {
  var navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("show");
}
// dashbord boxes link to HTML pages
function createBox(className, content, link) {
  const box = document.createElement('div');
  box.className = 'box ' + className;
  box.innerHTML = content;

  // Adding link functionality
  box.addEventListener('click', function() {
      window.location.href = link; // Redirect to the specified HTML page
  });

  return box;
}

function initDashboard() {
  const dashboard = document.getElementById('dashboard');

  const boxData = [
    {
      class: "Activity",
      content: '<i class="fas fa-walking"></i> Activity<br>Active',
      link: ".//widgets/activity-inner.html", // Link to the activity.html page
    },
    {
      class: "Heartbeat",
      content: '<i class="fas fa-heartbeat"></i> Heartbeat<br>avg. 52 bpm ',
      link: ".//widgets/heart-inner.html", // Link to the heartbeat.html page
    },
    {
      class: "Calories Burnt",
      content: '<i class="fas fa-fire"></i> Calories Burnt<br>104 Calories',
      link: ".//widgets/calories-inner.html", // Link to the calories.html page
    },
    {
      class: "Water Intake",
      content: '<i class="fas fa-tint"></i> Water Intake<br>400ml',
      link: ".//widgets/water-inner.html", // Link to the water.html page
    },
    {
      class: "Temperature",
      content: '<i class="fas fa-thermometer-half"></i> Temperature<br>20oC',
      link: ".//widgets/temp-inner.html", // Link to the temperature.html page
    },
    {
      class: "Breathing Rate",
      content: '<i class="fas fa-lungs"></i> 66 bpm<br>avg. 52 bpm',
      link: ".//widgets/breathing-inner.html", // Link to the breathing.html page
    },
  ];

  boxData.forEach(data => {
      const box = createBox(data.class, data.content, data.link);
      box.addEventListener('click', function() {
          window.location.href = data.link; // Redirect to the specified HTML page
      });
      dashboard.appendChild(box);
  });
}

document.addEventListener('DOMContentLoaded', initDashboard);



// active links for bottom menu
document.addEventListener("DOMContentLoaded", function () {
  var menuItems = document.querySelectorAll(".bottom-menu a");

  menuItems.forEach(function (item) {
    item.addEventListener("click", function () {
      // Remove "active" class from all menu items
      menuItems.forEach(function (menuItem) {
        menuItem.classList.remove("active");
      });

      // Add "active" class to the clicked menu item  
      item.classList.add("active");
    });
  });
});

// remove bottom menu on scroll 

var prevScrollPos = window.pageYOffset;

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    document.getElementById("bottomMenu").classList.remove("hidden");
  } else {
    document.getElementById("bottomMenu").classList.add("hidden");
  }

  prevScrollPos = currentScrollPos;
};