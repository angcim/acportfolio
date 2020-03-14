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

// ABOUT LINKS
var all = document.querySelector('#all');
var uiux = document.querySelector('#uiux');
var web = document.querySelector('#web');
var grahic = document.querySelector('#graphic');
var anim = document.querySelector('#anim');


// ****************************** END OF VARIABLES ******************************


// ********** DESKTOP HOVER LINKS **********
// HOME LINK
homeLink.addEventListener('mouseover', function() {
  document.getElementById('hoverLink').style.backgroundColor = '#8face5';
  document.getElementById('project').style.backgroundColor = '#254c70';
  document.getElementById('project').style.padding = '0.61em';
});

homeLink.addEventListener('mouseout', function() {
  document.getElementById('hoverLink').style.backgroundColor = '#5bbcde';
    document.getElementById('project').style.backgroundColor = '#5bbcde';
      document.getElementById('project').style.padding = '0.65em';
})

// ABOUT LINK
aboutLink.addEventListener('mouseover', function() {
  document.getElementById('hoverLink').style.backgroundColor = '#e28fa8';
  document.getElementById('project').style.backgroundColor = '#254c70';
  document.getElementById('project').style.padding = '0.61em';
});

aboutLink.addEventListener('mouseout', function() {
  document.getElementById('hoverLink').style.backgroundColor = '#5bbcde';
    document.getElementById('project').style.backgroundColor = '#5bbcde';
      document.getElementById('project').style.padding = '0.65em';
})


// CONNECT LINK
connectLink.addEventListener('mouseover', function() {
  document.getElementById('hoverLink').style.backgroundColor = '#4ac6b4';
  document.getElementById('project').style.backgroundColor = '#254c70';
  document.getElementById('project').style.padding = '0.61em';
});

connectLink.addEventListener('mouseout', function() {
  document.getElementById('hoverLink').style.backgroundColor = '#5bbcde';
    document.getElementById('project').style.backgroundColor = '#5bbcde';
      document.getElementById('project').style.padding = '0.65em';
})

// CONTACT LINK
contactLink.addEventListener('mouseover', function() {
  document.getElementById('hoverLink').style.backgroundColor = '#fa8d62';
  document.getElementById('project').style.backgroundColor = '#254c70';
  document.getElementById('project').style.padding = '0.61em';
});

contactLink.addEventListener('mouseout', function() {
  document.getElementById('hoverLink').style.backgroundColor = '#5bbcde';
    document.getElementById('project').style.backgroundColor = '#5bbcde';
      document.getElementById('project').style.padding = '0.65em';
})

// ********** PROJECTS PAGE **********
all.addEventListener('click', function() {
  document.getElementById('all').style.backgroundColor = '#45a0bf';
  document.getElementById('uiux').style.backgroundColor = '#73bbdb';
  document.getElementById('web').style.backgroundColor = '#73bbdb';
  document.getElementById('graphic').style.backgroundColor = '#73bbdb';
  document.getElementById('anim').style.backgroundColor = '#73bbdb';

  document.querySelector('#one').style.display = 'grid';
  document.querySelector('#two').style.display = 'grid';
  document.querySelector('#three').style.display = 'grid';
  document.querySelector('#four').style.display = 'grid';
  document.querySelector('#five').style.display = 'grid';
  document.querySelector('#six').style.display = 'grid';
  document.querySelector('#seven').style.display = 'grid';
  document.querySelector('#eight').style.display = 'grid';
  document.querySelector('#nine').style.display = 'grid';
  document.querySelector('#ten').style.display = 'grid';
  document.querySelector('#ten').style.marginTop = '0';
  document.querySelector('#eleven').style.display = 'grid';
  document.querySelector('#twelve').style.display = 'grid';
  document.querySelector('#twelve').style.marginTop = '0';
});

uiux.addEventListener('click', function() {
  document.getElementById('all').style.backgroundColor = '#73bbdb';
  document.getElementById('uiux').style.backgroundColor = '#45a0bf';
  document.getElementById('web').style.backgroundColor = '#73bbdb';
  document.getElementById('graphic').style.backgroundColor = '#73bbdb';
  document.getElementById('anim').style.backgroundColor = '#73bbdb';

  document.querySelector('#one').style.display = 'none';
  document.querySelector('#two').style.display = 'none';
  document.querySelector('#three').style.display = 'grid';
  document.querySelector('#four').style.display = 'none';
  document.querySelector('#five').style.display = 'none';
  document.querySelector('#six').style.display = 'none';
  document.querySelector('#seven').style.display = 'grid';
  document.querySelector('#eight').style.display = 'none';
  document.querySelector('#nine').style.display = 'grid';
  document.querySelector('#ten').style.display = 'none';
  document.querySelector('#eleven').style.display = 'none';
  document.querySelector('#twelve').style.display = 'none';
});

web.addEventListener('click', function() {
  document.getElementById('all').style.backgroundColor = '#73bbdb';
  document.getElementById('uiux').style.backgroundColor = '#73bbdb';
  document.getElementById('web').style.backgroundColor = '#45a0bf';
  document.getElementById('graphic').style.backgroundColor = '#73bbdb';
  document.getElementById('anim').style.backgroundColor = '#73bbdb';

  document.querySelector('#one').style.display = 'grid';
  document.querySelector('#two').style.display = 'none';
  document.querySelector('#three').style.display = 'none';
  document.querySelector('#four').style.display = 'grid';
  document.querySelector('#five').style.display = 'grid';
  document.querySelector('#six').style.display = 'none';
  document.querySelector('#seven').style.display = 'none';
  document.querySelector('#eight').style.display = 'none';
  document.querySelector('#nine').style.display = 'none';
  document.querySelector('#ten').style.display = 'none';
  document.querySelector('#eleven').style.display = 'none';
  document.querySelector('#twelve').style.display = 'none';
});

graphic.addEventListener('click', function() {
  document.getElementById('all').style.backgroundColor = '#73bbdb';
  document.getElementById('uiux').style.backgroundColor = '#73bbdb';
  document.getElementById('web').style.backgroundColor = '#73bbdb';
  document.getElementById('graphic').style.backgroundColor = '#45a0bf';
  document.getElementById('anim').style.backgroundColor = '#73bbdb';

  document.querySelector('#one').style.display = 'none';
  document.querySelector('#two').style.display = 'grid';
  document.querySelector('#three').style.display = 'none';
  document.querySelector('#four').style.display = 'none';
  document.querySelector('#five').style.display = 'none';
  document.querySelector('#six').style.display = 'grid';
  document.querySelector('#seven').style.display = 'none';
  document.querySelector('#eight').style.display = 'grid';
  document.querySelector('#nine').style.display = 'none';
  document.querySelector('#ten').style.display = 'grid';
  document.querySelector('#ten').style.marginTop = '40%';
  document.querySelector('#eleven').style.display = 'none';
  document.querySelector('#twelve').style.display = 'grid';
  document.querySelector('#twelve').style.marginTop = '40%';

});

anim.addEventListener('click', function() {
  document.getElementById('all').style.backgroundColor = '#73bbdb';
  document.getElementById('uiux').style.backgroundColor = '#73bbdb';
  document.getElementById('web').style.backgroundColor = '#73bbdb';
  document.getElementById('graphic').style.backgroundColor = '#73bbdb';
  document.getElementById('anim').style.backgroundColor = '#45a0bf';

  document.querySelector('#one').style.display = 'none';
  document.querySelector('#two').style.display = 'none';
  document.querySelector('#three').style.display = 'none';
  document.querySelector('#four').style.display = 'none';
  document.querySelector('#five').style.display = 'none';
  document.querySelector('#six').style.display = 'none';
  document.querySelector('#seven').style.display = 'none';
  document.querySelector('#eight').style.display = 'none';
  document.querySelector('#nine').style.display = 'none';
  document.querySelector('#ten').style.display = 'none';
  document.querySelector('#eleven').style.display = 'grid';
  document.querySelector('#twelve').style.display = 'none';
});
