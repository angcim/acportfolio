'use strict';
console.log('reading js');

// ****************************** DESKTOP VARIABLES ******************************
// NAVIGATION
var homeLink = document.querySelector('#home');
var aboutLink = document.querySelector('#about');
var projectsLink = document.querySelector('#project');
var connectLink = document.querySelector('#connect');
var contactLink = document.querySelector('#contact');
var hoverLink = document.querySelector('#hoverLink');

// ****************************** END OF VARIABLES ******************************

// ****************************** TABLET + DESKTOP ******************************
// ********** DESKTOP HOVER LINKS **********
// HOME LINK
homeLink.addEventListener('mouseover', function() {
  document.getElementById('hoverLink').style.backgroundColor = '#8face5';
  document.getElementById('connect').style.backgroundColor = '#254c70';
  document.getElementById('connect').style.padding = '0.61em';
});

homeLink.addEventListener('mouseout', function() {
  document.getElementById('hoverLink').style.backgroundColor = '#4ac6b4';
    document.getElementById('connect').style.backgroundColor = '#4ac6b4';
      document.getElementById('connect').style.padding = '0.65em';
})

// ABOUT LINK
aboutLink.addEventListener('mouseover', function() {
  document.getElementById('hoverLink').style.backgroundColor = '#e28fa8';
  document.getElementById('connect').style.backgroundColor = '#254c70';
  document.getElementById('connect').style.padding = '0.61em';
});

aboutLink.addEventListener('mouseout', function() {
  document.getElementById('hoverLink').style.backgroundColor = '#4ac6b4';
    document.getElementById('connect').style.backgroundColor = '#4ac6b4';
      document.getElementById('connect').style.padding = '0.65em';
})


// PROJECT
projectsLink.addEventListener('mouseover', function() {
  document.getElementById('hoverLink').style.backgroundColor = '#5bbcde';
  document.getElementById('connect').style.backgroundColor = '#254c70';
  document.getElementById('connect').style.padding = '0.61em';
});

projectsLink.addEventListener('mouseout', function() {
  document.getElementById('hoverLink').style.backgroundColor = '#4ac6b4';
    document.getElementById('connect').style.backgroundColor = '#4ac6b4';
      document.getElementById('connect').style.padding = '0.65em';
})

// CONTACT LINK
contactLink.addEventListener('mouseover', function() {
  document.getElementById('hoverLink').style.backgroundColor = '#fa8d62';
  document.getElementById('connect').style.backgroundColor = '#254c70';
  document.getElementById('connect').style.padding = '0.61em';
});

contactLink.addEventListener('mouseout', function() {
  document.getElementById('hoverLink').style.backgroundColor = '#4ac6b4';
    document.getElementById('connect').style.backgroundColor = '#4ac6b4';
      document.getElementById('connect').style.padding = '0.65em';
})
