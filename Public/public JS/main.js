// burger menu
function toggleMenu() {
  var navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("show");
}

// dashbord boxes popup
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
      content: '<i class="fas fa-thermometer-half"></i> Temperature<br>20oC',
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