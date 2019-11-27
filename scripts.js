'use strict';
console.log('reading js');

// ******************** MOBILE VARIABLES ********************

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

var brandingRightArrow = document.querySelector('#aboutRightArrow3');
var brandingLeftArrow = document.querySelector('#aboutLeftArrow3');

var portfolioRightArrow = document.querySelector('#aboutRightArrow4');
var portofolioLeftArrow = document.querySelector('#aboutLeftArrow4');


// HOME PAGE CONNECT
var connectIcon = document.querySelector('#connectIcon');
var leftArrow3 = document.querySelector('#leftArrow3');
var rightArrow3 = document.querySelector('#rightArrow3');

// HOME PAGE CONTACT
var contactIcon = document.querySelector('#contactIcon');
var leftArrow4 = document.querySelector('#leftArrow4');
var rightArrow4 = document.querySelector('#rightArrow4');


// HOME PAGE RIGHT ARROWS
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

// ABOUT ME RIGHT ARROWS
workRightArrow.addEventListener('click', function() {
  document.querySelector('#mobileWorkPassion').style.display = 'none';
  document.querySelector('#mobileGetToKnowMe').style.display = 'block';
});

// ABOUT ME LEFT ARROWS
bioLeftArrow.addEventListener('click', function() {
  document.querySelector('#mobileGetToKnowMe').style.display = 'none';
  document.querySelector('#mobileWorkPassion').style.display = 'block';

});

// ABOUT ME
aboutIcon.addEventListener('click', function() {
  document.querySelector('#mobileHomepage').style.display = 'none';
  document.querySelector('#mobileAboutMe').style.display = 'block';
  document.querySelector('body').style.backgroundColor = '#f1bbc9';
});
