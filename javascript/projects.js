'use strict';
console.log('reading js');

// ****************************** MOBILE WORK VARIABLES ******************************
// PROJECTS
var mobileVECC = document.querySelector('#mobile-vecc');
var mobileWebPage = document.querySelector('#mobile-webpage');;
var mobileCCRG = document.querySelector('#mobile-ccrg');
var mobileWVED = document.querySelector('#mobile-wved')
var mobileCritica = document.querySelector('#mobile-critica');
var mobileCNH = document.querySelector('#mobile-cnh');
var mobileSignage = document.querySelector('#mobile-signage');
var mobileNEGweb = document.querySelector('#mobile-negweb');
var mobileMIXD = document.querySelector('#mobile-mixd');
var mobileHealthy = document.querySelector('#mobile-healthybud');
var mobilePoster = document.querySelector('#mobile-poster');
var mobileAnim = document.querySelector('#mobile-animation');
var mobileBook = document.querySelector('#mobile-book');

//IMAGES
var mobileTitle = document.querySelector('#work-title');
var mobileCat = document.querySelector('#work-category');

//TEXT
var mobileChallenge = document.querySelector('#mobileChallenge');
var mobileChallengeH4 = document.querySelector('#mobileChallenge-h4');
var mobileChallengeP = document.querySelector('#mobileChallengeP');
var mobileTools = document.querySelector('#mobileTools');
var mobileToolsH4 = document.querySelector('#mobileTools-h4');
var mobileToolsP = document.querySelector('#mobileToolsP');
var mobileSolution = document.querySelector('#mobileSolution');
var mobileSolutionH4 = document.querySelector('#mobileSolution-h4');
var mobileSolutionP1 = document.querySelector('#mobileSolutionP1');
var mobileSolutionP2 = document.querySelector('#mobileSolutionP2');
var mobileSolutionP3 = document.querySelector('#mobileSolutionP3');
var mobileLink = document.querySelector('#mobileLink');
var mobileLinkH4 = document.querySelector('#mobileLink-h4');
var mobileLinkA = document.querySelector('#mobileLinkA');
var mobileLinkP = document.querySelector('#mobileLinkP');

//BACK BUTTON
var back = document.querySelector('#back');

// ****************************** TABLET VARIABLES ******************************
// PROJECTS
var tabletVECC = document.querySelector('.tablet-vecc');
var tabletWebPage = document.querySelector('#tablet-webpage');;
var tabletCCRG = document.querySelector('#tablet-ccrg');
var tabletWVED = document.querySelector('#tablet-wved')
var tabletCritica = document.querySelector('#tablet-critica');
var tabletCNH = document.querySelector('#tablet-cnh');
var tabletSignage = document.querySelector('#tablet-signage');
var tabletNEGweb = document.querySelector('#tablet-negweb');
var tabletMIXD = document.querySelector('#tablet-mixd');
var tabletHealthy = document.querySelector('#tablet-healthybud');
var tabletPoster = document.querySelector('#tablet-poster');
var tabletAnim = document.querySelector('#tablet-animation');
var tabletBook = document.querySelector('#tablet-book');

//IMAGES
var tabletTitle = document.querySelector('#work-title-tablet');
var tabletCat = document.querySelector('#work-category-tablet');

//TEXT
var tabletChallenge = document.querySelector('#tabletChallenge');
var tabletChallengeH4 = document.querySelector('#tabletChallenge-h4');
var tabletChallengeP = document.querySelector('#tabletChallengeP');
var tabletTools = document.querySelector('#tabletTools');
var tabletToolsH4 = document.querySelector('#tabletTools-h4');
var tabletToolsP = document.querySelector('#tabletToolsP');
var tabletSolution = document.querySelector('#tabletSolution');
var tabletSolutionH4 = document.querySelector('#tabletSolution-h4');
var tabletSolutionP1 = document.querySelector('#tabletSolutionP1');
var tabletSolutionP2 = document.querySelector('#tabletSolutionP2');
var tabletSolutionP3 = document.querySelector('#tabletSolutionP3');
var tabletLink = document.querySelector('#tabletLink');
var tabletLinkH4 = document.querySelector('#tabletLink-h4');
var tabletLinkA = document.querySelector('#tabletLinkA');
var tabletLinkP = document.querySelector('#tabletLinkP');

//BACK BUTTON
var tabletBack = document.querySelector('#back-tablet');


// ****************************** DESKTOP VARIABLES ******************************
// PROJECTS
var desktopVECC = document.querySelector('.desktop-vecc');
var desktopWebPage = document.querySelector('#one');;
var desktopCCRG = document.querySelector('#two');
var desktopWVED = document.querySelector('#three')
var desktopCritica = document.querySelector('#four');
var desktopCNH = document.querySelector('#five');
var desktopSignage = document.querySelector('#six');
var desktopNEGweb = document.querySelector('#seven');
var desktopMIXD = document.querySelector('#eight');
var desktopHealthy = document.querySelector('#nine');
var desktopPoster = document.querySelector('#ten');
var desktopAnim = document.querySelector('#eleven');
var desktopBook = document.querySelector('#twelve');

//IMAGES
var desktopTitle = document.querySelector('#work-title-desktop');
var desktopCat = document.querySelector('#work-category-desktop');

//TEXT
var desktopChallenge = document.querySelector('#desktopChallenge');
var desktopChallengeH4 = document.querySelector('#desktopChallenge-h4');
var desktopChallengeP = document.querySelector('#desktopChallengeP');
var desktopTools = document.querySelector('#desktopTools');
var desktopToolsH4 = document.querySelector('#desktopTools-h4');
var desktopToolsP = document.querySelector('#desktopToolsP');
var desktopSolution = document.querySelector('#desktopSolution');
var desktopSolutionH4 = document.querySelector('#desktopSolution-h4');
var desktopSolutionP1 = document.querySelector('#desktopSolutionP1');
var desktopSolutionP2 = document.querySelector('#desktopSolutionP2');
var desktopSolutionP3 = document.querySelector('#desktopSolutionP3');
var desktopLink = document.querySelector('#desktopLink');
var desktopLinkH4 = document.querySelector('#desktopLink-h4');
var desktopLinkA = document.querySelector('#desktopLinkA');
var desktopLinkP = document.querySelector('#desktopLinkP');

//BACK BUTTON
var desktopBack = document.querySelector('#back-desktop');

// NAVIGATION
var homeLink = document.querySelector('#home');
var aboutLink = document.querySelector('#about');
var projectsLink = document.querySelector('#project');
var connectLink = document.querySelector('#connect');
var contactLink = document.querySelector('#contact');
var hoverLink = document.querySelector('#hoverLink');

// PROJECT LINKS
var all = document.querySelector('#all');
var uiux = document.querySelector('#uiux');
var web = document.querySelector('#web');
var grahic = document.querySelector('#graphic');
var anim = document.querySelector('#anim');



// MEDIA QUERIES
// var t = window.matchMedia("(max-width: 999px)")
// tablet(t)
// t.addListener(tablet)


// ****************************** END OF VARIABLES ******************************
// ********** MOBILE PROJECTS **********
//BACK BUTTON
back.addEventListener('click', function() {
  document.getElementById('mobileRecentWork').style.display = 'block';
  document.getElementById('mobileOtherWork').style.display = 'block';
  document.getElementById('workPage').style.display = 'none';
});

// EV EXPLORER
mobileVECC.addEventListener('click', function() {
  document.getElementById('workPage').style.display = 'block';
  document.getElementById('mobileOtherWork').style.display = 'none';
  document.getElementById('mobileRecentWork').style.display = 'none';

  mobileTitle.innerHTML = 'EV EXPLORER';
  mobileCat.innerHTML = 'USER INTERFACE / USER EXPERIENCE';

  document.getElementById('colorBlock').style.backgroundColor = '#a2d0ed';
  document.getElementById('colorBlock').style.padding = '10em';
  document.getElementById('colorBlock').style.paddingBottom = '30em';

  document.getElementById('work-img').src = "images/projects/evexplorer.png";
  document.getElementById('work-img').alt = "DESIGN AND THE PLAY INSTINCT";
  document.getElementById('work-img').height = "799";
  document.getElementById('work-img').style.marginTop = "-38em";

  document.getElementById('mobileChallenge').style.backgroundColor = '#83cdd5';
  document.getElementById('mobileChallenge-h4').style.color = '#ffffff';
  document.getElementById('mobileChallengeP').style.color = '#ffffff';
  mobileChallengeP.innerHTML = 'Redesign the EV Explorer website.';

  document.getElementById('mobileTools-h4').style.color = '#ef8b6e';
  mobileToolsP.innerHTML = 'Adobe InDesign';

  document.getElementById('mobileSolution').style.backgroundColor = '#f8d053';
  document.getElementById('mobileSolution-h4').style.color = '#ffffff';
  document.getElementById('mobileSolutionP1').style.color = '#ffffff';
  document.getElementById('mobileSolutionP2').style.color = '#ffffff';
  document.getElementById('mobileSolutionP3').style.color = '#ffffff';
  mobileSolutionP1.innerHTML = 'For my internship at cEnergi, I was primarily a UX researcher and graphic designer. The biggest project I was involved in was redesigning EV Explorer. EV Explorer is a vehicle energy cost calculator that helps users compare fuel costs and savings between different types of vehicles. The goal of EV Explorer is to promote electric vehicles by allowing users to see its benefits in comparison to gas only vehicles.';

    mobileSolutionP2.innerHTML = 'The first part of the project included researching 12 different VECCs. Each week, I had to look through and explore all the different functions of the calculators and input the data through a spreadsheet. With months of research, I had to decide and make a case on which calculators should be used for usability testing. Throughout summer and half of fall, we did usability tests such as surveys with students from UC Davis and different car shows from California. We asked them to explore each vcc and answer survey questions in the end about how easy and useful each information that was presented.';

      mobileSolutionP3.innerHTML = 'After my internship ended and the user testing was completed, I moved to part-time and became the UI designer for EV Explorer. Collectively, we gathered all of the data between different users and started creating the new design for EV Explorer. The new EV Explorer has a more playful and inviting look. It uses light simple colors and icons.  In the new mockup, the landing page has an illustration of an electric vehicle with a charging station. It also includes a small paragraph of the benefits of EVs and a “How it Works” in the bottom. Once the users select “Get Started”, there will be a popup of required inputs the user has to answer to gather enough information for the results. In the outputs page includes a graph that compares at least two different cars. On the right side presents the environmental benefits of the electric vehicle in terms of emissions, air quality, and petroleum. The environmental benefits includes an animated scene related to the topic. In the bottom of the page is all of the customizable settings. The customizeable settings helps users put in more detailed information to get the most accurate data. It includes the user’s driving behavior, types of vehicles, fuel costs, and finance costs.';

  document.getElementById('mobileLink-h4').style.color = '#b0d757';
  mobileLinkA.setAttribute('href', 'https://drive.google.com/open?id=1P9Zzf-5mowXXw1jZ_AyyqRIhjVnSk1Dz');
  mobileLinkP.innerHTML = 'EV Explorer Mockup Designs PDF'
});

//SPOTLIGHT WEB PAGE
mobileWebPage.addEventListener('click', function() {
  document.getElementById('workPage').style.display = 'block';
  document.getElementById('mobileOtherWork').style.display = 'none';
  document.getElementById('mobileRecentWork').style.display = 'none';

  mobileTitle.innerHTML = 'SPOTLIGHT WEB PAGE <br><em> "VIDEO CAASPP AND ELPAC REPORTS"</em>';
  mobileCat.innerHTML = 'WEB DESIGN';

  document.getElementById('colorBlock').style.backgroundColor = '#447bb2';
  document.getElementById('colorBlock').style.padding = '5.5em';

  document.getElementById('work-img').src = "images/projects/webpage.png";
  document.getElementById('work-img').alt = "Spotlight Web Page";
  document.getElementById('work-img').height = "235";
  document.getElementById('work-img').style.marginTop = "-9em";

  document.getElementById('mobileChallenge').style.backgroundColor = '#255c7f';
  document.getElementById('mobileChallenge-h4').style.color = '#ffffff';
  document.getElementById('mobileChallengeP').style.color = '#ffffff';
  mobileChallengeP.innerHTML = 'Create a Web Page called "Video CAASPP and ELPAC Reports" for Spotlight Education\'s website. The web page must have the exact similar look and feel as the rest of the website.';

  document.getElementById('mobileTools').style.backgroundColor = '#ffffff';
  document.getElementById('mobileTools-h4').style.color = '#255c7f';
  document.getElementById('mobileToolsP').style.color = '#000000';
  mobileToolsP.innerHTML = 'Adobe Illustrator<br>Adobe Photoshop<br>Squarespace<br>Languages: HTML and CSS';

  document.getElementById('mobileSolution').style.backgroundColor = '#ef9029';
  document.getElementById('mobileSolution-h4').style.color = '#ffffff';
  document.getElementById('mobileSolutionP1').style.color = '#ffffff';
  document.getElementById('mobileSolutionP2').style.color = '#ffffff';
  document.getElementById('mobileSolutionP3').style.color = '#ffffff';
  mobileSolutionP1.innerHTML = 'As a small project for Spotlight Education, I had to create a new web page for the website. The web page is called “Video CAASPP and ELPAC Reports”. The new web page had to look similar to another web page that was already in the website. I was given a list of guidelines on what to put on the website such as having two call of actions and finding a stock image of a parent watching a video with a child. ';

  mobileSolutionP2.innerHTML = 'The first step of this project was to study the website and create a mockup on Illustrator before implementing it. I created a mockup on Illustrator first because it will be easier to make changes early on before its implemented on the website. I studied the styles used on the website such as the color, typefaces, and images used to help create a consist web page. After finding an image for the web page, I edited the photo through photoshop. I changed the color balance and saturation to blue and used content aware fill to stretch the image. After finishing the mockup and getting it approved, I implemented it on Squarespace, which is where the website was created.';

    mobileSolutionP3.innerHTML = '';

  document.getElementById('mobileLink-h4').style.color = '#ef9029';
  mobileLinkA.setAttribute('href', 'https://www.spotlight-education.com/video-caasp-elpac-reports');
  mobileLinkP.innerHTML = 'Spotlight Education Video CAASP and ELPAC Reports';
});

// CCRG INFOGRAPHIC REPORT
mobileCCRG.addEventListener('click', function() {
  document.getElementById('workPage').style.display = 'block';
  document.getElementById('mobileOtherWork').style.display = 'none';
  document.getElementById('mobileRecentWork').style.display = 'none';

  mobileTitle.innerHTML = 'COLLEGE CAREER AND READINESS GUIDE';
  mobileCat.innerHTML = 'INFOGRAPHIC REPORT';

  document.getElementById('colorBlock').style.backgroundColor = '#65b7ce';
  document.getElementById('colorBlock').style.padding = '10em';
  document.getElementById('colorBlock').style.paddingBottom = '20em';

  document.getElementById('work-img').src = "images/projects/ccrg.png";
  document.getElementById('work-img').alt = "CCRG Infographic Report";
  document.getElementById('work-img').height = "638";
  document.getElementById('work-img').style.marginTop = "-28.5em";

  document.getElementById('mobileChallenge').style.backgroundColor = '#65b7ce';
  document.getElementById('mobileChallenge-h4').style.color = '#ffffff';
  document.getElementById('mobileChallengeP').style.color = '#ffffff';
  mobileChallengeP.innerHTML = 'Create an infographic report for CCRG. The report should include an outline of a student with a grad cap and a brain in the center. Around the student will be surrounded by thought bubbles with text and images. Brainstorm and think of an illustration that would best fit inside the brain for the report. After, create a save a date for that infographic report.';

  document.getElementById('mobileTools').style.backgroundColor = '#ffffff';
  document.getElementById('mobileTools-h4').style.color = '#99b8d8';
  document.getElementById('mobileToolsP').style.color = '#000000';
  mobileToolsP.innerHTML = 'Adobe Illustrator<br>Atom Text Editor<br>Eclipse';

  document.getElementById('mobileSolution').style.backgroundColor = '#274169';
  document.getElementById('mobileSolution-h4').style.color = '#ffffff';
  document.getElementById('mobileSolutionP1').style.color = '#ffffff';
  document.getElementById('mobileSolutionP2').style.color = '#ffffff';
  document.getElementById('mobileSolutionP3').style.color = '#ffffff';
  mobileSolutionP1.innerHTML = 'For Spotlight Education, I had to create an infographic report called “College and Career Readiness Guide”. This page is the front page of the CCRG reports and acts as as an illustrated table of contents for the students and parents. The page includes up to seven bubbles, but this mockup only shows five pages. After creating the report, I had make a “Save the Date” that would then be sent through mailchimp. For this design, the client wanted it to have the image of the student with the brain and grad cap. Since the two pieces of work are related, I made sure I used the same color scheme as the infographic report for consistency.';

    mobileSolutionP2.innerHTML = 'The main requirements of the report includes a student with a grad cap and a brain in the middle of the page. Around the student includes thought bubbles that represents a page of each report. The order of the pages goes from the bottom left all the up, and then to the bottom right page. Each thought bubble has the page number, title of the page, a small icon that represents the page, and brief text that directs the user to that page. The colors used for the infographic report are different shades of blue and white because it’s calm and easy on the eyes for students and parents. Inside the brain contains puzzle pieces of different subjects from school to represent.';

      mobileSolutionP3.innerHTML = 'The infographic report was made in Adobe Illustrator, but then was later implemented through Eclipse, which is an IDE. I used Eclipse to create a BIRT template of the report. For the BIRT template, I hard coded the text and images, and used CSS to style the text. The BIRT templates would be then given to our team to create params that would allow mass production of the product.';

  document.getElementById('mobileLink-h4').style.color = '#65b7ce';
  mobileLinkA.setAttribute('href', 'https://drive.google.com/open?id=1FZ-x49gnL7Oakhs8ziCH-eiFA78wfm6X');
  mobileLinkP.innerHTML = 'View PDF'
});

// WEST VILLAGE ENERGY DASHBOARD
mobileWVED.addEventListener('click', function() {
  document.getElementById('workPage').style.display = 'block';
  document.getElementById('mobileOtherWork').style.display = 'none';
  document.getElementById('mobileRecentWork').style.display = 'none';

  mobileTitle.innerHTML = 'WEST VILLAGE ENERGY DASHBOARD';
  mobileCat.innerHTML = 'USER INTERFACE / USER EXPERIENCE';

  document.getElementById('colorBlock').style.backgroundColor = '#edd6c3';
  document.getElementById('colorBlock').style.padding = '5.5em';

  document.getElementById('work-img').src = "images/projects/wved.png";
  document.getElementById('work-img').alt = "West Village Energy Dashboard";
  document.getElementById('work-img').height = "236";
  document.getElementById('work-img').style.marginTop = "-9em";

  document.getElementById('mobileChallenge').style.backgroundColor = '#f1b03d';
  document.getElementById('mobileChallenge-h4').style.color = '#ffffff';
  document.getElementById('mobileChallengeP').style.color = '#ffffff';
  mobileChallengeP.innerHTML = 'Redesign West Village\'s energy dashboard. The dashboard must contain all of the elements from the previous design with a replacement of the zero net graph for a calendar. <br> Also redesign the splash page of the dashboard to have a mobile interface.';

  document.getElementById('mobileTools').style.backgroundColor = '#ffffff';
  document.getElementById('mobileTools-h4').style.color = '#edc59a';
  document.getElementById('mobileToolsP').style.color = '#000000';
  mobileToolsP.innerHTML = 'Adobe Illustrator';

  document.getElementById('mobileSolution').style.backgroundColor = '#f6e9d9';
  document.getElementById('mobileSolution-h4').style.color = '#f1b040';
  document.getElementById('mobileSolutionP1').style.color = '#999999';
  document.getElementById('mobileSolutionP2').style.color = '#999999';
  document.getElementById('mobileSolutionP3').style.color = '#999999';
  mobileSolutionP1.innerHTML = 'West Village Energy Dashboard is an interface that allows users about the energy use in the buildings each week. There are four buildings West Village that the energy dashboard focuses on, which are 215 Sage, 1590 Tilia, 1605 Tilia, and 1715 Tilia. The goal of the dashboard it so educate its occupants about the different types of energy use, how to reduce it, and reach zero net energy. I revised illustrations, made from previous designers, to give the splash page a mobile design. It was then later implemented by a computer science student in the website.';

    mobileSolutionP2.innerHTML = 'The overall design of the dashboard includes three sections: Weekly leaderboard, energy usage, and power demand. The weekly leaderboard illustrates a horse race with each horse representing a building in West Village. The purpose of the horse race is to show which building is “winning” indicating which building is saving the most energy. At the end of each week, a horse will be given a winning trophy and will show how many trophies they have won. The second part of the design informs the users of the energy use and power demand through data.';

      mobileSolutionP3.innerHTML = 'The energy use consists of a calendar that would have a red or green color to show if there was a negative or positive energy net usage on each day of the month. The power demand has a line graph that shows the amount of energy used each hour of the day, and an equation with clickable on and off buttons of the different types of power usage. The bottom right includes a toggle to lets users switch the views from monthly or day view.';

  document.getElementById('mobileLink-h4').style.color = '#f1b040';
  mobileLinkA.setAttribute('href', 'http://wved.ucdavis.edu/#!/');
  mobileLinkP.innerHTML = 'West Village Energy Dashboard'
});

// CRITICA PORTFOLIO REVIEW
mobileCritica.addEventListener('click', function() {
  document.getElementById('workPage').style.display = 'block';
  document.getElementById('mobileOtherWork').style.display = 'none';
  document.getElementById('mobileRecentWork').style.display = 'none';

  mobileTitle.innerHTML = 'CRITICA <br> PORTFOLIO REVIEW';
  mobileCat.innerHTML = 'WEBSITE DESIGN';

  document.getElementById('colorBlock').style.backgroundColor = '#b5cbea';
  document.getElementById('colorBlock').style.padding = '6.25em';

  document.getElementById('work-img').src = "images/projects/critica.png";
  document.getElementById('work-img').alt = "Critica Portfolio Review";
  document.getElementById('work-img').height = "259";
  document.getElementById('work-img').style.marginTop = "-10em";

  document.getElementById('mobileChallenge').style.backgroundColor = '#28477c';
  document.getElementById('mobileChallenge-h4').style.color = '#90a9d6';
  document.getElementById('mobileChallengeP').style.color = '#ffffff';
  mobileChallengeP.innerHTML = 'Create a browser-based interactive exploration on your topic for DIS 2019 or C&C, hand-coded with the front-end stack and your choice (option) of a js libraries, such as p5.js, and css libraries';

  document.getElementById('mobileTools').style.backgroundColor = '#ffffff';
  document.getElementById('mobileTools-h4').style.color = '#c24273';
  document.getElementById('mobileToolsP').style.color = '#000000';
  mobileToolsP.innerHTML = 'Adobe Illustrator <br>Atom Text Editor<br>Languages: HTML, CSS, Javascript';

  document.getElementById('mobileSolution').style.backgroundColor = '#c24273';
  document.getElementById('mobileSolution-h4').style.color = '#ffffff';
  document.getElementById('mobileSolutionP1').style.color = '#ffffff';
  document.getElementById('mobileSolutionP2').style.color = '#ffffff';
  document.getElementById('mobileSolutionP3').style.color = '#ffffff';
  mobileSolutionP1.innerHTML = 'For this project, the topic I chose was education for graphic designers called Critica. Critica is an online community for all designers to help improve their online portfolio. The goal of the website is to give more opportunities to designers who do not have the proper resources to constantly improve their work. For instance, there are many designers out there that are not in any college programs or don’t know any other designers/professors that can help them properly critique their work. ';

    mobileSolutionP2.innerHTML = 'Critica is unique from known portfolio websites like Behance and Dribbble because it does not focus on showcasing work but it focuses on improving each other’s work. The design focuses on a playful and inviting environment for designers with functionalities that allows users to upload their work and have designers add comments on how it can improve. The website contains specific guidelines to help users give constructive criticism rather than saying something is “good” or “bad”.';

      mobileSolutionP3.innerHTML = '<strong>How it works:</strong> This is a working prototype with limited functions. It contains one html file and uses javascript to give it the behavior or multiple pages. It includes a community page with three pieces of work that the user can click on. It will then direct users to the page of the work selected, and the users can drag around the image and write comments. If the user is new, they can select “Get Started” and it will take them to the community page with pop up that has instructions on how to critique a piece of work. The next page is an upload pop up page. This is where users can put their work in the website by uploading the file, project name, designer’s name, and description. It will later then be sent for approval by moderators. (For the prototype, users can upload files and input text, but it will not be processed). The last page is the guidelines, which informs users on rules and tips.';

  document.getElementById('mobileLink-h4').style.color = '#28477c';
  mobileLinkA.setAttribute('href', 'https://angcim.github.io/des157-g/process/development/final/index.html');
  mobileLinkP.innerHTML = 'Critica Portfolio Review'
});

// CYCLE NEWS HOUR
mobileCNH.addEventListener('click', function() {
  document.getElementById('workPage').style.display = 'block';
  document.getElementById('mobileOtherWork').style.display = 'none';
  document.getElementById('mobileRecentWork').style.display = 'none';

  mobileTitle.innerHTML = 'CYCLE NEWS HOUR';
  mobileCat.innerHTML = 'WEBSITE DESIGN';

  document.getElementById('colorBlock').style.backgroundColor = '#c6e5ef';
  document.getElementById('colorBlock').style.padding = '10em';
  document.getElementById('colorBlock').style.paddingBottom = '20em';

  document.getElementById('work-img').src = "images/projects/cnh.png";
  document.getElementById('work-img').alt = "Cycle News Hours Website";
  document.getElementById('work-img').height = "563";
  document.getElementById('work-img').style.marginTop = "-28em";

  document.getElementById('mobileChallenge').style.backgroundColor = '#ae3026';
  document.getElementById('mobileChallenge-h4').style.color = '#ffffff';
  document.getElementById('mobileChallengeP').style.color = '#ffffff';
  mobileChallengeP.innerHTML = 'Redesign the Cycle News Hour Website to have the look and feel similar to news websites.';

  document.getElementById('mobileTools').style.backgroundColor = '#ffffff';
  document.getElementById('mobileTools-h4').style.color = '#4c8a76';
  document.getElementById('mobileToolsP').style.color = '#000000';
  mobileToolsP.innerHTML = 'Adobe Illustrator <br>Atom Text Editor<br>Languages: HTML, CSS, Javascript';

  document.getElementById('mobileSolution').style.backgroundColor = '#dfa43e';
  document.getElementById('mobileSolution-h4').style.color = '#ffffff';
  document.getElementById('mobileSolutionP1').style.color = '#ffffff';
  document.getElementById('mobileSolutionP2').style.color = '#ffffff';
  document.getElementById('mobileSolutionP3').style.color = '#ffffff';
  mobileSolutionP1.innerHTML = 'During senior year, I was a part of a UC Davis student organization called Cycle News Hour. Cycle News Hour is a radio show broadcasting that is fully run by UC Davis students. As part of the web development team, my job was to redesign their current website.';

  mobileSolutionP2.innerHTML = 'My job in the web development team was to create and design the website through html, css, and javascript. In order to create the website, I had meetings with the head of the design department to talk about the look and feel of the website. With lots of research and looking through hundreds of news websites, I created drafts of high fidelity wireframes through Illustrator of each page of the website.';

  mobileSolutionP3.innerHTML = 'After many iterations, I started implementing the wireframe in in HTML, CSS, and JS. As a designer, my first priority is mobile responsive. For this website, it is a clickable wireframe of the Cycle News Hour website. It does not have actual content (except for the video page), but contains placeholders for images and text. The website contains a homepage, interview page, video page, report page, and an article page.';

  document.getElementById('mobileLink-h4').style.color = '#ae3026';
  mobileLinkA.setAttribute('href', 'https://angcim.github.io/CycleNewsHour-Web/');
  mobileLinkP.innerHTML = 'Cycle News Hour Website'
});

// INDULDGE IN ABUNDANCE
mobileSignage.addEventListener('click', function() {
  document.getElementById('workPage').style.display = 'block';
  document.getElementById('mobileOtherWork').style.display = 'none';
  document.getElementById('mobileRecentWork').style.display = 'none';

  mobileTitle.innerHTML = 'CALIFORNIA HALL SIGNAGE SYSTEM<br>"INDULDGE IN ABUNDANCE"';
  mobileCat.innerHTML = 'ENVIRONMENTAL GRAPHIC DESIGN';

  document.getElementById('colorBlock').style.backgroundColor = '#a6c852';
  document.getElementById('colorBlock').style.padding = '10em';
  document.getElementById('colorBlock').style.paddingBottom = '22em';

  document.getElementById('work-img').src = "images/projects/signage.png";
  document.getElementById('work-img').alt = "California Hall Signage System";
  document.getElementById('work-img').height = "641";
  document.getElementById('work-img').style.marginTop = "-30em";

  document.getElementById('mobileChallenge').style.backgroundColor = '#e5b446';
  document.getElementById('mobileChallenge-h4').style.color = '#b3794c';
  document.getElementById('mobileChallengeP').style.color = '#ffffff';
  mobileChallengeP.innerHTML = 'Create a signage system for California Hall. The signage system must include a theme that relates to the word "California".';

  document.getElementById('mobileTools').style.backgroundColor = '#ffffff';
  document.getElementById('mobileTools-h4').style.color = '#c23a2c';
  document.getElementById('mobileToolsP').style.color = '#000000';
  mobileToolsP.innerHTML = 'Adobe Illustrator <br>Adobe Photoshop';

  document.getElementById('mobileSolution').style.backgroundColor = '#f7f7db';
  document.getElementById('mobileSolution-h4').style.color = '#a6c852';
  document.getElementById('mobileSolutionP1').style.color = '#a6c852';
  document.getElementById('mobileSolutionP2').style.color = '#a6c852';
  document.getElementById('mobileSolutionP3').style.color = '#a6c852';
  mobileSolutionP1.innerHTML = 'California Hall is a newly built in 2019, and is the largest lecture hall throughout campus. It can seat up to 500 students. Since it is a new building, many students do not know how to properly navigate throughout the area, giving us the goal to create an effective signage system. Our theme for our signage system is based on the abundance of fruits and vegetables in California. UC Davis is known for its agriculture, therefore California is a great canvas to tell its story.';

  mobileSolutionP2.innerHTML = 'The first part of the project included an extensive amount of research. We had to go to the building and study the location and how to naturally navigate around the building. We studied the materials and lighingused in the building such as it contains fake bamboo and glass for the walls. We also did research on the typical users that will enter California Hall.';

  mobileSolutionP3.innerHTML = 'The signs are inspired by wooden creates with fruits and vegetables inside. The bright colors and illustrations of the signs will brighten up the white plain walls inside the building. The signs are decorative and informative at the same time. There are nine different types of signs created for the system.<br>To learn more about the signage system, feel free to look through the process manual below.';

  document.getElementById('mobileLink-h4').style.color = '#e5b446';
  mobileLinkA.setAttribute('href', 'https://drive.google.com/open?id=1g5W-aE7nfhjVGhqp-we5J9NXHbNk5nZP');
  mobileLinkP.innerHTML = 'View Process Manual'
});


// NEW ERA GARDEN
mobileNEGweb.addEventListener('click', function() {
  document.getElementById('workPage').style.display = 'block';
  document.getElementById('mobileOtherWork').style.display = 'none';
  document.getElementById('mobileRecentWork').style.display = 'none';

  mobileTitle.innerHTML = 'NEW ERA GARDEN WEBSITE DESIGN';
  mobileCat.innerHTML = 'USER INTERFACE / USER EXPERIENCE';

  document.getElementById('colorBlock').style.backgroundColor = '#f9ac5b';
  document.getElementById('colorBlock').style.padding = '10em';
  document.getElementById('colorBlock').style.paddingBottom = '18em';

  document.getElementById('work-img').src = "images/projects/negweb.png";
  document.getElementById('work-img').alt = "New Era Garden Website";
  document.getElementById('work-img').height = "570";
  document.getElementById('work-img').style.marginTop = "-26em";

  document.getElementById('mobileChallenge').style.backgroundColor = '#89cf3c';
  document.getElementById('mobileChallenge-h4').style.color = '#ffffff';
  document.getElementById('mobileChallengeP').style.color = '#ffffff';
  mobileChallengeP.innerHTML = 'Create a clickable prototype of a website for New Era Garden to help expand their community and share their resources.';

  document.getElementById('mobileTools').style.backgroundColor = '#ffffff';
  document.getElementById('mobileTools-h4').style.color = '#fb952e';
  document.getElementById('mobileToolsP').style.color = '#000000';
  mobileToolsP.innerHTML = 'Adobe Illustrator <br>InVision App';

  document.getElementById('mobileSolution').style.backgroundColor = '#ef1026';
  document.getElementById('mobileSolution-h4').style.color = '#fb952e';
  document.getElementById('mobileSolutionP1').style.color = '#ffffff';
  document.getElementById('mobileSolutionP2').style.color = '#ffffff';
  document.getElementById('mobileSolutionP3').style.color = '#ffffff';
  mobileSolutionP1.innerHTML = 'New Era Garden is a community garden located in the Sacramento Area. They provides empty plots to plant in for members. For this project, we received a real client that provided us background information, prices, and requirements for the website, and more. This project contained an extensive amount of research and user testing. As a group project, we all had individual tasks that we depended each other on. Part of my job was to create a clickable prototype of the website and test it on real life users with different interests. We did user testing throughout the community and also did some testing in UC Davis with students, professors, and staff.';

  mobileSolutionP2.innerHTML = 'The prototype itself is filled with colorful images of flowers and have colors that are inspired by their logo. The key features of the website include a login account, which is exclusive to members. With an account, members are allowed to log in their hours, pay their yearly dues, and post on the blog. There is an events page for socials and a blog page for articles. The website is accessible for anyone such as getting information about how to join, events, blogs, and contact.';

  mobileSolutionP3.innerHTML = '<strong>How the prototype works:</strong> There is no coding involved in this prototype. We used awebsite called InVision to create a function and clickable prototype. This website acts as actual website. (Due to over a hundred images, the prototype itself is a little slow until all the screens have loaded up, so please be patient with it)<br>* All stock images used for the website are creditted to its rightful owners.';

  document.getElementById('mobileLink-h4').style.color = '#89cf3c';
  mobileLinkA.setAttribute('href', 'https://projects.invisionapp.com/share/4PPK3B2MJFN#/screens');
  mobileLinkP.innerHTML = 'New Era Garden Website Prototype'
});

// MIX'D TRAIL MIX
mobileMIXD.addEventListener('click', function() {
  document.getElementById('workPage').style.display = 'block';
  document.getElementById('mobileOtherWork').style.display = 'none';
  document.getElementById('mobileRecentWork').style.display = 'none';

  mobileTitle.innerHTML = 'GO NUTS ON MIX\'D TRAIL MIX';
  mobileCat.innerHTML = 'BRANDING DESIGN';

  document.getElementById('colorBlock').style.backgroundColor = '#ebf9fc';
  document.getElementById('colorBlock').style.padding = '10em';
  document.getElementById('colorBlock').style.paddingBottom = '39em';

  document.getElementById('work-img').src = "images/projects/mixd.png";
  document.getElementById('work-img').alt = "MIX\'D Trail Mix";
  document.getElementById('work-img').height = "902";
  document.getElementById('work-img').style.marginTop = "-47em";

  document.getElementById('mobileChallenge').style.backgroundColor = '#aad186';
  document.getElementById('mobileChallenge-h4').style.color = '#73b550';
  document.getElementById('mobileChallengeP').style.color = '#ffffff';
  mobileChallengeP.innerHTML = 'Choose any dried goods from the grocery store and create a whole new brand out of that product. The constraint is that the packaging must incorporate biomimicry and cater to the eldery.';

  document.getElementById('mobileTools-h4').style.color = '#82c6b5';
  mobileToolsP.innerHTML = 'Adobe Illustrator<br>Adobe Photoshop<br>Adobe InDesign';

  document.getElementById('mobileSolution').style.backgroundColor = '#be8451';
  document.getElementById('mobileSolution-h4').style.color = '#522f18';
  document.getElementById('mobileSolutionP1').style.color = '#522f18';
  document.getElementById('mobileSolutionP2').style.color = '#522f18';
  document.getElementById('mobileSolutionP3').style.color = '#522f18';
  mobileSolutionP1.innerHTML = 'MIX\'D is an organic trail mix company that advocates for a healthy diet and lifestyle by focusing on portion control and having a variety of mixes that target specific health benefits for every individual. I wanted my brand to be playful and friendly to illustrate that eating healthy can be fun and exciting.';

  mobileSolutionP2.innerHTML = 'For the graphics, I focused on a friendly and exciting logos. The "M" in MIX\'D, represents a mountain with a trail of nuts. The colors scheme includes colors of nature such as green, blue, and brown. To add an even more playful touch, the cashew represents as an apostrophe in MIX\'D. The logo contains colors of nature, but for the business model, the main colors used are teal. This includes envelopes and letterheads. The main typefaces used for the brand is Quicksand and Death Star. Death Star is for the logo while Quicksand is for text and body copy. To learn more about the graphics, feel free to look at my graphic standard below.';

  mobileSolutionP3.innerHTML = 'As a brand, MIX\'D is also environmentally cautious and promotes waste reduction. The packaging design was inspired by bulks of protein powder. Buying in bulk reduces wastes because it provides a small amount of material for a large amount of quantity. To help with portion control, inside the packaging, there is a paper scooper to help with the portions rather than the plastic scoopers inside protein powders. To learn more about the packaging, feel free to look through my process manual below.';

  document.getElementById('mobileLink-h4').style.color = '#be8451';
  mobileLinkA.setAttribute('href', 'https://drive.google.com/open?id=1fdLAAR9aD-Zhzznu4moCIlFUeqiCPl96');
  mobileLinkP.innerHTML = 'Process Manual and Graphic Standard'
});

// HEALTHY BUDDY
mobileHealthy.addEventListener('click', function() {
  document.getElementById('workPage').style.display = 'block';
  document.getElementById('mobileOtherWork').style.display = 'none';
  document.getElementById('mobileRecentWork').style.display = 'none';

  mobileTitle.innerHTML = 'HEALTHY BUDDY';
  mobileCat.innerHTML = 'USER INTERFACE / USER EXPERIENCE';

  document.getElementById('colorBlock').style.backgroundColor = '#b0dfed';
  document.getElementById('colorBlock').style.padding = '10em';
  document.getElementById('colorBlock').style.paddingBottom = '20em';

  document.getElementById('work-img').src = "images/projects/healthybud.png";
  document.getElementById('work-img').alt = "Healthy Buddy";
  document.getElementById('work-img').height = "610";
  document.getElementById('work-img').style.marginTop = "-28em";

  document.getElementById('mobileChallenge').style.backgroundColor = '#51b7da';
  document.getElementById('mobileChallenge-h4').style.color = '#ffffff';
  document.getElementById('mobileChallengeP').style.color = '#ffffff';
  mobileChallengeP.innerHTML = 'Design and create a mobile app or website promotes equity. After, create a working prototype using InVision App.';

  document.getElementById('mobileTools-h4').style.color = '#fdd30f';
  mobileToolsP.innerHTML = 'Adobe Illustrator<br>InVision App';

  document.getElementById('mobileSolution').style.backgroundColor = '#f05143';
  document.getElementById('mobileSolution-h4').style.color = '#ffffff';
  document.getElementById('mobileSolutionP1').style.color = '#ffffff';
  document.getElementById('mobileSolutionP2').style.color = '#ffffff';
  document.getElementById('mobileSolutionP3').style.color = '#ffffff';
  mobileSolutionP1.innerHTML = 'For this project, the theme I chose is healthcare. There are many users that do not have any health insurance or benefits. Healthy Buddy is a free app for people who do not or can not afford health insurance. The main goal of Healthy Buddy is to keep its users as healthy as possible. This app targets users who do not have access to health insurance, especially recent graduates and people who work at home.';

  mobileSolutionP2.innerHTML = 'The first key features in this app is a daily health feature. This is the area where users can track their calories, their exercise, heart rate and more. The second key feature is data entry. Users are able to put and organize all their medical records. If a user is missing a shot, the app will notify that user. The third key feature is a high tech self-diagnosis with AI. This is for simple self-diagnosis such as rashes, allergies, and all kinds of symptoms. If the diagnosis is severe, the app will locate the user to the nearest and cheapest clinic. The last and forth feature is the emergency fund account. This is where users can save up money just in case they need to go see a doctor. It shows the cost to see how much that user needs to save.';

  mobileSolutionP3.innerHTML = '<strong>How the prototype works:</strong> This prototype only have two working tasks: the Daily Health and the Emergency Fund. The Daily Health is a linear step-by-step prototype and must complete each task to move on to the other. In The Emergency Fund, The user can either put their savings first or find different types of doctor appointments.';

  document.getElementById('mobileLink-h4').style.color = '#49c091';
  mobileLinkA.setAttribute('href', 'https://projects.invisionapp.com/share/STPEOMJA6P5#/screens');
  mobileLinkP.innerHTML = 'Healthy Buddy Prototype'
});

// ALFRED HITCHCOCK POSTER
mobilePoster.addEventListener('click', function() {
  document.getElementById('workPage').style.display = 'block';
  document.getElementById('mobileOtherWork').style.display = 'none';
  document.getElementById('mobileRecentWork').style.display = 'none';

  mobileTitle.innerHTML = 'ALFRED HITCHCOCK<br>"MASTER OF SUSPENSE" POSTER';
  mobileCat.innerHTML = 'POSTER DESIGN';

  document.getElementById('colorBlock').style.backgroundColor = '#f5ca4c';
  document.getElementById('colorBlock').style.padding = '10em';
  document.getElementById('colorBlock').style.paddingBottom = '13em';

  document.getElementById('work-img').src = "images/projects/afposter.png";
  document.getElementById('work-img').alt = "Alfred Hitchcock \"Master of Suspense\" Poster";
  document.getElementById('work-img').height = "490";
  document.getElementById('work-img').style.marginTop = "-21em";

  document.getElementById('mobileChallenge').style.backgroundColor = '#040404';
  document.getElementById('mobileChallenge-h4').style.color = '#f5ca4c';
  document.getElementById('mobileChallengeP').style.color = '#ffffff';
  mobileChallengeP.innerHTML = 'Create a poster of a well-known and significant artist. The artist must be already dead and the poster has to show why he/she was successful during their lifetime. It must present their life’s work throughout the whole poster.';

  document.getElementById('mobileTools-h4').style.color = '#d52e21';
  mobileToolsP.innerHTML = 'Adobe Photoshop';

  document.getElementById('mobileSolution').style.backgroundColor = '#f5ca4c';
  document.getElementById('mobileSolution-h4').style.color = '#040404';
  document.getElementById('mobileSolutionP1').style.color = '#040404';
  document.getElementById('mobileSolutionP2').style.color = '#040404';
  document.getElementById('mobileSolutionP3').style.color = '#040404';
  mobileSolutionP1.innerHTML = 'For this project, I created the poster using Adobe Photoshop. This project was best suited on Photoshop because it dealt with a lot of editing of photos. Since all the film images are old and scratchy, I edited its sharpness and reduced the noise to give a look of higher quality photos. This photo contains approximately 20 separate images that is combined into one poster. I chose Alfred Hitchcock because he is one of the most well known directors throughout history. He revolutionized the film industry by creating suspenseful films.';

  mobileSolutionP2.innerHTML = 'My font choices reflect on his movie posters. I chose the font that closely resembled the original posters that was created to give it more of a visual effect. I chose this particular Alfred Hitchcock quote rbecause it’s a quote that sums up all his movies, which is full of suspense. The choice of adding the filmstrip indicates that he is a director. The photos I chose are iconic scenes from his most famous movies such as Psycho, Rear Window, and Birds. The color choice I chose is a bright red to represent the blood in all his suspenseful films.';

  mobileSolutionP3.innerHTML = '*All images used for the poster are creditted to its rightful owners.';

  document.getElementById('mobileLink-h4').style.color = '#d52e21';
  mobileLinkA.setAttribute('href', 'https://drive.google.com/open?id=1Tgga_BJB5dtc4FCvUFCwMmRsQLXjRjtJ');
  mobileLinkP.innerHTML = 'Alfred Hitchcock Poster PDF'
});

// ALFRED HITCHCOCK ANIMATION
mobileAnim.addEventListener('click', function() {
  document.getElementById('workPage').style.display = 'block';
  document.getElementById('mobileOtherWork').style.display = 'none';
  document.getElementById('mobileRecentWork').style.display = 'none';

  mobileTitle.innerHTML = 'ALFRED HITCHCOCK<br>"MASTER OF SUSPENSE"';
  mobileCat.innerHTML = 'ANIMATION';

  document.getElementById('colorBlock').style.backgroundColor = '#ee2124';
  document.getElementById('colorBlock').style.padding = '10em';
  document.getElementById('colorBlock').style.paddingBottom = '20em';

  document.getElementById('work-img').src = "images/projects/af-anim.png";
  document.getElementById('work-img').alt = "Alfred Hitchcock \"Master of Suspense\" Animation";
  document.getElementById('work-img').height = "561";
  document.getElementById('work-img').style.marginTop = "-28em";

  document.getElementById('mobileChallenge').style.backgroundColor = '#040404';
  document.getElementById('mobileChallenge-h4').style.color = '#ffffff';
  document.getElementById('mobileChallengeP').style.color = '#ffffff';
  mobileChallengeP.innerHTML = 'Create 30-45 second animation that displays the biography of a dead artist. You must combine text and graphics to achieve this goal.The constraint is that you are only allowed to use 20 words to convey your message.';

  document.getElementById('mobileTools-h4').style.color = '#040607';
  mobileToolsP.innerHTML = 'AfterEffects';

  document.getElementById('mobileSolution').style.backgroundColor = '#ee2124';
  document.getElementById('mobileSolution-h4').style.color = '#ffffff';
  document.getElementById('mobileSolutionP1').style.color = '#ffffff';
  document.getElementById('mobileSolutionP2').style.color = '#ffffff';
  document.getElementById('mobileSolutionP3').style.color = '#ffffff';
  mobileSolutionP1.innerHTML = 'As a huge film buff, I already had a bunch of directors in mind to create an animation of. The first three people in my list were Charlie Chaplin, Alfred Hitchcock, and Stanley Kubrick. After writing a sheet or brainstorm and coming up with a 20 word biolography for each character, I decided to dedicate this animation on Alfred Hitchcock. One of the reasons why I chose him is that I already created a biography poster of him, so why not add this one to my collection.';

  mobileSolutionP2.innerHTML = 'For the assignment, I created two moodboards and style frames for the project. I wanted to show the very essence of the suspense in his films. I used a bold dark red as my spot color because it represents blood and murder. I created scenes from his most famous films with the use of typography. The typography I chose for this assignment was Futura Bold. I used Futura Bold because I wanted to express how striking and thrilling his films are. For the typography, I personified them as the victims in his films such as for Psycho, when the letters get cut in half while it takes a shower. I inputted the beginning of the quote and then all the famous cut scenes and ended it with the rest of the quote. The reason why I did this was to add the extra anticipation the audience gets when they watch his films.';

  mobileSolutionP3.innerHTML = '';

  document.getElementById('mobileLink-h4').style.color = '#ee2124';
  mobileLinkA.setAttribute('href', 'https://www.youtube.com/watch?v=xebVaJlDWCc&feature=emb_title');
  mobileLinkP.innerHTML = 'Alfred Hitchcock Biography Animation'
});

// DESIGN AND PLAY INSTINCT BOOK DESIGN
mobileBook.addEventListener('click', function() {
  document.getElementById('workPage').style.display = 'block';
  document.getElementById('mobileOtherWork').style.display = 'none';
  document.getElementById('mobileRecentWork').style.display = 'none';

  mobileTitle.innerHTML = 'DESIGN AND THE PLAY INSTINCT';
  mobileCat.innerHTML = 'BOOK AND LAYOUT DESIGN';

  document.getElementById('colorBlock').style.backgroundColor = '#b7e0df';
  document.getElementById('colorBlock').style.padding = '10em';
  document.getElementById('colorBlock').style.paddingBottom = '30em';

  document.getElementById('work-img').src = "images/projects/book.png";
  document.getElementById('work-img').alt = "DESIGN AND THE PLAY INSTINCT";
  document.getElementById('work-img').height = "776";
  document.getElementById('work-img').style.marginTop = "-38em";

  document.getElementById('mobileChallenge').style.backgroundColor = '#44afaa';
  document.getElementById('mobileChallenge-h4').style.color = '#ffffff';
  document.getElementById('mobileChallengeP').style.color = '#ffffff';
  mobileChallengeP.innerHTML = 'Create a book design of Paul Rand’s book, “Design and the Play Instinct”. You must choose the size of your book but it can not exceed 9x9 inches. You must include all of the text (you may not alter or remove any) and all of the images provided. You may choose from these fonts: Futura, Gill Sans, Rockwell, Helvetica, Univers. You have one restraint of choosing only one spot color, but may use black, white, and gray.';

  document.getElementById('mobileTools-h4').style.color = '#44afaa';
  mobileToolsP.innerHTML = 'Adobe InDesign<br>Adobe Photoshop<br>Adobe Illustrator';

  document.getElementById('mobileSolution').style.backgroundColor = '#71bfba';
  document.getElementById('mobileSolution-h4').style.color = '#ffffff';
  document.getElementById('mobileSolutionP1').style.color = '#ffffff';
  document.getElementById('mobileSolutionP2').style.color = '#ffffff';
  document.getElementById('mobileSolutionP3').style.color = '#ffffff';
  mobileSolutionP1.innerHTML = 'To start off, I wanted this layout design to be fun and engaging. Redesigning an art book, I strongly felt it was appropriate to fill the book with lots of fun layouts along with a combination of information and knowledge. I chose a book size of 6 inches by seven inches because I wanted it to be a portable book that anyone can take wherever such as the "The Little Red Book".';

  mobileSolutionP2.innerHTML = 'The typefaces I chose were Futura and Gill Sans. I used Futura for the titles and headings because I wanted this book to be bold and engaging. I wanted the words to pop out with the images. I chose Gill Sans Light for body text to balance the boldness of Futura. Gill Sans Light is an elegant san-serif font that is easy to read. I wanted it to be readable and enjoyable at the same time. As a constraint, I was able to choose only one color on top with white. I selected the color teal because it is a color that pops and mixes well with white.';

  mobileSolutionP3.innerHTML = 'By adding chapter pages to section information, this book contains over 70 pages. For instance, in the section “Crosswords”, the content provides a picture of the cross word and the text that Paul Rand’s book provides. This gives my book a great structural pattern that many books contain, so the audience doesn’t get confused as they go through the content.';

  document.getElementById('mobileLink-h4').style.color = '#71bfba';
  mobileLinkA.setAttribute('href', 'https://drive.google.com/open?id=1j9ESY82nH4KYPZQUJXUiNaFdanuMMNSc');
  mobileLinkP.innerHTML = 'Design and the Play Instinct Book Design'
});






// ****************************** TABLET PROJECTS ****************************************
//BACK BUTTON
tabletBack.addEventListener('click', function() {
  document.getElementById('featured').style.display = 'flex';
  document.getElementById('allProjects').style.display = 'block';
  document.getElementById('workPage-tablet').style.display = 'none';
});

// EV EXPLORER
tabletVECC.addEventListener('click', function() {
  document.getElementById('workPage-tablet').style.display = 'block';
  document.getElementById('allProjects').style.display = 'none';
  document.getElementById('featured').style.display = 'none';

  tabletTitle.innerHTML = 'EV EXPLORER';
  tabletCat.innerHTML = 'USER INTERFACE / USER EXPERIENCE';

  document.getElementById('colorBlock-tablet').style.backgroundColor = '#a2d0ed';
  document.getElementById('colorBlock-tablet').style.padding = '10em';
  document.getElementById('colorBlock-tablet').style.paddingBottom = '75em';

  document.getElementById('work-img-tablet').src = "images/projects/evexplorer.png";
  document.getElementById('work-img-tablet').alt = "DESIGN AND THE PLAY INSTINCT";
  document.getElementById('work-img-tablet').height = "799";
  document.getElementById('work-img-tablet').style.marginTop = "-83em";

  document.getElementById('tabletChallenge').style.backgroundColor = '#83cdd5';
  document.getElementById('tabletChallenge-h4').style.color = '#ffffff';
  document.getElementById('tabletChallengeP').style.color = '#ffffff';
  tabletChallengeP.innerHTML = 'Research all the different VECCs tools and their features help redesign the EV Explorer website.';

  document.getElementById('tabletTools-h4').style.color = '#ef8b6e';
  tabletToolsP.innerHTML = 'Adobe Illustrator<br>AfterEffects';

  document.getElementById('tabletSolution').style.backgroundColor = '#f8d053';
  document.getElementById('tabletSolution-h4').style.color = '#ffffff';
  document.getElementById('tabletSolutionP1').style.color = '#ffffff';
  document.getElementById('tabletSolutionP2').style.color = '#ffffff';
  document.getElementById('tabletSolutionP3').style.color = '#ffffff';
  tabletSolutionP1.innerHTML = 'For my internship at cEnergi, I was primarily a UX researcher and graphic designer. The biggest project I was involved in was redesigning EV Explorer. EV Explorer is a vehicle energy cost calculator that helps users compare fuel costs and savings between different types of vehicles. The goal of EV Explorer is to promote electric vehicles by allowing users to see its benefits in comparison to gas only vehicles.';

    tabletSolutionP2.innerHTML = 'The first part of the project included researching 12 different VECCs. Each week, I had to look through and explore all the different functions of the calculators and input the data through a spreadsheet. With months of research, I had to decide and make a case on which calculators should be used for usability testing. Throughout summer and half of fall, we did usability tests such as surveys with students from UC Davis and different car shows from California. We asked them to explore each vcc and answer survey questions in the end about how easy and useful each information that was presented.';

      tabletSolutionP3.innerHTML = 'After my internship ended and the user testing was completed, I moved to part-time and became the UI designer for EV Explorer. Collectively, we gathered all of the data between different users and started creating the new design for EV Explorer. The new EV Explorer has a more playful and inviting look. It uses light simple colors and icons. In the new mockup, the landing page has an illustration of an electric vehicle with a charging station. It also includes a small paragraph of the benefits of EVs and a “How it Works” in the bottom. Once the users select “Get Started”, there will be a popup of required inputs the user has to answer to gather enough information for the results. In the outputs page includes a graph that compares at least two different cars. On the right side presents the environmental benefits of the electric vehicle in terms of emissions, air quality, and petroleum. The environmental benefits includes an animated scene related to the topic. In the bottom of the page is all of the customizable settings. The customizeable settings helps users put in more detailed information to get the most accurate data. It includes the user’s driving behavior, types of vehicles, fuel costs, and finance costs.';

  document.getElementById('tabletLink-h4').style.color = '#b0d757';
  tabletLinkA.setAttribute('href', 'https://drive.google.com/open?id=1P9Zzf-5mowXXw1jZ_AyyqRIhjVnSk1Dz');
  tabletLinkP.innerHTML = 'EV Explorer Mockup Designs PDF'
});

//SPOTLIGHT WEB PAGE
tabletWebPage.addEventListener('click', function() {
  document.getElementById('workPage-tablet').style.display = 'block';
  document.getElementById('allProjects').style.display = 'none';
  document.getElementById('featured').style.display = 'none';

  tabletTitle.innerHTML = 'SPOTLIGHT WEB PAGE <br><em> "VIDEO CAASPP AND ELPAC REPORTS"</em>';
  tabletCat.innerHTML = 'WEB DESIGN';

  document.getElementById('colorBlock-tablet').style.backgroundColor = '#447bb2';
  document.getElementById('colorBlock-tablet').style.padding = '10em';

  document.getElementById('work-img-tablet').src = "images/projects/webpage.png";
  document.getElementById('work-img-tablet').alt = "Spotlight Web Page";
  document.getElementById('work-img-tablet').height = "235";
  document.getElementById('work-img-tablet').style.marginTop = "-18em";

  document.getElementById('tabletChallenge').style.backgroundColor = '#255c7f';
  document.getElementById('tabletChallenge-h4').style.color = '#ffffff';
  document.getElementById('tabletChallengeP').style.color = '#ffffff';
  tabletChallengeP.innerHTML = 'Create a Web Page called "Video CAASPP and ELPAC Reports" for Spotlight Education\'s website. The web page must have the exact similar look and feel as the rest of the website. Find a family friendly image of a parent watching a video with a child.';

  document.getElementById('tabletTools').style.backgroundColor = '#ffffff';
  document.getElementById('tabletTools-h4').style.color = '#255c7f';
  document.getElementById('tabletToolsP').style.color = '#000000';
  tabletToolsP.innerHTML = 'Adobe Illustrator<br>Adobe Photoshop<br>Squarespace<br>Languages: HTML and CSS';

  document.getElementById('tabletSolution').style.backgroundColor = '#ef9029';
  document.getElementById('tabletSolution-h4').style.color = '#ffffff';
  document.getElementById('tabletSolutionP1').style.color = '#ffffff';
  document.getElementById('tabletSolutionP2').style.color = '#ffffff';
  document.getElementById('tabletSolutionP3').style.color = '#ffffff';
  tabletSolutionP1.innerHTML = 'As a small project for Spotlight Education, I had to create a new web page for the website. The web page is called “Video CAASPP and ELPAC Reports”. The new web page had to look similar to another web page that was already in the website. I was given a list of guidelines on what to put on the website such as having two call of actions and finding a stock image of a parent watching a video with a child. ';

  tabletSolutionP2.innerHTML = 'The first step of this project was to study the website and create a mockup on Illustrator before implementing it. I created a mockup on Illustrator first because it will be easier to make changes early on before its implemented on the website. I studied the styles used on the website such as the color, typefaces, and images used to help create a consist web page. After finding an image for the web page, I edited the photo through photoshop. I changed the color balance and saturation to blue and used content aware fill to stretch the image. After finishing the mockup and getting it approved, I implemented it on Squarespace, which is where the website was created.';

    tabletSolutionP3.innerHTML = '';

  document.getElementById('tabletLink-h4').style.color = '#ef9029';
  tabletLinkA.setAttribute('href', 'https://www.spotlight-education.com/video-caasp-elpac-reports');
  tabletLinkP.innerHTML = 'Spotlight Education Video CAASP and ELPAC Reports';
});

// CCRG INFOGRAPHIC REPORT
tabletCCRG.addEventListener('click', function() {
  document.getElementById('workPage-tablet').style.display = 'block';
  document.getElementById('allProjects').style.display = 'none';
  document.getElementById('featured').style.display = 'none';

  tabletTitle.innerHTML = 'COLLEGE CAREER AND READINESS GUIDE';
  tabletCat.innerHTML = 'INFOGRAPHIC REPORT';

  document.getElementById('colorBlock-tablet').style.backgroundColor = '#65b7ce';
  document.getElementById('colorBlock-tablet').style.padding = '10em';
  document.getElementById('colorBlock-tablet').style.paddingBottom = '55em';

  document.getElementById('work-img-tablet').src = "images/projects/ccrg.png";
  document.getElementById('work-img-tablet').alt = "CCRG Infographic Report";
  document.getElementById('work-img-tablet').height = "638";
  document.getElementById('work-img-tablet').style.marginTop = "-62.5em";

  document.getElementById('tabletChallenge').style.backgroundColor = '#65b7ce';
  document.getElementById('tabletChallenge-h4').style.color = '#ffffff';
  document.getElementById('tabletChallengeP').style.color = '#ffffff';
  tabletChallengeP.innerHTML = 'Create an infographic report for CCRG. The report should include an outline of a student with a grad cap and a brain in the center. Around the student will be surrounded by thought bubbles with text and images. Brainstorm and think of an illustration that would best fit inside the brain for the report. After, create a save a date for that infographic report.';

  document.getElementById('tabletTools').style.backgroundColor = '#ffffff';
  document.getElementById('tabletTools-h4').style.color = '#99b8d8';
  document.getElementById('tabletToolsP').style.color = '#000000';
  tabletToolsP.innerHTML = 'Adobe Illustrator<br>Atom Text Editor<br>Eclipse';

  document.getElementById('tabletSolution').style.backgroundColor = '#274169';
  document.getElementById('tabletSolution-h4').style.color = '#ffffff';
  document.getElementById('tabletSolutionP1').style.color = '#ffffff';
  document.getElementById('tabletSolutionP2').style.color = '#ffffff';
  document.getElementById('tabletSolutionP3').style.color = '#ffffff';
  tabletSolutionP1.innerHTML = 'For Spotlight Education, I had to create an infographic report called “College and Career Readiness Guide”. This page is the front page of the CCRG reports and acts as as an illustrated table of contents for the students and parents. The page includes up to seven bubbles, but this mockup only shows five pages. After creating the report, I had make a “Save the Date” that would then be sent through mailchimp. For this design, the client wanted it to have the image of the student with the brain and grad cap. Since the two pieces of work are related, I made sure I used the same color scheme as the infographic report for consistency.';

    tabletSolutionP2.innerHTML = 'The main requirements of the report includes a student with a grad cap and a brain in the middle of the page. Around the student includes thought bubbles that represents a page of each report. The order of the pages goes from the bottom left all the up, and then to the bottom right page. Each thought bubble has the page number, title of the page, a small icon that represents the page, and brief text that directs the user to that page. The colors used for the infographic report are different shades of blue and white because it’s calm and easy on the eyes for students and parents. Inside the brain contains puzzle pieces of different subjects from school to represent.';

      tabletSolutionP3.innerHTML = 'The infographic report was made in Adobe Illustrator, but then was later implemented through Eclipse, which is an IDE. I used Eclipse to create a BIRT template of the report. For the BIRT template, I hard coded the text and images, and used CSS to style the text. The BIRT templates would be then given to our team to create params that would allow mass production of the product.';

  document.getElementById('tabletLink-h4').style.color = '#65b7ce';
  tabletLinkA.setAttribute('href', 'https://drive.google.com/open?id=1FZ-x49gnL7Oakhs8ziCH-eiFA78wfm6X');
  tabletLinkP.innerHTML = 'View PDF'
});

// WEST VILLAGE ENERGY DASHBOARD
tabletWVED.addEventListener('click', function() {
  document.getElementById('workPage-tablet').style.display = 'block';
  document.getElementById('allProjects').style.display = 'none';
  document.getElementById('featured').style.display = 'none';

  tabletTitle.innerHTML = 'WEST VILLAGE ENERGY DASHBOARD';
  tabletCat.innerHTML = 'USER INTERFACE / USER EXPERIENCE';

  document.getElementById('colorBlock-tablet').style.backgroundColor = '#edd6c3';
  document.getElementById('colorBlock-tablet').style.padding = '10em';

  document.getElementById('work-img-tablet').src = "images/projects/wved.png";
  document.getElementById('work-img-tablet').alt = "West Village Energy Dashboard";
  document.getElementById('work-img-tablet').height = "236";
  document.getElementById('work-img-tablet').style.marginTop = "-18em";

  document.getElementById('tabletChallenge').style.backgroundColor = '#f1b03d';
  document.getElementById('tabletChallenge-h4').style.color = '#ffffff';
  document.getElementById('tabletChallengeP').style.color = '#ffffff';
  tabletChallengeP.innerHTML = 'Redesign West Village\'s energy dashboard. The dashboard must contain all of the elements from the previous design with a replacement of the zero net graph for a calendar. <br> Also redesign the splash page of the dashboard to have a mobile interface.';

  document.getElementById('tabletTools').style.backgroundColor = '#ffffff';
  document.getElementById('tabletTools-h4').style.color = '#edc59a';
  document.getElementById('tabletToolsP').style.color = '#000000';
  tabletToolsP.innerHTML = 'Adobe Illustrator';

  document.getElementById('tabletSolution').style.backgroundColor = '#f6e9d9';
  document.getElementById('tabletSolution-h4').style.color = '#f1b040';
  document.getElementById('tabletSolutionP1').style.color = '#999999';
  document.getElementById('tabletSolutionP2').style.color = '#999999';
  document.getElementById('tabletSolutionP3').style.color = '#999999';
tabletSolutionP1.innerHTML = 'West Village Energy Dashboard is an interface that allows users about the energy use in the buildings each week. There are four buildings West Village that the energy dashboard focuses on, which are 215 Sage, 1590 Tilia, 1605 Tilia, and 1715 Tilia. The goal of the dashboard it so educate its occupants about the different types of energy use, how to reduce it, and reach zero net energy. I revised illustrations, made from previous designers, to give the splash page a mobile design. It was then later implemented by a computer science student in the website.';

tabletSolutionP2.innerHTML = 'The overall design of the dashboard includes three sections: Weekly leaderboard, energy usage, and power demand. The weekly leaderboard illustrates a horse race with each horse representing a building in West Village. The purpose of the horse race is to show which building is “winning” indicating which building is saving the most energy. At the end of each week, a horse will be given a winning trophy and will show how many trophies they have won. The second part of the design informs the users of the energy use and power demand through data.';

tabletSolutionP3.innerHTML = 'The energy use consists of a calendar that would have a red or green color to show if there was a negative or positive energy net usage on each day of the month. The power demand has a line graph that shows the amount of energy used each hour of the day, and an equation with clickable on and off buttons of the different types of power usage. The bottom right includes a toggle to lets users switch the views from monthly or day view.';

  document.getElementById('tabletLink-h4').style.color = '#f1b040';
  tabletLinkA.setAttribute('href', 'http://wved.ucdavis.edu/#!/');
  tabletLinkP.innerHTML = 'West Village Energy Dashboard'
});

// CRITICA PORTFOLIO REVIEW
tabletCritica.addEventListener('click', function() {
  document.getElementById('workPage-tablet').style.display = 'block';
  document.getElementById('allProjects').style.display = 'none';
  document.getElementById('featured').style.display = 'none';

  tabletTitle.innerHTML = 'CRITICA <br> PORTFOLIO REVIEW';
  tabletCat.innerHTML = 'WEBSITE DESIGN';

  document.getElementById('colorBlock-tablet').style.backgroundColor = '#b5cbea';
  document.getElementById('colorBlock-tablet').style.padding = '12em';

  document.getElementById('work-img-tablet').src = "images/projects/critica.png";
  document.getElementById('work-img-tablet').alt = "Critica Portfolio Review";
  document.getElementById('work-img-tablet').height = "259";
  document.getElementById('work-img-tablet').style.marginTop = "-22em";

  document.getElementById('tabletChallenge').style.backgroundColor = '#28477c';
  document.getElementById('tabletChallenge-h4').style.color = '#90a9d6';
  document.getElementById('tabletChallengeP').style.color = '#ffffff';
  tabletChallengeP.innerHTML = 'Create a browser-based interactive exploration on your topic for DIS 2019 or C&C, hand-coded with the front-end stack and your choice (option) of a js libraries, such as p5.js, and css libraries';

  document.getElementById('tabletTools').style.backgroundColor = '#ffffff';
  document.getElementById('tabletTools-h4').style.color = '#c24273';
  document.getElementById('tabletToolsP').style.color = '#000000';
  tabletToolsP.innerHTML = 'Adobe Illustrator <br>Atom Text Editor<br>Languages: HTML, CSS, Javascript';

  document.getElementById('tabletSolution').style.backgroundColor = '#c24273';
  document.getElementById('tabletSolution-h4').style.color = '#ffffff';
  document.getElementById('tabletSolutionP1').style.color = '#ffffff';
  document.getElementById('tabletSolutionP2').style.color = '#ffffff';
  document.getElementById('tabletSolutionP3').style.color = '#ffffff';
tabletSolutionP1.innerHTML = 'For this project, the topic I chose was education for graphic designers called Critica. Critica is an online community for all designers to help improve their online portfolio. The goal of the website is to give more opportunities to designers who do not have the proper resources to constantly improve their work. For instance, there are many designers out there that are not in any college programs or don’t know any other designers/professors that can help them properly critique their work. ';

    tabletSolutionP2.innerHTML = 'Critica is unique from known portfolio websites like Behance and Dribbble because it does not focus on showcasing work but it focuses on improving each other’s work. The design focuses on a playful and inviting environment for designers with functionalities that allows users to upload their work and have designers add comments on how it can improve. The website contains specific guidelines to help users give constructive criticism rather than saying something is “good” or “bad”.';

      tabletSolutionP3.innerHTML = '<strong>How it works:</strong> This is a working prototype with limited functions. It contains one html file and uses javascript to give it the behavior or multiple pages. It includes a community page with three pieces of work that the user can click on. It will then direct users to the page of the work selected, and the users can drag around the image and write comments. If the user is new, they can select “Get Started” and it will take them to the community page with pop up that has instructions on how to critique a piece of work. The next page is an upload pop up page. This is where users can put their work in the website by uploading the file, project name, designer’s name, and description. It will later then be sent for approval by moderators. (For the prototype, users can upload files and input text, but it will not be processed). The last page is the guidelines, which informs users on rules and tips.';

  document.getElementById('tabletLink-h4').style.color = '#28477c';
  tabletLinkA.setAttribute('href', 'https://angcim.github.io/des157-g/process/development/final/index.html');
  tabletLinkP.innerHTML = 'Critica Portfolio Review'
});

// CYCLE NEWS HOUR
tabletCNH.addEventListener('click', function() {
  document.getElementById('workPage-tablet').style.display = 'block';
  document.getElementById('allProjects').style.display = 'none';
  document.getElementById('featured').style.display = 'none';

  tabletTitle.innerHTML = 'CYCLE NEWS HOUR';
  tabletCat.innerHTML = 'WEBSITE DESIGN';

  document.getElementById('colorBlock-tablet').style.backgroundColor = '#c6e5ef';
  document.getElementById('colorBlock-tablet').style.padding = '10em';
  document.getElementById('colorBlock-tablet').style.paddingBottom = '50em';

  document.getElementById('work-img-tablet').src = "images/projects/cnh.png";
  document.getElementById('work-img-tablet').alt = "Cycle News Hours Website";
  document.getElementById('work-img-tablet').height = "563";
  document.getElementById('work-img-tablet').style.marginTop = "-57em";

  document.getElementById('tabletChallenge').style.backgroundColor = '#ae3026';
  document.getElementById('tabletChallenge-h4').style.color = '#ffffff';
  document.getElementById('tabletChallengeP').style.color = '#ffffff';
  tabletChallengeP.innerHTML = 'Redesign the Cycle News Hour Website to have the look and feel similar to news websites.';

  document.getElementById('tabletTools').style.backgroundColor = '#ffffff';
  document.getElementById('tabletTools-h4').style.color = '#4c8a76';
  document.getElementById('tabletToolsP').style.color = '#000000';
  tabletToolsP.innerHTML = 'Adobe Illustrator <br>Atom Text Editor<br>Languages: HTML, CSS, Javascript';

  document.getElementById('tabletSolution').style.backgroundColor = '#dfa43e';
  document.getElementById('tabletSolution-h4').style.color = '#ffffff';
  document.getElementById('tabletSolutionP1').style.color = '#ffffff';
  document.getElementById('tabletSolutionP2').style.color = '#ffffff';
  document.getElementById('tabletSolutionP3').style.color = '#ffffff';
  tabletSolutionP1.innerHTML = 'During senior year, I was a part of a UC Davis student organization called Cycle News Hour. Cycle News Hour is a radio show broadcasting that is fully run by UC Davis students. As part of the web development team, my job was to redesign their current website.';

  tabletSolutionP2.innerHTML = 'My job in the web development team was to create and design the website through html, css, and javascript. In order to create the website, I had meetings with the head of the design department to talk about the look and feel of the website. With lots of research and looking through hundreds of news websites, I created drafts of high fidelity wireframes through Illustrator of each page of the website.';

  tabletSolutionP3.innerHTML = 'After many iterations, I started implementing the wireframe in in HTML, CSS, and JS. As a designer, my first priority is mobile responsive. For this website, it is a clickable wireframe of the Cycle News Hour website. It does not have actual content (except for the video page), but contains placeholders for images and text. The website contains a homepage, interview page, video page, report page, and an article page.';

  document.getElementById('tabletLink-h4').style.color = '#ae3026';
  tabletLinkA.setAttribute('href', 'https://angcim.github.io/CycleNewsHour-Web/');
  tabletLinkP.innerHTML = 'Cycle News Hour Website'
})

// INDULDGE IN ABUNDANCE
tabletSignage.addEventListener('click', function() {
  document.getElementById('workPage-tablet').style.display = 'block';
  document.getElementById('allProjects').style.display = 'none';
  document.getElementById('featured').style.display = 'none';

  tabletTitle.innerHTML = 'CALIFORNIA HALL SIGNAGE SYSTEM<br>"INDULDGE IN ABUNDANCE"';
  tabletCat.innerHTML = 'ENVIRONMENTAL GRAPHIC DESIGN';

  document.getElementById('colorBlock-tablet').style.backgroundColor = '#a6c852';
  document.getElementById('colorBlock-tablet').style.padding = '10em';
  document.getElementById('colorBlock-tablet').style.paddingBottom = '60em';

  document.getElementById('work-img-tablet').src = "images/projects/signage.png";
  document.getElementById('work-img-tablet').alt = "California Hall Signage System";
  document.getElementById('work-img-tablet').height = "641";
  document.getElementById('work-img-tablet').style.marginTop = "-67em";

  document.getElementById('tabletChallenge').style.backgroundColor = '#e5b446';
  document.getElementById('tabletChallenge-h4').style.color = '#b3794c';
  document.getElementById('tabletChallengeP').style.color = '#ffffff';
  tabletChallengeP.innerHTML = 'Create a signage system for California Hall. The signage system must include a theme that relates to the word "California".';

  document.getElementById('tabletTools').style.backgroundColor = '#ffffff';
  document.getElementById('tabletTools-h4').style.color = '#c23a2c';
  document.getElementById('tabletToolsP').style.color = '#000000';
  tabletToolsP.innerHTML = 'Adobe Illustrator <br>Adobe Photoshop';

  document.getElementById('tabletSolution').style.backgroundColor = '#f7f7db';
  document.getElementById('tabletSolution-h4').style.color = '#a6c852';
  document.getElementById('tabletSolutionP1').style.color = '#a6c852';
  document.getElementById('tabletSolutionP2').style.color = '#a6c852';
  document.getElementById('tabletSolutionP3').style.color = '#a6c852';
  tabletSolutionP1.innerHTML = 'California Hall is a newly built in 2019, and is the largest lecture hall throughout campus. It can seat up to 500 students. Since it is a new building, many students do not know how to properly navigate throughout the area, giving us the goal to create an effective signage system. Our theme for our signage system is based on the abundance of fruits and vegetables in California. UC Davis is known for its agriculture, therefore California is a great canvas to tell its story.';

  tabletSolutionP2.innerHTML = 'The first part of the project included an extensive amount of research. We had to go to the building and study the location and how to naturally navigate around the building. We studied the materials and lighingused in the building such as it contains fake bamboo and glass for the walls. We also did research on the typical users that will enter California Hall.';

  tabletSolutionP3.innerHTML = 'The signs are inspired by wooden creates with fruits and vegetables inside. The bright colors and illustrations of the signs will brighten up the white plain walls inside the building. The signs are decorative and informative at the same time. There are nine different types of signs created for the system.<br>To learn more about the signage system, feel free to look through the process manual below.';

  document.getElementById('tabletLink-h4').style.color = '#e5b446';
  tabletLinkA.setAttribute('href', 'https://drive.google.com/open?id=1g5W-aE7nfhjVGhqp-we5J9NXHbNk5nZP');
  tabletLinkP.innerHTML = 'View Process Manual'
});


// NEW ERA GARDEN
tabletNEGweb.addEventListener('click', function() {
  document.getElementById('workPage-tablet').style.display = 'block';
  document.getElementById('allProjects').style.display = 'none';
  document.getElementById('featured').style.display = 'none';

  tabletTitle.innerHTML = 'NEW ERA GARDEN WEBSITE DESIGN';
  tabletCat.innerHTML = 'USER INTERFACE / USER EXPERIENCE';

  document.getElementById('colorBlock-tablet').style.backgroundColor = '#f9ac5b';
  document.getElementById('colorBlock-tablet').style.padding = '10em';
  document.getElementById('colorBlock-tablet').style.paddingBottom = '48em';

  document.getElementById('work-img-tablet').src = "images/projects/negweb.png";
  document.getElementById('work-img-tablet').alt = "New Era Garden Website";
  document.getElementById('work-img-tablet').height = "570";
  document.getElementById('work-img-tablet').style.marginTop = "-56em";

  document.getElementById('tabletChallenge').style.backgroundColor = '#89cf3c';
  document.getElementById('tabletChallenge-h4').style.color = '#ffffff';
  document.getElementById('tabletChallengeP').style.color = '#ffffff';
  tabletChallengeP.innerHTML = 'Create a clickable prototype of a website for New Era Garden to help expand their community and share their resources.';

  document.getElementById('tabletTools').style.backgroundColor = '#ffffff';
  document.getElementById('tabletTools-h4').style.color = '#fb952e';
  document.getElementById('tabletToolsP').style.color = '#000000';
  tabletToolsP.innerHTML = 'Adobe Illustrator <br>InVision App';

  document.getElementById('tabletSolution').style.backgroundColor = '#ef1026';
  document.getElementById('tabletSolution-h4').style.color = '#fb952e';
  document.getElementById('tabletSolutionP1').style.color = '#ffffff';
  document.getElementById('tabletSolutionP2').style.color = '#ffffff';
  document.getElementById('tabletSolutionP3').style.color = '#ffffff';
  tabletSolutionP1.innerHTML = 'New Era Garden is a community garden located in the Sacramento Area. They provides empty plots to plant in for members. For this project, we received a real client that provided us background information, prices, and requirements for the website, and more. This project contained an extensive amount of research and user testing. As a group project, we all had individual tasks that we depended each other on. Part of my job was to create a clickable prototype of the website and test it on real life users with different interests. We did user testing throughout the community and also did some testing in UC Davis with students, professors, and staff.';

  tabletSolutionP2.innerHTML = 'The prototype itself is filled with colorful images of flowers and have colors that are inspired by their logo. The key features of the website include a login account, which is exclusive to members. With an account, members are allowed to log in their hours, pay their yearly dues, and post on the blog. There is an events page for socials and a blog page for articles. The website is accessible for anyone such as getting information about how to join, events, blogs, and contact.';

  tabletSolutionP3.innerHTML = '<strong>How the prototype works:</strong> There is no coding involved in this prototype. We used awebsite called InVision to create a function and clickable prototype. This website acts as actual website. (Due to over a hundred images, the prototype itself is a little slow until all the screens have loaded up, so please be patient with it)<br>* All stock images used for the website are creditted to its rightful owners.';

  document.getElementById('tabletLink-h4').style.color = '#89cf3c';
  tabletLinkA.setAttribute('href', 'https://projects.invisionapp.com/share/4PPK3B2MJFN#/screens');
  tabletLinkP.innerHTML = 'New Era Garden Website Prototype'
});

// MIX'D TRAIL MIX
tabletMIXD.addEventListener('click', function() {
  document.getElementById('workPage-tablet').style.display = 'block';
  document.getElementById('allProjects').style.display = 'none';
  document.getElementById('featured').style.display = 'none';

  tabletTitle.innerHTML = 'GO NUTS ON MIX\'D TRAIL MIX';
  tabletCat.innerHTML = 'BRANDING DESIGN';

  document.getElementById('colorBlock-tablet').style.backgroundColor = '#ebf9fc';
  document.getElementById('colorBlock-tablet').style.padding = '10em';
  document.getElementById('colorBlock-tablet').style.paddingBottom = '94em';

  document.getElementById('work-img-tablet').src = "images/projects/mixd.png";
  document.getElementById('work-img-tablet').alt = "MIX\'D Trail Mix";
  document.getElementById('work-img-tablet').height = "902";
  document.getElementById('work-img-tablet').style.marginTop = "-101em";

  document.getElementById('tabletChallenge').style.backgroundColor = '#aad186';
  document.getElementById('tabletChallenge-h4').style.color = '#73b550';
  document.getElementById('tabletChallengeP').style.color = '#ffffff';
  tabletChallengeP.innerHTML = 'Choose any dried goods from the grocery store and create a whole new brand out of that product. The constraint is that the packaging must incorporate biomimicry and cater to the eldery.';

  document.getElementById('tabletTools-h4').style.color = '#82c6b5';
  tabletToolsP.innerHTML = 'Adobe Illustrator<br>Adobe Photoshop<br>Adobe InDesign';

  document.getElementById('tabletSolution').style.backgroundColor = '#be8451';
  document.getElementById('tabletSolution-h4').style.color = '#522f18';
  document.getElementById('tabletSolutionP1').style.color = '#522f18';
  document.getElementById('tabletSolutionP2').style.color = '#522f18';
  document.getElementById('tabletSolutionP3').style.color = '#522f18';
  tabletSolutionP1.innerHTML = 'MIX\'D is an organic trail mix company that advocates for a healthy diet and lifestyle by focusing on portion control and having a variety of mixes that target specific health benefits for every individual. I wanted my brand to be playful and friendly to illustrate that eating healthy can be fun and exciting.';

  tabletSolutionP2.innerHTML = 'For the graphics, I focused on a friendly and exciting logos. The "M" in MIX\'D, represents a mountain with a trail of nuts. The colors scheme includes colors of nature such as green, blue, and brown. To add an even more playful touch, the cashew represents as an apostrophe in MIX\'D. The logo contains colors of nature, but for the business model, the main colors used are teal. This includes envelopes and letterheads. The main typefaces used for the brand is Quicksand and Death Star. Death Star is for the logo while Quicksand is for text and body copy. To learn more about the graphics, feel free to look at my graphic standard below.';

  tabletSolutionP3.innerHTML = 'As a brand, MIX\'D is also environmentally cautious and promotes waste reduction. The packaging design was inspired by bulks of protein powder. Buying in bulk reduces wastes because it provides a small amount of material for a large amount of quantity. To help with portion control, inside the packaging, there is a paper scooper to help with the portions rather than the plastic scoopers inside protein powders. To learn more about the packaging, feel free to look through my process manual below.';

  document.getElementById('tabletLink-h4').style.color = '#be8451';
  tabletLinkA.setAttribute('href', 'https://drive.google.com/open?id=1fdLAAR9aD-Zhzznu4moCIlFUeqiCPl96');
  tabletLinkP.innerHTML = 'Process Manual and Graphic Standard'
});

// HEALTHY BUDDY
tabletHealthy.addEventListener('click', function() {
  document.getElementById('workPage-tablet').style.display = 'block';
  document.getElementById('allProjects').style.display = 'none';
  document.getElementById('featured').style.display = 'none';

  tabletTitle.innerHTML = 'HEALTHY BUDDY';
  tabletCat.innerHTML = 'USER INTERFACE / USER EXPERIENCE';

  document.getElementById('colorBlock-tablet').style.backgroundColor = '#b0dfed';
  document.getElementById('colorBlock-tablet').style.padding = '10em';
  document.getElementById('colorBlock-tablet').style.paddingBottom = '55em';

  document.getElementById('work-img-tablet').src = "images/projects/healthybud.png";
  document.getElementById('work-img-tablet').alt = "Healthy Buddy";
  document.getElementById('work-img-tablet').height = "610";
  document.getElementById('work-img-tablet').style.marginTop = "-62em";

  document.getElementById('tabletChallenge').style.backgroundColor = '#51b7da';
  document.getElementById('tabletChallenge-h4').style.color = '#ffffff';
  document.getElementById('tabletChallengeP').style.color = '#ffffff';
  tabletChallengeP.innerHTML = 'Design and create a mobile app or website promotes equity. After, create a working prototype using InVision App.';

  document.getElementById('tabletTools-h4').style.color = '#fdd30f';
  tabletToolsP.innerHTML = 'Adobe Illustrator<br>InVision App';

  document.getElementById('tabletSolution').style.backgroundColor = '#f05143';
  document.getElementById('tabletSolution-h4').style.color = '#ffffff';
  document.getElementById('tabletSolutionP1').style.color = '#ffffff';
  document.getElementById('tabletSolutionP2').style.color = '#ffffff';
  document.getElementById('tabletSolutionP3').style.color = '#ffffff';
  tabletSolutionP1.innerHTML = 'For this project, the theme I chose is healthcare. There are many users that do not have any health insurance or benefits. Healthy Buddy is a free app for people who do not or can not afford health insurance. The main goal of Healthy Buddy is to keep its users as healthy as possible. This app targets users who do not have access to health insurance, especially recent graduates and people who work at home.';

  tabletSolutionP2.innerHTML = 'The first key features in this app is a daily health feature. This is the area where users can track their calories, their exercise, heart rate and more. The second key feature is data entry. Users are able to put and organize all their medical records. If a user is missing a shot, the app will notify that user. The third key feature is a high tech self-diagnosis with AI. This is for simple self-diagnosis such as rashes, allergies, and all kinds of symptoms. If the diagnosis is severe, the app will locate the user to the nearest and cheapest clinic. The last and forth feature is the emergency fund account. This is where users can save up money just in case they need to go see a doctor. It shows the cost to see how much that user needs to save.';

  tabletSolutionP3.innerHTML = '<strong>How the prototype works:</strong> This prototype only have two working tasks: the Daily Health and the Emergency Fund. The Daily Health is a linear step-by-step prototype and must complete each task to move on to the other. In The Emergency Fund, The user can either put their savings first or find different types of doctor appointments.';

  document.getElementById('tabletLink-h4').style.color = '#49c091';
  tabletLinkA.setAttribute('href', 'https://projects.invisionapp.com/share/STPEOMJA6P5#/screens');
  tabletLinkP.innerHTML = 'Healthy Buddy Prototype'
});

// ALFRED HITCHCOCK POSTER
tabletPoster.addEventListener('click', function() {
  document.getElementById('workPage-tablet').style.display = 'block';
  document.getElementById('allProjects').style.display = 'none';
  document.getElementById('featured').style.display = 'none';

  tabletTitle.innerHTML = 'ALFRED HITCHCOCK<br>"MASTER OF SUSPENSE" POSTER';
  tabletCat.innerHTML = 'POSTER DESIGN';

  document.getElementById('colorBlock-tablet').style.backgroundColor = '#f5ca4c';
  document.getElementById('colorBlock-tablet').style.padding = '10em';
  document.getElementById('colorBlock-tablet').style.paddingBottom = '33em';

  document.getElementById('work-img-tablet').src = "images/projects/afposter.png";
  document.getElementById('work-img-tablet').alt = "Alfred Hitchcock \"Master of Suspense\" Poster";
  document.getElementById('work-img-tablet').height = "490";
  document.getElementById('work-img-tablet').style.marginTop = "-40em";

  document.getElementById('tabletChallenge').style.backgroundColor = '#040404';
  document.getElementById('tabletChallenge-h4').style.color = '#f5ca4c';
  document.getElementById('tabletChallengeP').style.color = '#ffffff';
  tabletChallengeP.innerHTML = 'Create a poster of a well-known and significant artist. The artist must be already dead and the poster has to show why he/she was successful during their lifetime. It must present their life’s work throughout the whole poster.';

  document.getElementById('tabletTools-h4').style.color = '#d52e21';
  tabletToolsP.innerHTML = 'Adobe Photoshop';

  document.getElementById('tabletSolution').style.backgroundColor = '#f5ca4c';
  document.getElementById('tabletSolution-h4').style.color = '#040404';
  document.getElementById('tabletSolutionP1').style.color = '#040404';
  document.getElementById('tabletSolutionP2').style.color = '#040404';
  document.getElementById('tabletSolutionP3').style.color = '#040404';
  tabletSolutionP1.innerHTML = 'For this project, I created the poster using Adobe Photoshop. This project was best suited on Photoshop because it dealt with a lot of editing of photos. Since all the film images are old and scratchy, I edited its sharpness and reduced the noise to give a look of higher quality photos. This photo contains approximately 20 separate images that is combined into one poster. I chose Alfred Hitchcock because he is one of the most well known directors throughout history. He revolutionized the film industry by creating suspenseful films.';

  tabletSolutionP2.innerHTML = 'My font choices reflect on his movie posters. I chose the font that closely resembled the original posters that was created to give it more of a visual effect. I chose this particular Alfred Hitchcock quote rbecause it’s a quote that sums up all his movies, which is full of suspense. The choice of adding the filmstrip indicates that he is a director. The photos I chose are iconic scenes from his most famous movies such as Psycho, Rear Window, and Birds. The color choice I chose is a bright red to represent the blood in all his suspenseful films.';

  tabletSolutionP3.innerHTML = '*All images used for the poster are creditted to its rightful owners.';

  document.getElementById('tabletLink-h4').style.color = '#d52e21';
  tabletLinkA.setAttribute('href', 'https://drive.google.com/open?id=1Tgga_BJB5dtc4FCvUFCwMmRsQLXjRjtJ');
  tabletLinkP.innerHTML = 'Alfred Hitchcock Poster PDF'
});

// ALFRED HITCHCOCK ANIMATION
tabletAnim.addEventListener('click', function() {
  document.getElementById('workPage-tablet').style.display = 'block';
  document.getElementById('allProjects').style.display = 'none';
  document.getElementById('featured').style.display = 'none';

  tabletTitle.innerHTML = 'ALFRED HITCHCOCK<br>"MASTER OF SUSPENSE"';
  tabletCat.innerHTML = 'ANIMATION';

  document.getElementById('colorBlock-tablet').style.backgroundColor = '#ee2124';
  document.getElementById('colorBlock-tablet').style.padding = '10em';
  document.getElementById('colorBlock-tablet').style.paddingBottom = '50em';

  document.getElementById('work-img-tablet').src = "images/projects/af-anim.png";
  document.getElementById('work-img-tablet').alt = "Alfred Hitchcock \"Master of Suspense\" Animation";
  document.getElementById('work-img-tablet').height = "561";
  document.getElementById('work-img-tablet').style.marginTop = "-57em";

  document.getElementById('tabletChallenge').style.backgroundColor = '#040404';
  document.getElementById('tabletChallenge-h4').style.color = '#ffffff';
  document.getElementById('tabletChallengeP').style.color = '#ffffff';
  tabletChallengeP.innerHTML = 'Create 30-45 second animation that displays the biography of a dead artist. You must combine text and graphics to achieve this goal.The constraint is that you are only allowed to use 20 words to convey your message.';

  document.getElementById('tabletTools-h4').style.color = '#040607';
  tabletToolsP.innerHTML = 'AfterEffects';

  document.getElementById('tabletSolution').style.backgroundColor = '#ee2124';
  document.getElementById('tabletSolution-h4').style.color = '#ffffff';
  document.getElementById('tabletSolutionP1').style.color = '#ffffff';
  document.getElementById('tabletSolutionP2').style.color = '#ffffff';
  document.getElementById('tabletSolutionP3').style.color = '#ffffff';
  tabletSolutionP1.innerHTML = 'As a huge film buff, I already had a bunch of directors in mind to create an animation of. The first three people in my list were Charlie Chaplin, Alfred Hitchcock, and Stanley Kubrick. After writing a sheet or brainstorm and coming up with a 20 word biolography for each character, I decided to dedicate this animation on Alfred Hitchcock. One of the reasons why I chose him is that I already created a biography poster of him, so why not add this one to my collection.';

  tabletSolutionP2.innerHTML = 'For the assignment, I created two moodboards and style frames for the project. I wanted to show the very essence of the suspense in his films. I used a bold dark red as my spot color because it represents blood and murder. I created scenes from his most famous films with the use of typography. The typography I chose for this assignment was Futura Bold. I used Futura Bold because I wanted to express how striking and thrilling his films are. For the typography, I personified them as the victims in his films such as for Psycho, when the letters get cut in half while it takes a shower. I inputted the beginning of the quote and then all the famous cut scenes and ended it with the rest of the quote. The reason why I did this was to add the extra anticipation the audience gets when they watch his films.';

  tabletSolutionP3.innerHTML = '';

  document.getElementById('tabletLink-h4').style.color = '#ee2124';
  tabletLinkA.setAttribute('href', 'https://www.youtube.com/watch?v=xebVaJlDWCc&feature=emb_title');
  tabletLinkP.innerHTML = 'Alfred Hitchcock Biography Animation'
});

// DESIGN AND PLAY INSTINCT BOOK DESIGN
tabletBook.addEventListener('click', function() {
  document.getElementById('workPage-tablet').style.display = 'block';
  document.getElementById('allProjects').style.display = 'none';
  document.getElementById('featured').style.display = 'none';

  tabletTitle.innerHTML = 'DESIGN AND THE PLAY INSTINCT';
  tabletCat.innerHTML = 'BOOK AND LAYOUT DESIGN';

  document.getElementById('colorBlock-tablet').style.backgroundColor = '#b7e0df';
  document.getElementById('colorBlock-tablet').style.padding = '10em';
  document.getElementById('colorBlock-tablet').style.paddingBottom = '80em';

  document.getElementById('work-img-tablet').src = "images/projects/book.png";
  document.getElementById('work-img-tablet').alt = "DESIGN AND THE PLAY INSTINCT";
  document.getElementById('work-img-tablet').height = "776";
  document.getElementById('work-img-tablet').style.marginTop = "-87em";

  document.getElementById('tabletChallenge').style.backgroundColor = '#44afaa';
  document.getElementById('tabletChallenge-h4').style.color = '#ffffff';
  document.getElementById('tabletChallengeP').style.color = '#ffffff';
  tabletChallengeP.innerHTML = 'Create a book design of Paul Rand’s book, “Design and the Play Instinct”. You must choose the size of your book but it can not exceed 9x9 inches. You must include all of the text (you may not alter or remove any) and all of the images provided. You may choose from these fonts: Futura, Gill Sans, Rockwell, Helvetica, Univers. You have one restraint of choosing only one spot color, but may use black, white, and gray.';

  document.getElementById('tabletTools-h4').style.color = '#44afaa';
  tabletToolsP.innerHTML = 'Adobe InDesign<br>Adobe Photoshop<br>Adobe Illustrator';

  document.getElementById('tabletSolution').style.backgroundColor = '#71bfba';
  document.getElementById('tabletSolution-h4').style.color = '#ffffff';
  document.getElementById('tabletSolutionP1').style.color = '#ffffff';
  document.getElementById('tabletSolutionP2').style.color = '#ffffff';
  document.getElementById('tabletSolutionP3').style.color = '#ffffff';
  tabletSolutionP1.innerHTML = 'To start off, I wanted this layout design to be fun and engaging. Redesigning an art book, I strongly felt it was appropriate to fill the book with lots of fun layouts along with a combination of information and knowledge. I chose a book size of 6 inches by seven inches because I wanted it to be a portable book that anyone can take wherever such as the "The Little Red Book".';

  tabletSolutionP2.innerHTML = 'The typefaces I chose were Futura and Gill Sans. I used Futura for the titles and headings because I wanted this book to be bold and engaging. I wanted the words to pop out with the images. I chose Gill Sans Light for body text to balance the boldness of Futura. Gill Sans Light is an elegant san-serif font that is easy to read. I wanted it to be readable and enjoyable at the same time. As a constraint, I was able to choose only one color on top with white. I selected the color teal because it is a color that pops and mixes well with white.';

  tabletSolutionP3.innerHTML = 'By adding chapter pages to section information, this book contains over 70 pages. For instance, in the section “Crosswords”, the content provides a picture of the cross word and the text that Paul Rand’s book provides. This gives my book a great structural pattern that many books contain, so the audience doesn’t get confused as they go through the content.';

  document.getElementById('tabletLink-h4').style.color = '#71bfba';
  tabletLinkA.setAttribute('href', 'https://drive.google.com/open?id=1j9ESY82nH4KYPZQUJXUiNaFdanuMMNSc');
  tabletLinkP.innerHTML = 'Design and the Play Instinct Book Design'
});

// function tablet(t) {
//   if (t.matches) {
//     document.getElementById('workPage-desktop').style.display = 'none';
//   } else {
//    document.getElementById('workPage-desktop').style.display = 'block';
//   }
// }

// ********** DESKTOP WORK PAGES **********
//BACK BUTTON
desktopBack.addEventListener('click', function() {
  document.getElementById('featured2').style.display = 'flex';
  document.getElementById('allProjects-desktop').style.display = 'block';
  document.getElementById('workPage-desktop').style.display = 'none';
});

// EV EXPLORER
desktopVECC.addEventListener('click', function() {
  document.getElementById('workPage-desktop').style.display = 'block';
  document.getElementById('allProjects-desktop').style.display = 'none';
  document.getElementById('featured2').style.display = 'none';

  document.getElementById('workText-desktop').style.marginTop = "-103%";

  desktopTitle.innerHTML = 'EV EXPLORER';
  desktopCat.innerHTML = 'USER INTERFACE / USER EXPERIENCE';

  document.getElementById('colorBlock-desktop').style.backgroundColor = '#a2d0ed';
  document.getElementById('colorBlock-desktop').style.padding = '5.5em';

  document.getElementById('work-img-desktop').src = "images/projects/evexplorer.png";
  document.getElementById('work-img-desktop').alt = "DESIGN AND THE PLAY INSTINCT";
  document.getElementById('work-img-desktop').height = "799";
  document.getElementById('work-img-desktop').style.marginTop = "-14em";

  document.getElementById('desktopChallenge').style.backgroundColor = '#83cdd5';
  document.getElementById('desktopChallenge-h4').style.color = '#ffffff';
  document.getElementById('desktopChallengeP').style.color = '#ffffff';
  desktopChallengeP.innerHTML = 'Research all the different VECCs tools and their features help redesign the EV Explorer website.';

  document.getElementById('desktopTools-h4').style.color = '#ef8b6e';
  document.getElementById('desktopToolsP').style.color = '#000000';
  desktopToolsP.innerHTML = 'Adobe Illustrator<br>AfterEffects';

  document.getElementById('desktopSolution').style.backgroundColor = '#f8d053';
  document.getElementById('desktopSolution-h4').style.color = '#ffffff';
  document.getElementById('desktopSolutionP1').style.color = '#ffffff';
  document.getElementById('desktopSolutionP2').style.color = '#ffffff';
  document.getElementById('desktopSolutionP3').style.color = '#ffffff';
  desktopSolutionP1.innerHTML = 'For my internship at cEnergi, I was primarily a UX researcher and graphic designer. The biggest project I was involved in was redesigning EV Explorer. EV Explorer is a vehicle energy cost calculator that helps users compare fuel costs and savings between different types of vehicles. The goal of EV Explorer is to promote electric vehicles by allowing users to see its benefits in comparison to gas only vehicles.';

    desktopSolutionP2.innerHTML = 'The first part of the project included researching 12 different VECCs. Each week, I had to look through and explore all the different functions of the calculators and input the data through a spreadsheet. With months of research, I had to decide and make a case on which calculators should be used for usability testing. Throughout summer and half of fall, we did usability tests such as surveys with students from UC Davis and different car shows from California. We asked them to explore each vcc and answer survey questions in the end about how easy and useful each information that was presented.';

      desktopSolutionP3.innerHTML = 'After my internship ended and the user testing was completed, I moved to part-time and became the UI designer for EV Explorer. Collectively, we gathered all of the data between different users and started creating the new design for EV Explorer. The new EV Explorer has a more playful and inviting look. It uses light simple colors and icons. In the new mockup, the landing page has an illustration of an electric vehicle with a charging station. It also includes a small paragraph of the benefits of EVs and a “How it Works” in the bottom. Once the users select “Get Started”, there will be a popup of required inputs the user has to answer to gather enough information for the results. In the outputs page includes a graph that compares at least two different cars. On the right side presents the environmental benefits of the electric vehicle in terms of emissions, air quality, and petroleum. The environmental benefits includes an animated scene related to the topic. In the bottom of the page is all of the customizable settings. The customizeable settings helps users put in more detailed information to get the most accurate data. It includes the user’s driving behavior, types of vehicles, fuel costs, and finance costs.';

  document.getElementById('desktopLink-h4').style.color = '#b0d757';
  desktopLinkA.setAttribute('href', 'https://drive.google.com/open?id=1P9Zzf-5mowXXw1jZ_AyyqRIhjVnSk1Dz');
  desktopLinkP.innerHTML = 'EV Explorer Mockup Designs PDF'
});

//SPOTLIGHT WEB PAGE
desktopWebPage.addEventListener('click', function() {
  document.getElementById('workPage-desktop').style.display = 'block';
  document.getElementById('allProjects-desktop').style.display = 'none';
  document.getElementById('featured2').style.display = 'none';

  document.getElementById('workText-desktop').style.marginTop = "-33%";

  desktopTitle.innerHTML = 'SPOTLIGHT WEB PAGE <br><em> "VIDEO CAASPP AND ELPAC REPORTS"</em>';
  desktopCat.innerHTML = 'WEB DESIGN';

  document.getElementById('colorBlock-desktop').style.backgroundColor = '#447bb2';
  document.getElementById('colorBlock-desktop').style.padding = '5.5em';

  document.getElementById('work-img-desktop').src = "images/projects/webpage.png";
  document.getElementById('work-img-desktop').alt = "Spotlight Web Page";
  document.getElementById('work-img-desktop').height = "368";
  document.getElementById('work-img-desktop').style.marginTop = "-13em";

  document.getElementById('desktopChallenge').style.backgroundColor = '#255c7f';
  document.getElementById('desktopChallenge-h4').style.color = '#ffffff';
  document.getElementById('desktopChallengeP').style.color = '#ffffff';
  desktopChallengeP.innerHTML = 'Create a Web Page called "Video CAASPP and ELPAC Reports" for Spotlight Education\'s website. The web page must have the exact similar look and feel as the rest of the website. Find a family friendly image of a parent watching a video with a child.';

  document.getElementById('desktopTools-h4').style.color = '#255c7f';
  document.getElementById('desktopToolsP').style.color = '#000000';
  desktopToolsP.innerHTML = 'Adobe Illustrator<br>Adobe Photoshop<br>Squarespace<br>Languages: HTML and CSS';

  document.getElementById('desktopSolution').style.backgroundColor = '#ef9029';
  document.getElementById('desktopSolution-h4').style.color = '#ffffff';
  document.getElementById('desktopSolutionP1').style.color = '#ffffff';
  document.getElementById('desktopSolutionP2').style.color = '#ffffff';
  document.getElementById('desktopSolutionP3').style.color = '#ffffff';
  desktopSolutionP1.innerHTML = 'As a small project for Spotlight Education, I had to create a new web page for the website. The web page is called “Video CAASPP and ELPAC Reports”. The new web page had to look similar to another web page that was already in the website. I was given a list of guidelines on what to put on the website such as having two call of actions and finding a stock image of a parent watching a video with a child. ';

  desktopSolutionP2.innerHTML = 'The first step of this project was to study the website and create a mockup on Illustrator before implementing it. I created a mockup on Illustrator first because it will be easier to make changes early on before its implemented on the website. I studied the styles used on the website such as the color, typefaces, and images used to help create a consist web page. After finding an image for the web page, I edited the photo through photoshop. I changed the color balance and saturation to blue and used content aware fill to stretch the image. After finishing the mockup and getting it approved, I implemented it on Squarespace, which is where the website was created.';

    desktopSolutionP3.innerHTML = '';

  document.getElementById('desktopLink-h4').style.color = '#ef9029';
  desktopLinkA.setAttribute('href', 'https://www.spotlight-education.com/video-caasp-elpac-reports');
  desktopLinkP.innerHTML = 'Spotlight Education Video CAASP and ELPAC Reports';
});

// CCRG INFOGRAPHIC REPORT
desktopCCRG.addEventListener('click', function() {
  document.getElementById('workPage-desktop').style.display = 'block';
  document.getElementById('allProjects-desktop').style.display = 'none';
  document.getElementById('featured2').style.display = 'none';

  document.getElementById('workText-desktop').style.marginTop = "-83%";

  desktopTitle.innerHTML = 'COLLEGE CAREER AND READINESS GUIDE';
  desktopCat.innerHTML = 'INFOGRAPHIC REPORT';

  document.getElementById('colorBlock-desktop').style.backgroundColor = '#65b7ce';
  document.getElementById('colorBlock-desktop').style.padding = '5.5em';

  document.getElementById('work-img-desktop').src = "images/projects/ccrg.png";
  document.getElementById('work-img-desktop').alt = "CCRG Infographic Report";
  document.getElementById('work-img-desktop').height = "638";
  document.getElementById('work-img-desktop').style.marginTop = "-13.5em";

  document.getElementById('desktopChallenge').style.backgroundColor = '#41a1b7';
  document.getElementById('desktopChallenge-h4').style.color = '#ffffff';
  document.getElementById('desktopChallengeP').style.color = '#ffffff';
  desktopChallengeP.innerHTML = 'Create an infographic report for CCRG. The report should include an outline of a student with a grad cap and a brain in the center. Around the student will be surrounded by thought bubbles with text and images. Brainstorm and think of an illustration that would best fit inside the brain for the report. After, create a save a date for that infographic report.';

  document.getElementById('desktopTools-h4').style.color = '#99b8d8';
  document.getElementById('desktopToolsP').style.color = '#000000';
  desktopToolsP.innerHTML = 'Adobe Illustrator<br>Atom Text Editor<br>Eclipse';

  document.getElementById('desktopSolution').style.backgroundColor = '#274169';
  document.getElementById('desktopSolution-h4').style.color = '#ffffff';
  document.getElementById('desktopSolutionP1').style.color = '#ffffff';
  document.getElementById('desktopSolutionP2').style.color = '#ffffff';
  document.getElementById('desktopSolutionP3').style.color = '#ffffff';
  desktopSolutionP1.innerHTML = 'For Spotlight Education, I had to create an infographic report called “College and Career Readiness Guide”. This page is the front page of the CCRG reports and acts as as an illustrated table of contents for the students and parents. The page includes up to seven bubbles, but this mockup only shows five pages. After creating the report, I had make a “Save the Date” that would then be sent through mailchimp. For this design, the client wanted it to have the image of the student with the brain and grad cap. Since the two pieces of work are related, I made sure I used the same color scheme as the infographic report for consistency.';

    desktopSolutionP2.innerHTML = 'The main requirements of the report includes a student with a grad cap and a brain in the middle of the page. Around the student includes thought bubbles that represents a page of each report. The order of the pages goes from the bottom left all the up, and then to the bottom right page. Each thought bubble has the page number, title of the page, a small icon that represents the page, and brief text that directs the user to that page. The colors used for the infographic report are different shades of blue and white because it’s calm and easy on the eyes for students and parents. Inside the brain contains puzzle pieces of different subjects from school to represent.';

      desktopSolutionP3.innerHTML = 'The infographic report was made in Adobe Illustrator, but then was later implemented through Eclipse, which is an IDE. I used Eclipse to create a BIRT template of the report. For the BIRT template, I hard coded the text and images, and used CSS to style the text. The BIRT templates would be then given to our team to create params that would allow mass production of the product.';

  document.getElementById('desktopLink-h4').style.color = '#65b7ce';
  desktopLinkA.setAttribute('href', 'https://drive.google.com/open?id=1FZ-x49gnL7Oakhs8ziCH-eiFA78wfm6X');
  desktopLinkP.innerHTML = 'View PDF'
});

// WEST VILLAGE ENERGY DASHBOARD
desktopWVED.addEventListener('click', function() {
  document.getElementById('workPage-desktop').style.display = 'block';
  document.getElementById('allProjects-desktop').style.display = 'none';
  document.getElementById('featured2').style.display = 'none';

  document.getElementById('workText-desktop').style.marginTop = "-32%";

  desktopTitle.innerHTML = 'WEST VILLAGE ENERGY DASHBOARD';
  desktopCat.innerHTML = 'USER INTERFACE / USER EXPERIENCE';

  document.getElementById('colorBlock-desktop').style.backgroundColor = '#edd6c3';
  document.getElementById('colorBlock-desktop').style.padding = '5.5em';

  document.getElementById('work-img-desktop').src = "images/projects/wved.png";
  document.getElementById('work-img-desktop').alt = "West Village Energy Dashboard";
  document.getElementById('work-img-desktop').height = "236";
  document.getElementById('work-img-desktop').style.marginTop = "-14em";

  document.getElementById('desktopChallenge').style.backgroundColor = '#f1b03d';
  document.getElementById('desktopChallenge-h4').style.color = '#ffffff';
  document.getElementById('desktopChallengeP').style.color = '#ffffff';
  desktopChallengeP.innerHTML = 'Redesign West Village\'s energy dashboard. The dashboard must contain all of the elements from the previous design with a replacement of the zero net graph for a calendar. <br> Also redesign the splash page of the dashboard to have a mobile interface.';

  document.getElementById('desktopTools-h4').style.color = '#edc59a';
  document.getElementById('desktopToolsP').style.color = '#000000';
  desktopToolsP.innerHTML = 'Adobe Illustrator';

  document.getElementById('desktopSolution').style.backgroundColor = '#f6e9d9';
  document.getElementById('desktopSolution-h4').style.color = '#f1b040';
  document.getElementById('desktopSolutionP1').style.color = '#999999';
  document.getElementById('desktopSolutionP2').style.color = '#999999';
  document.getElementById('desktopSolutionP3').style.color = '#999999';
  desktopSolutionP1.innerHTML = 'West Village Energy Dashboard is an interface that allows users about the energy use in the buildings each week. There are four buildings West Village that the energy dashboard focuses on, which are 215 Sage, 1590 Tilia, 1605 Tilia, and 1715 Tilia. The goal of the dashboard it so educate its occupants about the different types of energy use, how to reduce it, and reach zero net energy. I revised illustrations, made from previous designers, to give the splash page a mobile design. It was then later implemented by a computer science student in the website.';

  desktopSolutionP2.innerHTML = 'The overall design of the dashboard includes three sections: Weekly leaderboard, energy usage, and power demand. The weekly leaderboard illustrates a horse race with each horse representing a building in West Village. The purpose of the horse race is to show which building is “winning” indicating which building is saving the most energy. At the end of each week, a horse will be given a winning trophy and will show how many trophies they have won. The second part of the design informs the users of the energy use and power demand through data.';

  desktopSolutionP3.innerHTML = 'The energy use consists of a calendar that would have a red or green color to show if there was a negative or positive energy net usage on each day of the month. The power demand has a line graph that shows the amount of energy used each hour of the day, and an equation with clickable on and off buttons of the different types of power usage. The bottom right includes a toggle to lets users switch the views from monthly or day view.';

  document.getElementById('desktopLink-h4').style.color = '#f1b040';
  desktopLinkA.setAttribute('href', 'http://wved.ucdavis.edu/#!/');
  desktopLinkP.innerHTML = 'West Village Energy Dashboard'
});

// CRITICA PORTFOLIO REVIEW
desktopCritica.addEventListener('click', function() {
  document.getElementById('workPage-desktop').style.display = 'block';
  document.getElementById('allProjects-desktop').style.display = 'none';
  document.getElementById('featured2').style.display = 'none';

  document.getElementById('workText-desktop').style.marginTop = "-34%";

  desktopTitle.innerHTML = 'CRITICA PORTFOLIO REVIEW';
  desktopCat.innerHTML = 'WEBSITE DESIGN';

  document.getElementById('colorBlock-desktop').style.backgroundColor = '#b5cbea';
  document.getElementById('colorBlock-desktop').style.padding = '5.5em';

  document.getElementById('work-img-desktop').src = "images/projects/critica.png";
  document.getElementById('work-img-desktop').alt = "Critica Portfolio Review";
  document.getElementById('work-img-desktop').height = "259";
  document.getElementById('work-img-desktop').style.marginTop = "-15em";

  document.getElementById('desktopChallenge').style.backgroundColor = '#28477c';
  document.getElementById('desktopChallenge-h4').style.color = '#90a9d6';
  document.getElementById('desktopChallengeP').style.color = '#ffffff';
  desktopChallengeP.innerHTML = 'Create a browser-based interactive exploration on your topic for DIS 2019 or C&C, hand-coded with the front-end stack and your choice (option) of a js libraries, such as p5.js, and css libraries';

  document.getElementById('desktopTools-h4').style.color = '#c24273';
  document.getElementById('desktopToolsP').style.color = '#000000';
  desktopToolsP.innerHTML = 'Adobe Illustrator <br>Atom Text Editor<br>Languages: HTML, CSS, Javascript';

  document.getElementById('desktopSolution').style.backgroundColor = '#c24273';
  document.getElementById('desktopSolution-h4').style.color = '#ffffff';
  document.getElementById('desktopSolutionP1').style.color = '#ffffff';
  document.getElementById('desktopSolutionP2').style.color = '#ffffff';
  document.getElementById('desktopSolutionP3').style.color = '#ffffff';
  desktopSolutionP1.innerHTML = 'For this project, the topic I chose was education for graphic designers called Critica. Critica is an online community for all designers to help improve their online portfolio. The goal of the website is to give more opportunities to designers who do not have the proper resources to constantly improve their work. For instance, there are many designers out there that are not in any college programs or don’t know any other designers/professors that can help them properly critique their work. ';

      desktopSolutionP2.innerHTML = 'Critica is unique from known portfolio websites like Behance and Dribbble because it does not focus on showcasing work but it focuses on improving each other’s work. The design focuses on a playful and inviting environment for designers with functionalities that allows users to upload their work and have designers add comments on how it can improve. The website contains specific guidelines to help users give constructive criticism rather than saying something is “good” or “bad”.';

        desktopSolutionP3.innerHTML = '<strong>How it works:</strong> This is a working prototype with limited functions. It contains one html file and uses javascript to give it the behavior or multiple pages. It includes a community page with three pieces of work that the user can click on. It will then direct users to the page of the work selected, and the users can drag around the image and write comments. If the user is new, they can select “Get Started” and it will take them to the community page with pop up that has instructions on how to critique a piece of work. The next page is an upload pop up page. This is where users can put their work in the website by uploading the file, project name, designer’s name, and description. It will later then be sent for approval by moderators. (For the prototype, users can upload files and input text, but it will not be processed). The last page is the guidelines, which informs users on rules and tips.';

  document.getElementById('desktopLink-h4').style.color = '#28477c';
  desktopLinkA.setAttribute('href', 'https://angcim.github.io/des157-g/process/development/final/index.html');
  desktopLinkP.innerHTML = 'Critica Portfolio Review'
});

// CYCLE NEWS HOUR
desktopCNH.addEventListener('click', function() {
  document.getElementById('workPage-desktop').style.display = 'block';
  document.getElementById('allProjects-desktop').style.display = 'none';
  document.getElementById('featured2').style.display = 'none';

  document.getElementById('workText-desktop').style.marginTop = "-74%";

  desktopTitle.innerHTML = 'CYCLE NEWS HOUR';
  desktopCat.innerHTML = 'WEBSITE DESIGN';

  document.getElementById('colorBlock-desktop').style.backgroundColor = '#c6e5ef';
document.getElementById('colorBlock-desktop').style.padding = '5.5em';

  document.getElementById('work-img-desktop').src = "images/projects/cnh.png";
  document.getElementById('work-img-desktop').alt = "Cycle News Hours Website";
  document.getElementById('work-img-desktop').height = "563";
document.getElementById('work-img-desktop').style.marginTop = "-14em";

  document.getElementById('desktopChallenge').style.backgroundColor = '#ae3026';
  document.getElementById('desktopChallenge-h4').style.color = '#ffffff';
  document.getElementById('desktopChallengeP').style.color = '#ffffff';
  desktopChallengeP.innerHTML = 'Redesign the Cycle News Hour Website to have the look and feel similar to news websites.';

  document.getElementById('desktopTools-h4').style.color = '#4c8a76';
  document.getElementById('desktopToolsP').style.color = '#000000';
  desktopToolsP.innerHTML = 'Adobe Illustrator <br>Atom Text Editor<br>Languages: HTML, CSS, Javascript';

  document.getElementById('desktopSolution').style.backgroundColor = '#dfa43e';
  document.getElementById('desktopSolution-h4').style.color = '#ffffff';
  document.getElementById('desktopSolutionP1').style.color = '#ffffff';
  document.getElementById('desktopSolutionP2').style.color = '#ffffff';
  document.getElementById('desktopSolutionP3').style.color = '#ffffff';
  desktopSolutionP1.innerHTML = 'During senior year, I was a part of a UC Davis student organization called Cycle News Hour. Cycle News Hour is a radio show broadcasting that is fully run by UC Davis students. As part of the web development team, my job was to redesign their current website.';

  desktopSolutionP2.innerHTML = 'My job in the web development team was to create and design the website through html, css, and javascript. In order to create the website, I had meetings with the head of the design department to talk about the look and feel of the website. With lots of research and looking through hundreds of news websites, I created drafts of high fidelity wireframes through Illustrator of each page of the website.';

  desktopSolutionP3.innerHTML = 'After many iterations, I started implementing the wireframe in in HTML, CSS, and JS. As a designer, my first priority is mobile responsive. For this website, it is a clickable wireframe of the Cycle News Hour website. It does not have actual content (except for the video page), but contains placeholders for images and text. The website contains a homepage, interview page, video page, report page, and an article page.';

  document.getElementById('desktopLink-h4').style.color = '#ae3026';
  desktopLinkA.setAttribute('href', 'https://angcim.github.io/CycleNewsHour-Web/');
  desktopLinkP.innerHTML = 'Cycle News Hour Website'
})

// INDULDGE IN ABUNDANCE
desktopSignage.addEventListener('click', function() {
  document.getElementById('workPage-desktop').style.display = 'block';
  document.getElementById('allProjects-desktop').style.display = 'none';
  document.getElementById('featured2').style.display = 'none';

  document.getElementById('workText-desktop').style.marginTop = "-83%";

  desktopTitle.innerHTML = 'CALIFORNIA HALL SIGNAGE SYSTEM<br>"INDULDGE IN ABUNDANCE"';
  desktopCat.innerHTML = 'ENVIRONMENTAL GRAPHIC DESIGN';

  document.getElementById('colorBlock-desktop').style.backgroundColor = '#a6c852';
  document.getElementById('colorBlock-desktop').style.padding = '5.5em';

  document.getElementById('work-img-desktop').src = "images/projects/signage.png";
  document.getElementById('work-img-desktop').alt = "California Hall Signage System";
  document.getElementById('work-img-desktop').height = "641";
  document.getElementById('work-img-desktop').style.marginTop = "-14em";

  document.getElementById('desktopChallenge').style.backgroundColor = '#e5b446';
  document.getElementById('desktopChallenge-h4').style.color = '#b3794c';
  document.getElementById('desktopChallengeP').style.color = '#ffffff';
  desktopChallengeP.innerHTML = 'Create a signage system for California Hall. The signage system must include a theme that relates to the word "California".';

  document.getElementById('desktopTools-h4').style.color = '#c23a2c';
  document.getElementById('desktopToolsP').style.color = '#000000';
  desktopToolsP.innerHTML = 'Adobe Illustrator <br>Adobe Photoshop';

  document.getElementById('desktopSolution').style.backgroundColor = '#f7f7db';
  document.getElementById('desktopSolution-h4').style.color = '#a6c852';
  document.getElementById('desktopSolutionP1').style.color = '#a6c852';
  document.getElementById('desktopSolutionP2').style.color = '#a6c852';
  document.getElementById('desktopSolutionP3').style.color = '#a6c852';
  desktopSolutionP1.innerHTML = 'California Hall is a newly built in 2019, and is the largest lecture hall throughout campus. It can seat up to 500 students. Since it is a new building, many students do not know how to properly navigate throughout the area, giving us the goal to create an effective signage system. Our theme for our signage system is based on the abundance of fruits and vegetables in California. UC Davis is known for its agriculture, therefore California is a great canvas to tell its story.';

  desktopSolutionP2.innerHTML = 'The first part of the project included an extensive amount of research. We had to go to the building and study the location and how to naturally navigate around the building. We studied the materials and lighingused in the building such as it contains fake bamboo and glass for the walls. We also did research on the typical users that will enter California Hall.';

  desktopSolutionP3.innerHTML = 'The signs are inspired by wooden creates with fruits and vegetables inside. The bright colors and illustrations of the signs will brighten up the white plain walls inside the building. The signs are decorative and informative at the same time. There are nine different types of signs created for the system.<br>To learn more about the signage system, feel free to look through the process manual below.';

  document.getElementById('desktopLink-h4').style.color = '#e5b446';
  desktopLinkA.setAttribute('href', 'https://drive.google.com/open?id=1g5W-aE7nfhjVGhqp-we5J9NXHbNk5nZP');
  desktopLinkP.innerHTML = 'View Process Manual'
});

// NEW ERA GARDEN
desktopNEGweb.addEventListener('click', function() {
  document.getElementById('workPage-desktop').style.display = 'block';
  document.getElementById('allProjects-desktop').style.display = 'none';
  document.getElementById('featured2').style.display = 'none';

  document.getElementById('workText-desktop').style.marginTop = "-73%"

  desktopTitle.innerHTML = 'NEW ERA GARDEN WEBSITE DESIGN';
  desktopCat.innerHTML = 'USER INTERFACE / USER EXPERIENCE';

  document.getElementById('colorBlock-desktop').style.backgroundColor = '#f9ac5b';
  document.getElementById('colorBlock-desktop').style.padding = '5.5em';

  document.getElementById('work-img-desktop').src = "images/projects/negweb.png";
  document.getElementById('work-img-desktop').alt = "New Era Garden Website";
  document.getElementById('work-img-desktop').height = "570";
  document.getElementById('work-img-desktop').style.marginTop = "-15em";

  document.getElementById('desktopChallenge').style.backgroundColor = '#89cf3c';
  document.getElementById('desktopChallenge-h4').style.color = '#ffffff';
  document.getElementById('desktopChallengeP').style.color = '#ffffff';
  desktopChallengeP.innerHTML = 'Create a clickable prototype of a website for New Era Garden to help expand their community and share their resources.';

  document.getElementById('desktopTools-h4').style.color = '#fb952e';
  document.getElementById('desktopToolsP').style.color = '#000000';
  desktopToolsP.innerHTML = 'Adobe Illustrator <br>InVision App';

  document.getElementById('desktopSolution').style.backgroundColor = '#ef1026';
  document.getElementById('desktopSolution-h4').style.color = '#fb952e';
  document.getElementById('desktopSolutionP1').style.color = '#ffffff';
  document.getElementById('desktopSolutionP2').style.color = '#ffffff';
  document.getElementById('desktopSolutionP3').style.color = '#ffffff';
  desktopSolutionP1.innerHTML = 'New Era Garden is a community garden located in the Sacramento Area. They provides empty plots to plant in for members. For this project, we received a real client that provided us background information, prices, and requirements for the website, and more. This project contained an extensive amount of research and user testing. As a group project, we all had individual tasks that we depended each other on. Part of my job was to create a clickable prototype of the website and test it on real life users with different interests. We did user testing throughout the community and also did some testing in UC Davis with students, professors, and staff.';

  desktopSolutionP2.innerHTML = 'The prototype itself is filled with colorful images of flowers and have colors that are inspired by their logo. The key features of the website include a login account, which is exclusive to members. With an account, members are allowed to log in their hours, pay their yearly dues, and post on the blog. There is an events page for socials and a blog page for articles. The website is accessible for anyone such as getting information about how to join, events, blogs, and contact.';

  desktopSolutionP3.innerHTML = '<strong>How the prototype works:</strong> There is no coding involved in this prototype. We used awebsite called InVision to create a function and clickable prototype. This website acts as actual website. (Due to over a hundred images, the prototype itself is a little slow until all the screens have loaded up, so please be patient with it)<br>* All stock images used for the website are creditted to its rightful owners.';

  document.getElementById('desktopLink-h4').style.color = '#89cf3c';
  desktopLinkA.setAttribute('href', 'https://projects.invisionapp.com/share/4PPK3B2MJFN#/screens');
  desktopLinkP.innerHTML = 'New Era Garden Website Prototype'
});

// MIX'D TRAIL MIX
desktopMIXD.addEventListener('click', function() {
  document.getElementById('workPage-desktop').style.display = 'block';
  document.getElementById('allProjects-desktop').style.display = 'none';
  document.getElementById('featured2').style.display = 'none';

  document.getElementById('workText-desktop').style.marginTop = "-115%"

  desktopTitle.innerHTML = 'GO NUTS ON MIX\'D TRAIL MIX';
  desktopCat.innerHTML = 'BRANDING DESIGN';

  document.getElementById('colorBlock-desktop').style.backgroundColor = '#b9e0ea';
  document.getElementById('colorBlock-desktop').style.padding = '5.5em';

  document.getElementById('work-img-desktop').src = "images/projects/mixd.png";
  document.getElementById('work-img-desktop').alt = "MIX\'D Trail Mix";
  document.getElementById('work-img-desktop').height = "902";
  document.getElementById('work-img-desktop').style.marginTop = "-14em";

  document.getElementById('desktopChallenge').style.backgroundColor = '#aad186';
  document.getElementById('desktopChallenge-h4').style.color = '#73b550';
  document.getElementById('desktopChallengeP').style.color = '#ffffff';
  desktopChallengeP.innerHTML = 'Choose any dried goods from the grocery store and create a whole new brand out of that product. The constraint is that the packaging must incorporate biomimicry and cater to the eldery.';

  document.getElementById('desktopTools-h4').style.color = '#82c6b5';
  document.getElementById('desktopToolsP').style.color = '#000';
  desktopToolsP.innerHTML = 'Adobe Illustrator<br>Adobe Photoshop<br>Adobe InDesign';

  document.getElementById('desktopSolution').style.backgroundColor = '#be8451';
  document.getElementById('desktopSolution-h4').style.color = '#522f18';
  document.getElementById('desktopSolutionP1').style.color = '#522f18';
  document.getElementById('desktopSolutionP2').style.color = '#522f18';
  document.getElementById('desktopSolutionP3').style.color = '#522f18';
  desktopSolutionP1.innerHTML = 'MIX\'D is an organic trail mix company that advocates for a healthy diet and lifestyle by focusing on portion control and having a variety of mixes that target specific health benefits for every individual. I wanted my brand to be playful and friendly to illustrate that eating healthy can be fun and exciting.';

  desktopSolutionP2.innerHTML = 'For the graphics, I focused on a friendly and exciting logos. The "M" in MIX\'D, represents a mountain with a trail of nuts. The colors scheme includes colors of nature such as green, blue, and brown. To add an even more playful touch, the cashew represents as an apostrophe in MIX\'D. The logo contains colors of nature, but for the business model, the main colors used are teal. This includes envelopes and letterheads. The main typefaces used for the brand is Quicksand and Death Star. Death Star is for the logo while Quicksand is for text and body copy. To learn more about the graphics, feel free to look at my graphic standard below.';

  desktopSolutionP3.innerHTML = 'As a brand, MIX\'D is also environmentally cautious and promotes waste reduction. The packaging design was inspired by bulks of protein powder. Buying in bulk reduces wastes because it provides a small amount of material for a large amount of quantity. To help with portion control, inside the packaging, there is a paper scooper to help with the portions rather than the plastic scoopers inside protein powders. To learn more about the packaging, feel free to look through my process manual below.';

  document.getElementById('desktopLink-h4').style.color = '#be8451';
  desktopLinkA.setAttribute('href', 'https://drive.google.com/open?id=1fdLAAR9aD-Zhzznu4moCIlFUeqiCPl96');
  desktopLinkP.innerHTML = 'Process Manual and Graphic Standard'
});

// HEALTHY BUDDY
desktopHealthy.addEventListener('click', function() {
  document.getElementById('workPage-desktop').style.display = 'block';
  document.getElementById('allProjects-desktop').style.display = 'none';
  document.getElementById('featured2').style.display = 'none';

  document.getElementById('workText-desktop').style.marginTop = "-79%"

  desktopTitle.innerHTML = 'HEALTHY BUDDY';
  desktopCat.innerHTML = 'USER INTERFACE / USER EXPERIENCE';

  document.getElementById('colorBlock-desktop').style.backgroundColor = '#b0dfed';
  document.getElementById('colorBlock-desktop').style.padding = '5.5em';

  document.getElementById('work-img-desktop').src = "images/projects/healthybud.png";
  document.getElementById('work-img-desktop').alt = "Healthy Buddy";
  document.getElementById('work-img-desktop').height = "610";
  document.getElementById('work-img-desktop').style.marginTop = "-14em";

  document.getElementById('desktopChallenge').style.backgroundColor = '#51b7da';
  document.getElementById('desktopChallenge-h4').style.color = '#ffffff';
  document.getElementById('desktopChallengeP').style.color = '#ffffff';
  desktopChallengeP.innerHTML = 'Design and create a mobile app or website promotes equity. After, create a working prototype using InVision App.';

  document.getElementById('desktopTools-h4').style.color = '#fdd30f';
  document.getElementById('desktopToolsP').style.color = '#000';
  desktopToolsP.innerHTML = 'Adobe Illustrator<br>InVision App';

  document.getElementById('desktopSolution').style.backgroundColor = '#f05143';
  document.getElementById('desktopSolution-h4').style.color = '#ffffff';
  document.getElementById('desktopSolutionP1').style.color = '#ffffff';
  document.getElementById('desktopSolutionP2').style.color = '#ffffff';
  document.getElementById('desktopSolutionP3').style.color = '#ffffff';
  desktopSolutionP1.innerHTML = 'For this project, the theme I chose is healthcare. There are many users that do not have any health insurance or benefits. Healthy Buddy is a free app for people who do not or can not afford health insurance. The main goal of Healthy Buddy is to keep its users as healthy as possible. This app targets users who do not have access to health insurance, especially recent graduates and people who work at home.';

  desktopSolutionP2.innerHTML = 'The first key features in this app is a daily health feature. This is the area where users can track their calories, their exercise, heart rate and more. The second key feature is data entry. Users are able to put and organize all their medical records. If a user is missing a shot, the app will notify that user. The third key feature is a high tech self-diagnosis with AI. This is for simple self-diagnosis such as rashes, allergies, and all kinds of symptoms. If the diagnosis is severe, the app will locate the user to the nearest and cheapest clinic. The last and forth feature is the emergency fund account. This is where users can save up money just in case they need to go see a doctor. It shows the cost to see how much that user needs to save.';

  desktopSolutionP3.innerHTML = '<strong>How the prototype works:</strong> This prototype only have two working tasks: the Daily Health and the Emergency Fund. The Daily Health is a linear step-by-step prototype and must complete each task to move on to the other. In The Emergency Fund, The user can either put their savings first or find different types of doctor appointments.';

  document.getElementById('desktopLink-h4').style.color = '#49c091';
  desktopLinkA.setAttribute('href', 'https://projects.invisionapp.com/share/STPEOMJA6P5#/screens');
  desktopLinkP.innerHTML = 'Healthy Buddy Prototype'
});

// ALFRED HITCHCOCK POSTER
desktopPoster.addEventListener('click', function() {
  document.getElementById('workPage-desktop').style.display = 'block';
  document.getElementById('allProjects-desktop').style.display = 'none';
  document.getElementById('featured2').style.display = 'none';

  document.getElementById('workText-desktop').style.marginTop = "-64%"

  desktopTitle.innerHTML = 'ALFRED HITCHCOCK<br>"MASTER OF SUSPENSE" POSTER';
  desktopCat.innerHTML = 'POSTER DESIGN';

  document.getElementById('colorBlock-desktop').style.backgroundColor = '#f5ca4c';
  document.getElementById('colorBlock-desktop').style.padding = '5.5em';

  document.getElementById('work-img-desktop').src = "images/projects/afposter.png";
  document.getElementById('work-img-desktop').alt = "Alfred Hitchcock \"Master of Suspense\" Poster";
  document.getElementById('work-img-desktop').height = "490";
  document.getElementById('work-img-desktop').style.marginTop = "-14em";

  document.getElementById('desktopChallenge').style.backgroundColor = '#040404';
  document.getElementById('desktopChallenge-h4').style.color = '#f5ca4c';
  document.getElementById('desktopChallengeP').style.color = '#ffffff';
  desktopChallengeP.innerHTML = 'Create a poster of a well-known and significant artist. The artist must be already dead and the poster has to show why he/she was successful during their lifetime. It must present their life’s work throughout the whole poster.';

  document.getElementById('desktopTools-h4').style.color = '#d52e21';
    document.getElementById('desktopToolsP').style.color = '#000';
  desktopToolsP.innerHTML = 'Adobe Photoshop';

  document.getElementById('desktopSolution').style.backgroundColor = '#f5ca4c';
  document.getElementById('desktopSolution-h4').style.color = '#040404';
  document.getElementById('desktopSolutionP1').style.color = '#040404';
  document.getElementById('desktopSolutionP2').style.color = '#040404';
  document.getElementById('desktopSolutionP3').style.color = '#040404';
  desktopSolutionP1.innerHTML = 'For this project, I created the poster using Adobe Photoshop. This project was best suited on Photoshop because it dealt with a lot of editing of photos. Since all the film images are old and scratchy, I edited its sharpness and reduced the noise to give a look of higher quality photos. This photo contains approximately 20 separate images that is combined into one poster. I chose Alfred Hitchcock because he is one of the most well known directors throughout history. He revolutionized the film industry by creating suspenseful films.';

  desktopSolutionP2.innerHTML = 'My font choices reflect on his movie posters. I chose the font that closely resembled the original posters that was created to give it more of a visual effect. I chose this particular Alfred Hitchcock quote rbecause it’s a quote that sums up all his movies, which is full of suspense. The choice of adding the filmstrip indicates that he is a director. The photos I chose are iconic scenes from his most famous movies such as Psycho, Rear Window, and Birds. The color choice I chose is a bright red to represent the blood in all his suspenseful films.';

  desktopSolutionP3.innerHTML = '*All images used for the poster are creditted to its rightful owners.';

  document.getElementById('desktopLink-h4').style.color = '#d52e21';
  desktopLinkA.setAttribute('href', 'https://drive.google.com/open?id=1Tgga_BJB5dtc4FCvUFCwMmRsQLXjRjtJ');
  desktopLinkP.innerHTML = 'Alfred Hitchcock Poster PDF'
});

// ALFRED HITCHCOCK ANIMATION
desktopAnim.addEventListener('click', function() {
  document.getElementById('workPage-desktop').style.display = 'block';
  document.getElementById('allProjects-desktop').style.display = 'none';
  document.getElementById('featured2').style.display = 'none';

  document.getElementById('workText-desktop').style.marginTop = "-73%"

  desktopTitle.innerHTML = 'ALFRED HITCHCOCK<br>"MASTER OF SUSPENSE"';
  desktopCat.innerHTML = 'ANIMATION';

  document.getElementById('colorBlock-desktop').style.backgroundColor = '#ee2124';
  document.getElementById('colorBlock-desktop').style.padding = '5.5em';

  document.getElementById('work-img-desktop').src = "images/projects/af-anim.png";
  document.getElementById('work-img-desktop').alt = "Alfred Hitchcock \"Master of Suspense\" Animation";
  document.getElementById('work-img-desktop').height = "561";
  document.getElementById('work-img-desktop').style.marginTop = "-13.5em";

  document.getElementById('desktopChallenge').style.backgroundColor = '#040404';
  document.getElementById('desktopChallenge-h4').style.color = '#ffffff';
  document.getElementById('desktopChallengeP').style.color = '#ffffff';
  desktopChallengeP.innerHTML = 'Create 30-45 second animation that displays the biography of a dead artist. You must combine text and graphics to achieve this goal.The constraint is that you are only allowed to use 20 words to convey your message.';

  document.getElementById('desktopTools-h4').style.color = '#040607';
  document.getElementById('desktopToolsP').style.color = '#000';
  desktopToolsP.innerHTML = 'AfterEffects';

  document.getElementById('desktopSolution').style.backgroundColor = '#ee2124';
  document.getElementById('desktopSolution-h4').style.color = '#ffffff';
  document.getElementById('desktopSolutionP1').style.color = '#ffffff';
  document.getElementById('desktopSolutionP2').style.color = '#ffffff';
  document.getElementById('desktopSolutionP3').style.color = '#ffffff';
  desktopSolutionP1.innerHTML = 'As a huge film buff, I already had a bunch of directors in mind to create an animation of. The first three people in my list were Charlie Chaplin, Alfred Hitchcock, and Stanley Kubrick. After writing a sheet or brainstorm and coming up with a 20 word biolography for each character, I decided to dedicate this animation on Alfred Hitchcock. One of the reasons why I chose him is that I already created a biography poster of him, so why not add this one to my collection.';

  desktopSolutionP2.innerHTML = 'For the assignment, I created two moodboards and style frames for the project. I wanted to show the very essence of the suspense in his films. I used a bold dark red as my spot color because it represents blood and murder. I created scenes from his most famous films with the use of typography. The typography I chose for this assignment was Futura Bold. I used Futura Bold because I wanted to express how striking and thrilling his films are. For the typography, I personified them as the victims in his films such as for Psycho, when the letters get cut in half while it takes a shower. I inputted the beginning of the quote and then all the famous cut scenes and ended it with the rest of the quote. The reason why I did this was to add the extra anticipation the audience gets when they watch his films.';

  desktopSolutionP3.innerHTML = '';

  document.getElementById('desktopLink-h4').style.color = '#ee2124';
  desktopLinkA.setAttribute('href', 'https://www.youtube.com/watch?v=xebVaJlDWCc&feature=emb_title');
  desktopLinkP.innerHTML = 'Alfred Hitchcock Biography Animation'
});

// DESIGN AND PLAY INSTINCT BOOK DESIGN
desktopBook.addEventListener('click', function() {
  document.getElementById('workPage-desktop').style.display = 'block';
  document.getElementById('allProjects-desktop').style.display = 'none';
  document.getElementById('featured2').style.display = 'none';

  document.getElementById('workText-desktop').style.marginTop = "-100%"

desktopTitle.innerHTML = 'DESIGN AND THE PLAY INSTINCT';
desktopCat.innerHTML = 'BOOK AND LAYOUT DESIGN';

  document.getElementById('colorBlock-desktop').style.backgroundColor = '#b7e0df';
  document.getElementById('colorBlock-desktop').style.padding = '5.5em';

  document.getElementById('work-img-desktop').src = "images/projects/book.png";
  document.getElementById('work-img-desktop').alt = "DESIGN AND THE PLAY INSTINCT";
  document.getElementById('work-img-desktop').height = "776";
  document.getElementById('work-img-desktop').style.marginTop = "-14em";

  document.getElementById('desktopChallenge').style.backgroundColor = '#44afaa';
  document.getElementById('desktopChallenge-h4').style.color = '#ffffff';
  document.getElementById('desktopChallengeP').style.color = '#ffffff';
  desktopChallengeP.innerHTML = 'Create a book design of Paul Rand’s book, “Design and the Play Instinct”. You must choose the size of your book but it can not exceed 9x9 inches. You must include all of the text (you may not alter or remove any) and all of the images provided. You may choose from these fonts: Futura, Gill Sans, Rockwell, Helvetica, Univers. You have one restraint of choosing only one spot color, but may use black, white, and gray.';

  document.getElementById('desktopTools-h4').style.color = '#44afaa';
    document.getElementById('desktopToolsP').style.color = '#000';
  desktopToolsP.innerHTML = 'Adobe InDesign<br>Adobe Photoshop<br>Adobe Illustrator';

  document.getElementById('desktopSolution').style.backgroundColor = '#71bfba';
  document.getElementById('desktopSolution-h4').style.color = '#ffffff';
  document.getElementById('desktopSolutionP1').style.color = '#ffffff';
  document.getElementById('desktopSolutionP2').style.color = '#ffffff';
  document.getElementById('desktopSolutionP3').style.color = '#ffffff';
  desktopSolutionP1.innerHTML = 'To start off, I wanted this layout design to be fun and engaging. Redesigning an art book, I strongly felt it was appropriate to fill the book with lots of fun layouts along with a combination of information and knowledge. I chose a book size of 6 inches by seven inches because I wanted it to be a portable book that anyone can take wherever such as the "The Little Red Book".';

  desktopSolutionP2.innerHTML = 'The typefaces I chose were Futura and Gill Sans. I used Futura for the titles and headings because I wanted this book to be bold and engaging. I wanted the words to pop out with the images. I chose Gill Sans Light for body text to balance the boldness of Futura. Gill Sans Light is an elegant san-serif font that is easy to read. I wanted it to be readable and enjoyable at the same time. As a constraint, I was able to choose only one color on top with white. I selected the color teal because it is a color that pops and mixes well with white.';

  desktopSolutionP3.innerHTML = 'By adding chapter pages to section information, this book contains over 70 pages. For instance, in the section “Crosswords”, the content provides a picture of the cross word and the text that Paul Rand’s book provides. This gives my book a great structural pattern that many books contain, so the audience doesn’t get confused as they go through the content.';

  document.getElementById('desktopLink-h4').style.color = '#71bfba';
  desktopLinkA.setAttribute('href', 'https://drive.google.com/open?id=1j9ESY82nH4KYPZQUJXUiNaFdanuMMNSc');
  desktopLinkP.innerHTML = 'Design and the Play Instinct Book Design'
});



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
  document.getElementById('allProjects-desktop').style.display = 'block';
  document.getElementById('workPage-desktop').style.display = 'none';
  document.getElementById('featured2').style.display = 'flex';

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
  document.getElementById('allProjects-desktop').style.display = 'block';
  document.getElementById('workPage-desktop').style.display = 'none';
  document.getElementById('featured2').style.display = 'flex';

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
  document.getElementById('allProjects-desktop').style.display = 'block';
  document.getElementById('workPage-desktop').style.display = 'none';
  document.getElementById('featured2').style.display = 'flex';

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
  document.getElementById('allProjects-desktop').style.display = 'block';
  document.getElementById('workPage-desktop').style.display = 'none';
  document.getElementById('featured2').style.display = 'flex';

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
  document.getElementById('allProjects-desktop').style.display = 'block';
  document.getElementById('workPage-desktop').style.display = 'none';
  document.getElementById('featured2').style.display = 'flex';

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
