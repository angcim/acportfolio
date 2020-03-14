'use strict';
console.log('reading js');

// ****************************** MOBILE VARIABLES ******************************

// HOME PAGE PROJECTS
var projectIcon = document.querySelector('#projectIcon');
var leftArrow = document.querySelector('#leftArrow');
var rightArrow = document.querySelector('#rightArrow');

// HOME PAGE ABOUT ME
var aboutIcon = document.querySelector('#portraitIcon');
var leftArrow2 = document.querySelector('#leftArrow2');
var rightArrow2 = document.querySelector('#rightArrow2');

// ABOUT ME PAGE
var workRightArrow = document.querySelector('#aboutRightArrow');
var workLeftArrow = document.querySelector('#aboutLeftArrow');

var bioRightArrow = document.querySelector('#aboutRightArrow2');
var bioLeftArrow = document.querySelector('#aboutLeftArrow2');

var portfolioRightArrow = document.querySelector('#aboutRightArrow3');
var portofolioLeftArrow = document.querySelector('#aboutLeftArrow3');


// HOME PAGE CONNECT
var connectIcon = document.querySelector('#connectIcon');
var leftArrow3 = document.querySelector('#leftArrow3');
var rightArrow3 = document.querySelector('#rightArrow3');

// HOME PAGE CONTACT
var contactIcon = document.querySelector('#contactIcon');
var leftArrow4 = document.querySelector('#leftArrow4');
var rightArrow4 = document.querySelector('#rightArrow4');


// ****************************** DESKTOP VARIABLES ******************************
var homeLink = document.querySelector('#home');
var aboutLink = document.querySelector('#about');
var projectsLink = document.querySelector('#project');
var connectLink = document.querySelector('#connect');
var contactLink = document.querySelector('#contact');
var hoverLink = document.querySelector('#hoverLink');

// ****************************** END OF VARIABLES ******************************

// ********** HOME PAGE RIGHT ARROWS **********
rightArrow.addEventListener('click', function() {
  document.querySelector('#mobileProjectsLink').style.display = 'none';
  document.querySelector('#mobileAboutLink').style.display = 'block';
});

rightArrow2.addEventListener('click', function() {
  document.querySelector('#mobileAboutLink').style.display = 'none';
  document.querySelector('#mobileConnectLink').style.display = 'block';
});

rightArrow3.addEventListener('click', function() {
  document.querySelector('#mobileConnectLink').style.display = 'none';
  document.querySelector('#mobileContactLink').style.display = 'block';
});

rightArrow4.addEventListener('click', function() {
  document.querySelector('#mobileContactLink').style.display = 'none';
  document.querySelector('#mobileProjectsLink').style.display = 'block';
});

// HOME PAGE LEFT ARROWS
leftArrow.addEventListener('click', function() {
  document.querySelector('#mobileProjectsLink').style.display = 'none';
  document.querySelector('#mobileContactLink').style.display = 'block';
});

leftArrow2.addEventListener('click', function() {
  document.querySelector('#mobileAboutLink').style.display = 'none';
  document.querySelector('#mobileProjectsLink').style.display = 'block';
});

leftArrow3.addEventListener('click', function() {
  document.querySelector('#mobileConnectLink').style.display = 'none';
  document.querySelector('#mobileAboutLink').style.display = 'block';
});

leftArrow4.addEventListener('click', function() {
  document.querySelector('#mobileContactLink').style.display = 'none';
  document.querySelector('#mobileConnectLink').style.display = 'block';
});


// MOBILE HEADER COLOR CHANGE
//ABOUT ME HEADER: PURPLE > BLUE
projectIcon.addEventListener('click', function() {
  document.querySelector('body').style.backgroundColor = '#9fd9ed';
});

//ABOUT ME HEADER: PURPLE > PINK
aboutIcon.addEventListener('click', function() {
  document.querySelector('body').style.backgroundColor = '#f1bbc9';
});

//CONNECT HEADER: PURPLE > GREEN
connectIcon.addEventListener('click', function() {
  document.querySelector('body').style.backgroundColor = '#d3f4ed';
});

// HIDDEN CONTACT HEADER: PURPLE > PINK
// contactIcon.addEventListener('click', function() {
//   document.querySelector('#mobileHomepage').style.display = 'none';
//   document.querySelector('#mobileContact').style.display = 'block';
//   document.querySelector('body').style.backgroundColor = '#ffbca4';
// });


// ********** DESKTOP HOVER LINKS **********
// ABOUT LINK
aboutLink.addEventListener('mouseover', function() {
  document.getElementById('hoverLink').style.backgroundColor = '#e28fa8';
  document.getElementById('home').style.backgroundColor = '#254c70';
  document.getElementById('home').style.padding = '0.61em';
});

aboutLink.addEventListener('mouseout', function() {
  document.getElementById('hoverLink').style.backgroundColor = '#8face5';
    document.getElementById('home').style.backgroundColor = '#8face5';
      document.getElementById('home').style.padding = '0.65em';
})

// PROJECT LINK
projectsLink.addEventListener('mouseover', function() {
  document.getElementById('hoverLink').style.backgroundColor = '#5bbcde';
  document.getElementById('home').style.backgroundColor = '#254c70';
  document.getElementById('home').style.padding = '0.61em';
});

projectsLink.addEventListener('mouseout', function() {
  document.getElementById('hoverLink').style.backgroundColor = '#8face5';
    document.getElementById('home').style.backgroundColor = '#8face5';
      document.getElementById('home').style.padding = '0.65em';
})

// CONNECT LINK
connectLink.addEventListener('mouseover', function() {
  document.getElementById('hoverLink').style.backgroundColor = '#4ac6b4';
  document.getElementById('home').style.backgroundColor = '#254c70';
  document.getElementById('home').style.padding = '0.61em';
});

connectLink.addEventListener('mouseout', function() {
  document.getElementById('hoverLink').style.backgroundColor = '#8face5';
    document.getElementById('home').style.backgroundColor = '#8face5';
      document.getElementById('home').style.padding = '0.65em';
})

// CONTACT LINK
contactLink.addEventListener('mouseover', function() {
  document.getElementById('hoverLink').style.backgroundColor = '#fa8d62';
  document.getElementById('home').style.backgroundColor = '#254c70';
  document.getElementById('home').style.padding = '0.61em';
});

contactLink.addEventListener('mouseout', function() {
  document.getElementById('hoverLink').style.backgroundColor = '#8face5';
    document.getElementById('home').style.backgroundColor = '#8face5';
      document.getElementById('home').style.padding = '0.65em';
})
