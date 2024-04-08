
function toggleMenu() {
  var navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("show");
}


function createBox(className, content, link) {
  const box = document.createElement('div');
  box.className = 'box ' + className;
  box.innerHTML = content;


  box.addEventListener('click', function() {
    window.location.href = link; 
  });

  return box;
}



function initDashboard() {
  const dashboard = document.getElementById('dashboard');

 
  while (dashboard.firstChild) {
    dashboard.removeChild(dashboard.firstChild);
  }

  const boxData = [
    {
      class: "Activity",
      content: `<i class="fas fa-walking"></i> Activity<br>Total Steps:${globalAL}<br>Target Steps: 2500`,
      link: ".//widgets/activity-inner.html",
    },
    {
      class: "Heartbeat",
      content: `<i class="fas fa-heartbeat"></i> Heartbeat<br>${globalHR}bpm`,
      link: ".//widgets/heart-inner.html",
    },
    {
      class: "Calories Burnt",
      content: `<i class="fas fa-fire"></i> Calories Burnt<br>Total: ${globalCB}kcal<br>Target: 350kcal`,
      link: ".//widgets/calories-inner.html",
    },
    {
      class: "Water Intake",
      content: `<i class="fas fa-tint"></i> Water Intake<br>Total:${globalWater}ml<br>Target: 500ml`,
      link: ".//widgets/water-inner.html",
    },
    {
      class: "Temperature",
      content: `<i class="fas fa-thermometer-half"></i> Temperature<br>${globalTemp}°C`,
      link: ".//widgets/temp-inner.html",
    },
    {
      class: "Breathing Rate",
      content: `<i class="fas fa-lungs"></i>Breathing Rate<br>${globalBR}bpm`,
      link: ".//widgets/breathing-inner.html",
    },
  ];

  boxData.forEach(data => {
    const box = createBox(data.class, data.content, data.link);
    dashboard.appendChild(box);
  });
}


setInterval(function() {

  initDashboard();
}, 2000);

document.addEventListener('DOMContentLoaded', function() {
  initDashboard(); 
});


document.addEventListener("DOMContentLoaded", function() {
  var menuItems = document.querySelectorAll(".bottom-menu a");

  menuItems.forEach(function(item) {
    item.addEventListener("click", function() {
     
      menuItems.forEach(function(menuItem) {
        menuItem.classList.remove("active");
      });

     
      item.classList.add("active");
    });
  });
});


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