// burger menu
function toggleMenu() {
  var navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("show");
}

// dashboard boxes link to HTML pages
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

// Assume globalTemp is a variable that holds the current temperature
// This value needs to be updated regularly outside this script// Example initial value

function initDashboard() {
  const dashboard = document.getElementById('dashboard');

  // Clear existing content
  while (dashboard.firstChild) {
    dashboard.removeChild(dashboard.firstChild);
  }

  const boxData = [
    {
      class: "Activity",
      content: '<i class="fas fa-walking"></i> Activity<br>Active',
      link: ".//widgets/activity-inner.html",
    },
    {
      class: "Heartbeat",
      content: `<i class="fas fa-heartbeat"></i> Heartbeat<br>${globalHR}`,
      link: ".//widgets/heart-inner.html",
    },
    {
      class: "Calories Burnt",
      content: `<i class="fas fa-fire"></i> Calories Burnt<br>${globalCB}`,
      link: ".//widgets/calories-inner.html",
    },
    {
      class: "Water Intake",
      content: `<i class="fas fa-tint"></i> Water Intake<br>${globalWater}`,
      link: ".//widgets/water-inner.html",
    },
    {
      class: "Temperature",
      content: `<i class="fas fa-thermometer-half"></i> Temperature<br>${globalTemp}°C`,
      link: ".//widgets/temp-inner.html",
    },
    {
      class: "Breathing Rate",
      content: `<i class="fas fa-lungs"></i>Breathing Rate<br>${globalBR}`,
      link: ".//widgets/breathing-inner.html",
    },
  ];

  boxData.forEach(data => {
    const box = createBox(data.class, data.content, data.link);
    dashboard.appendChild(box);
  });
}

// Refresh the dashboard every 20 seconds
setInterval(function() {

  initDashboard();
}, 2000);

document.addEventListener('DOMContentLoaded', function() {
  initDashboard(); // Initialize the dashboard on page load
});

// active links for bottom menu
document.addEventListener("DOMContentLoaded", function() {
  var menuItems = document.querySelectorAll(".bottom-menu a");

  menuItems.forEach(function(item) {
    item.addEventListener("click", function() {
      // Remove "active" class from all menu items
      menuItems.forEach(function(menuItem) {
        menuItem.classList.remove("active");
      });

      // Add "active" class to the clicked menu item
      item.classList.add("active");
    });
  });
});

// remove bottom menu on scroll
var prevScrollPos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    document.getElementById("bottomMenu").classList.remove("hidden");
  } else {
    document.getElementById("bottomMenu").classList.add("hidden");
  }
  prevScrollPos = currentScrollPos;
};