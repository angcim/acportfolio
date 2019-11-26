'use strict';
console.log('reading js');

// ******************** MOBILE VARIABLES ********************

// PROJECTS
var projectIcon = document.querySelector('#projectLink');
var leftArrow = document.querySelector('#leftArrow');
var rightArrow = document.querySelector('#rightArrow');

// ABOUT ME
var aboutIcon = document.querySelector('#portraitLink');
var leftArrow2 = document.querySelector('#leftArrow2');
var rightArrow2 = document.querySelector('#rightArrow2');

// CONNECT
var connectIcon = document.querySelector('#connectLink');
var leftArrow3 = document.querySelector('#leftArrow3');
var rightArrow3 = document.querySelector('#rightArrow3');

// CONTACT
var contactIcon = document.querySelector('#contactLink');
var leftArrow4 = document.querySelector('#leftArrow4');
var rightArrow4 = document.querySelector('#rightArrow4');


// RIGHT ARROWS
rightArrow.addEventListener('click', function() {
  document.querySelector('#mobileProjects').style.display = 'none';
  document.querySelector('#mobileAbout').style.display = 'block';
});

rightArrow2.addEventListener('click', function() {
  document.querySelector('#mobileAbout').style.display = 'none';
  document.querySelector('#mobileConnect').style.display = 'block';
});

rightArrow3.addEventListener('click', function() {
  document.querySelector('#mobileConnect').style.display = 'none';
  document.querySelector('#mobileContact').style.display = 'block';
});

rightArrow4.addEventListener('click', function() {
  document.querySelector('#mobileContact').style.display = 'none';
  document.querySelector('#mobileProjects').style.display = 'block';
});

// LEFT ARROWS
leftArrow.addEventListener('click', function() {
  document.querySelector('#mobileProjects').style.display = 'none';
  document.querySelector('#mobileContact').style.display = 'block';
});

leftArrow2.addEventListener('click', function() {
  document.querySelector('#mobileAbout').style.display = 'none';
  document.querySelector('#mobileProjects').style.display = 'block';
});

leftArrow3.addEventListener('click', function() {
  document.querySelector('#mobileConnect').style.display = 'none';
  document.querySelector('#mobileAbout').style.display = 'block';
});

leftArrow4.addEventListener('click', function() {
  document.querySelector('#mobileContact').style.display = 'none';
  document.querySelector('#mobileConnect').style.display = 'block';
});
