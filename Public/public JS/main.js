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
      content: `<i class="fas fa-thermometer-half"></i> Temperature<br>${globalTemp}°C`,
      popupContent: "Temperature Popup Content",
      popupInfo: "Additional Information for Temperature",
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



function refreshDashboard() {
  const dashboard = document.getElementById('dashboard');
  // First, clear the existing dashboard content
  while (dashboard.firstChild) {
      dashboard.removeChild(dashboard.firstChild);
  }
  // Re-initialize the dashboard
  initDashboard();
}

document.addEventListener('DOMContentLoaded', function() {
  // Initial call to setup the dashboard
  initDashboard();

  // Set an interval to refresh the dashboard every 20 seconds (20000 milliseconds)
  setInterval(refreshDashboard, 20000);
});

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

// burger menu
function toggleMenu() {
  var navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("show");
}

// dashboard boxes popup
function createBox(className, content, popupContent, popupInfo) {
  const box = document.createElement('div');
  box.className = 'box ' + className;
  box.innerHTML = content;

  // Adding popup functionality
  box.addEventListener('click', function() {
    // Creating a string with both popup content and information
    const popupMessage = popupContent + '\n' + popupInfo;
    alert(popupMessage); // You can customize this popup behavior as needed
  });

  return box;
}

function initDashboard() {
  const dashboard = document.getElementById('dashboard');
  // Ensure dashboard is cleared before adding new boxes
  while (dashboard.firstChild) {
    dashboard.removeChild(dashboard.firstChild);
  }

  const boxData = [
    {
      class: "Activity",
      content: '<i class="fas fa-walking"></i> Activity<br>Active',
      popupContent: "Activity Popup Content",
      popupInfo: "Additional Information for Activity",
    },
    {
      class: "Heartbeat",
      content: '<i class="fas fa-heartbeat"></i> Heartbeat<br>avg. 52 bpm ',
      popupContent: "Heartbeat Popup Content",
      popupInfo: "Additional Information for Heartbeat",
    },
    {
      class: "Calories Burnt",
      content: '<i class="fas fa-fire"></i> Calories Burnt<br>104 Calories',
      popupContent: "Calories Burnt Popup Content",
      popupInfo: "Additional Information for Calories Burnt",
    },
    
    {
      class: "Water Intake",
      content: '<i class="fas fa-tint"></i> Water Intake<br>400ml',
      popupContent: "Water Intake Popup Content",
      popupInfo: "Additional Information for Water Intake",
    },
    {
      class: "Temperature",
      content: `<i class="fas fa-thermometer-half"></i> Temperature<br>${globalTemp}°C`,
      popupContent: "Temperature Popup Content",
      popupInfo: "Additional Information for Temperature",
    },
    {
      class: "Breathing Rate",
      content: '<i class="fas fa-lungs"></i> 66 bpm<br>avg. 52 bpm',
      popupContent: "Breathing Rate Popup Content",
      popupInfo: "Additional Information for Breathing Rate",
    },
  ];

  boxData.forEach(data => {
    const box = createBox(data.class, data.content, data.popupContent, data.popupInfo);
    dashboard.appendChild(box);
  });
}

// Active links for bottom menu
function activateBottomMenu() {
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
}

// Remove bottom menu on scroll
function setupScrollBehavior() {
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
}

// Initialize everything on DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
  initDashboard(); // Initial setup for the dashboard
  activateBottomMenu(); // Setup for bottom menu
  setupScrollBehavior(); // Setup for hiding/showing bottom menu on scroll

  // Refresh the dashboard every 20 seconds
  setInterval(initDashboard, 20000);
});

