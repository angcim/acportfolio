'use strict';
console.log('reading js');

// ******************** MOBILE VARIABLES ********************

// PROJECTS
var projectIcon = document.querySelector('#projectIcon');
var leftArrow = document.querySelector('#leftArrow');
var rightArrow = document.querySelector('#rightArrow');

// ABOUT ME
var aboutIcon = document.querySelector('#portraitIcon');
var leftArrow2 = document.querySelector('#leftArrow2');
var rightArrow2 = document.querySelector('#rightArrow2');

// CONNECT
var connectIcon = document.querySelector('#connectIcon');
var leftArrow3 = document.querySelector('#leftArrow3');
var rightArrow3 = document.querySelector('#rightArrow3');

// CONTACT
var contactIcon = document.querySelector('#contactIcon');
var leftArrow4 = document.querySelector('#leftArrow4');
var rightArrow4 = document.querySelector('#rightArrow4');


// RIGHT ARROWS
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

// LEFT ARROWS
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
