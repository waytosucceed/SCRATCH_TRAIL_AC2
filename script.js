document.addEventListener("DOMContentLoaded", function() {
    // Show the first section by default
    const firstButton = document.querySelector('.sidenav button');
    firstButton.classList.add('active-button');
    
    const firstSectionId = firstButton.getAttribute('onclick').match(/'([^']+)'/)[1];
    document.getElementById(firstSectionId).style.display = 'block';
});

function showContent(sectionId) {
    // Hide all content sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    const activeSection = document.getElementById(sectionId);
    activeSection.style.display = 'block';

    // Remove active class from all buttons
    const buttons = document.querySelectorAll('.sidenav button');
    buttons.forEach(button => {
        button.classList.remove('active-button');
    });

    // Add active class to the corresponding button
    const activeButton = Array.from(buttons).find(button => {
        return button.getAttribute('onclick').includes(sectionId);
    });
    
    if (activeButton) {
        activeButton.classList.add('active-button');
    }
}

// Function to toggle the sidebar visibility
function toggleSidenav() {
    const sidenav = document.querySelector('.sidenav');
    sidenav.classList.toggle('active'); // Toggle the active class
}

// Function to close the sidebar when clicking outside of it
function closeSidenav(event) {
    const sidenav = document.querySelector('.sidenav');
    const toggleButton = document.querySelector('.toggle-sidenav');

    // Check if the click was outside the sidenav and the toggle button
    if (!sidenav.contains(event.target) && !toggleButton.contains(event.target)) {
        sidenav.classList.remove('active'); // Remove the active class
    }
}

// Event listener for clicks on the document
document.addEventListener('click', closeSidenav);


function copyText(elementId) {
    const input = document.getElementById(elementId);
    input.disabled = false; // Temporarily enable to copy
    input.select();
    document.execCommand("copy");
    input.disabled = true; // Disable again after copying
    // alert(elementId.charAt(0).toUpperCase() + elementId.slice(1) + " copied to clipboard!");
}

function toggleSolution() {
    var img = document.getElementById("solution-img");
    if (img.style.display === "none") {
      img.style.display = "block";
    } else {
      img.style.display = "none";
    }
  }
  
  function toggleSolution2() {
    var img = document.getElementById("solution-img2");
    if (img.style.display === "none") {
      img.style.display = "block";
    } else {
      img.style.display = "none";
    }
  }
  