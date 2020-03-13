'use strict';
console.log('reading js');

// ****************************** TABLET + DESKTOP > MOBILE VARIABLES ******************************
// ABOUT ME PAGE
var workRightArrowTwo = document.querySelector('#aboutRightArrow');
var workLeftArrowTwo = document.querySelector('#aboutLeftArrow');

var bioRightArrowTwo = document.querySelector('#aboutRightArrow2');
var bioLeftArrowTwo = document.querySelector('#aboutLeftArrow2');

var portfolioRightArrowTwo = document.querySelector('#aboutRightArrow3');
var portofolioLeftArrowTwo = document.querySelector('#aboutLeftArrow3');

// ****************************** DESKTOP VARIABLES ******************************
// NAVIGATION
var homeLink = document.querySelector('#home');
var aboutLink = document.querySelector('#about');
var projectsLink = document.querySelector('#project');
var connectLink = document.querySelector('#connect');
var contactLink = document.querySelector('#contact');
var hoverLink = document.querySelector('#hoverLink');

// ABOUT LINKS
var workAndPassion = document.querySelector('#wnp');
var getToKnowMe = document.querySelector('#gtkm');
var interactivePortfolio = document.querySelector('#ip');

var title = document.querySelector('#aboutTitle');
var img = document.querySelector('#aboutIMG');
var paragraph = document.querySelector('#aboutP');


// ****************************** END OF VARIABLES ******************************

// ****************************** TABLET + DESKTOP >  ******************************
// ********** ABOUT ME RIGHT ARROWS **********
//WORK AND PASSION
workRightArrowTwo.addEventListener('click', function() {
  document.querySelector('#mobileWorkPassion').style.display = 'none';
  document.querySelector('#mobileGetToKnowMe').style.display = 'block';
});

//BRIEF BIOGRAPHY
bioRightArrowTwo.addEventListener('click', function() {
  document.querySelector('#mobileGetToKnowMe').style.display = 'none';
  document.querySelector('#mobileIntPortfolio').style.display = 'block';
});

//INTERACTIVE PORTFOLIO
portfolioRightArrowTwo.addEventListener('click', function() {
  document.querySelector('#mobileIntPortfolio').style.display = 'none';
  document.querySelector('#mobileWorkPassion').style.display = 'block';
});

// ********** ABOUT ME LEFT ARROWS **********
//WORK AND PASSION
workLeftArrowTwo.addEventListener('click', function() {
  document.querySelector('#mobileWorkPassion').style.display = 'none';
  document.querySelector('#mobileIntPortfolio').style.display = 'block';
});

//BRIEF BIOGRAPHY
bioLeftArrowTwo.addEventListener('click', function() {
  document.querySelector('#mobileGetToKnowMe').style.display = 'none';
  document.querySelector('#mobileWorkPassion').style.display = 'block';
});

//INTERACTIVE PORTFOLIO
portofolioLeftArrowTwo.addEventListener('click', function() {
  document.querySelector('#mobileIntPortfolio').style.display = 'none';
  document.querySelector('#mobileGetToKnowMe').style.display = 'block';
});

// ********** DESKTOP HOVER LINKS **********
// ABOUT LINK
homeLink.addEventListener('mouseover', function() {
  document.getElementById('hoverLink').style.backgroundColor = '#8face5';
  document.getElementById('about').style.backgroundColor = '#254c70';
  document.getElementById('about').style.padding = '0.61em';
});

homeLink.addEventListener('mouseout', function() {
  document.getElementById('hoverLink').style.backgroundColor = '#e28fa8';
    document.getElementById('about').style.backgroundColor = '#e28fa8';
      document.getElementById('about').style.padding = '0.65em';
})

// PROJECT LINK
projectsLink.addEventListener('mouseover', function() {
  document.getElementById('hoverLink').style.backgroundColor = '#82bad8';
  document.getElementById('about').style.backgroundColor = '#254c70';
  document.getElementById('abou').style.padding = '0.61em';
});

projectsLink.addEventListener('mouseout', function() {
  document.getElementById('hoverLink').style.backgroundColor = '#e28fa8';
    document.getElementById('about').style.backgroundColor = '#e28fa8';
      document.getElementById('about').style.padding = '0.65em';
})

// CONNECT LINK
connectLink.addEventListener('mouseover', function() {
  document.getElementById('hoverLink').style.backgroundColor = '#4ac6b4';
  document.getElementById('about').style.backgroundColor = '#254c70';
  document.getElementById('about').style.padding = '0.61em';
});

connectLink.addEventListener('mouseout', function() {
  document.getElementById('hoverLink').style.backgroundColor = '#e28fa8';
    document.getElementById('about').style.backgroundColor = '#e28fa8';
      document.getElementById('about').style.padding = '0.65em';
})

// CONTACT LINK
contactLink.addEventListener('mouseover', function() {
  document.getElementById('hoverLink').style.backgroundColor = '#fa8d62';
  document.getElementById('about').style.backgroundColor = '#254c70';
  document.getElementById('about').style.padding = '0.61em';
});

contactLink.addEventListener('mouseout', function() {
  document.getElementById('hoverLink').style.backgroundColor = '#e28fa8';
    document.getElementById('about').style.backgroundColor = '#e28fa8';
      document.getElementById('about').style.padding = '0.65em';
})

// ********** ABOUT PAGE **********
wnp.addEventListener('click', function() {
  document.getElementById('aboutIMG').src = "images/angelikadesigns.png";
  document.getElementById('aboutIMG').height = "268";
  title.innerHTML = 'WORK AND PASSION';
  paragraph.innerHTML = 'Hi, my name is Angelika Cimene. I specialize in a variety of graphic design such as web design, UIUX, layout and print design, and branding. I graduated in University of California, Davis with a bachelor’s in Design and a minor in Professional Writing in 2015.<br> I am currently a Graphic Designer for Spotlight Education but I am available for freelance work of all sorts. Contact me at <a href="mailto:&#097;&#110;&#103;&#099;&#105;&#109;&#046;&#100;&#101;&#115;&#105;&#103;&#110;&#115;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;" class="email"> &#097;&#110;&#103;&#099;&#105;&#109;&#046;&#100;&#101;&#115;&#105;&#103;&#110;&#115;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109; </a>';
  document.getElementById('gtkm').style.backgroundColor = '#d389a4';
  document.getElementById('wnp').style.backgroundColor = '#9b4262';
  document.getElementById('ip').style.backgroundColor = '#d389a4';
});

gtkm.addEventListener('click', function() {
  document.getElementById('aboutIMG').src = "images/portrait.jpg";
  document.getElementById('aboutIMG').height = "400";
  title.innerHTML = 'GET TO KNOW ME';
  paragraph.innerHTML = 'I was born in the Philippines but I came to California when I was 6 years old and have lived in LA for most of my life. After graduating, I moved to Orlando, Fl for a new adventure. <br> My favorite hobbies include watching classic films and binge-watching tv shows. As a science fiction lover, my favorite movies are Back to the Future and Metropolis. I also enjoy photography, editing photos, and hand-lettering. <br> During my spare time, I run an instagram blog that contains all of my weekly adventures such as trying out new foods and going to Disney World. <br> Feel free to follow my instagram, <a href="https://www.instagram.com/happybaabes/" class="email"> @happybaabes </a>, and subscribe to my youtube channel, <a href="https://www.youtube.com/channel/UC1gJEo_Yb6MhR2TlKZih24A" class="email">happybaabes</a>';
  document.getElementById('gtkm').style.backgroundColor = '#9b4262';
  document.getElementById('wnp').style.backgroundColor = '#d389a4';
  document.getElementById('ip').style.backgroundColor = '#d389a4';
});

ip.addEventListener('click', function() {
  document.getElementById('aboutIMG').src = "images/illustrationPortrait.png";
  document.getElementById('aboutIMG').height = "400";
  title.innerHTML = 'INTERACTIVE PORTFOLIO';
  paragraph.innerHTML = 'My Interactive Portfolio is Coming Soon <br> My Interactive Portfolio is a fun mini project that I\'m currently working on. It is a much more engaging and exciting way of getting to know me and looking through my design portfolio.';
  document.getElementById('gtkm').style.backgroundColor = '#d389a4';
  document.getElementById('wnp').style.backgroundColor = '#d389a4';
  document.getElementById('ip').style.backgroundColor = '#9b4262';
});
