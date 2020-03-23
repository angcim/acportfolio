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

// ****************************** TABLET VARIABLES ******************************
// PROJECTS
var tabletVECC = document.querySelector('.tablet-vecc');
var tabletWebPage = document.querySelector('#tablet-webpage');;
var tabletCCRG = document.querySelector('#tablet-ccrg');
var tabletCritica = document.querySelector('#tablet-critica');
var tabletSignage = document.querySelector('#tablet-signage');
var tabletNEGweb = document.querySelector('#tablet-negweb');
var tabletMIXD = document.querySelector('#tablet-mixd');

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
var desktopWebPage = document.querySelector('#desktop-webpage');;
var desktopCCRG = document.querySelector('#desktop-ccrg');
var desktopCritica = document.querySelector('#desktop-critica');
var desktopSignage = document.querySelector('#desktop-signage');
var desktopNEGweb = document.querySelector('#desktop-negweb');
var desktopMIXD = document.querySelector('#desktop-mixd');

//IMAGES
var desktopTitle = document.querySelector('#work-title-desktopHome');
var desktopCat = document.querySelector('#work-category-desktopHome');

//TEXT
var desktopChallenge = document.querySelector('#desktopHomeChallenge');
var desktopChallengeH4 = document.querySelector('#desktopHomeChallenge-h4');
var desktopChallengeP = document.querySelector('#desktopHomeChallengeP');
var desktopTools = document.querySelector('#desktopHomeTools');
var desktopToolsH4 = document.querySelector('#desktopHomeTools-h4');
var desktopToolsP = document.querySelector('#desktopHomeToolsP');
var desktopSolution = document.querySelector('#desktopHomeSolution');
var desktopSolutionH4 = document.querySelector('#desktopHomeSolution-h4');
var desktopSolutionP1 = document.querySelector('#desktopHomeSolutionP1');
var desktopSolutionP2 = document.querySelector('#desktopHomeSolutionP2');
var desktopSolutionP3 = document.querySelector('#desktopHomeSolutionP3');
var desktopLink = document.querySelector('#desktopHomeLink');
var desktopLinkH4 = document.querySelector('#desktopHomeLink-h4');
var desktopLinkA = document.querySelector('#desktopHomeLinkA');
var desktopLinkP = document.querySelector('#desktopHomeLinkP');

//BACK BUTTON
var desktopBack = document.querySelector('#back-desktopHome');

// HOVER LINKS
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


// HIDDEN CONTACT HEADER: PURPLE > PINK
// contactIcon.addEventListener('click', function() {
//   document.querySelector('#mobileHomepage').style.display = 'none';
//   document.querySelector('#mobileContact').style.display = 'block';
//   document.querySelector('body').style.backgroundColor = '#ffbca4';
// });

// ****************************** TABLET PROJECTS ****************************************
//BACK BUTTON
tabletBack.addEventListener('click', function() {
  document.getElementById('featured').style.display = 'flex';
  document.getElementById('tabletIntro').style.display = 'flex';
  document.getElementById('allProjects').style.display = 'block';
  document.getElementById('workPage-tablet').style.display = 'none';
});

// EV EXPLORER
tabletVECC.addEventListener('click', function() {
  document.getElementById('workPage-tablet').style.display = 'block';
  document.getElementById('allProjects').style.display = 'none';
  document.getElementById('featured').style.display = 'none';
  document.getElementById('tabletIntro').style.display = 'none';

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
  tabletSolutionP1.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  document.getElementById('tabletLink-h4').style.color = '#b0d757';
  tabletLinkA.setAttribute('href', 'https://drive.google.com/open?id=1P9Zzf-5mowXXw1jZ_AyyqRIhjVnSk1Dz');
  tabletLinkP.innerHTML = 'EV Explorer Mockup Designs PDF'
});

//SPOTLIGHT WEB PAGE
tabletWebPage.addEventListener('click', function() {
  document.getElementById('workPage-tablet').style.display = 'block';
  document.getElementById('allProjects').style.display = 'none';
  document.getElementById('featured').style.display = 'none';
    document.getElementById('tabletIntro').style.display = 'none';

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
  tabletSolutionP1.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  document.getElementById('tabletLink-h4').style.color = '#ef9029';
  tabletLinkA.setAttribute('href', 'https://www.spotlight-education.com/video-caasp-elpac-reports');
  tabletLinkP.innerHTML = 'Spotlight Education Video CAASP and ELPAC Reports';
});

// CCRG INFOGRAPHIC REPORT
tabletCCRG.addEventListener('click', function() {
  document.getElementById('workPage-tablet').style.display = 'block';
  document.getElementById('allProjects').style.display = 'none';
  document.getElementById('featured').style.display = 'none';
    document.getElementById('tabletIntro').style.display = 'none';

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
  tabletToolsP.innerHTML = 'Adobe Illustrator';

  document.getElementById('tabletSolution').style.backgroundColor = '#274169';
  document.getElementById('tabletSolution-h4').style.color = '#ffffff';
  document.getElementById('tabletSolutionP1').style.color = '#ffffff';
  document.getElementById('tabletSolutionP2').style.color = '#ffffff';
  document.getElementById('tabletSolutionP3').style.color = '#ffffff';
  tabletSolutionP1.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  document.getElementById('tabletLink-h4').style.color = '#65b7ce';
  tabletLinkA.setAttribute('href', 'https://drive.google.com/open?id=1FZ-x49gnL7Oakhs8ziCH-eiFA78wfm6X');
  tabletLinkP.innerHTML = 'View PDF'
});

// CRITICA PORTFOLIO REVIEW
tabletCritica.addEventListener('click', function() {
  document.getElementById('workPage-tablet').style.display = 'block';
  document.getElementById('allProjects').style.display = 'none';
  document.getElementById('featured').style.display = 'none';
    document.getElementById('tabletIntro').style.display = 'none';

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
  tabletChallengeP.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

  document.getElementById('tabletTools').style.backgroundColor = '#ffffff';
  document.getElementById('tabletTools-h4').style.color = '#c24273';
  document.getElementById('tabletToolsP').style.color = '#000000';
  tabletToolsP.innerHTML = 'Adobe Illustrator <br>Atom Code Editor<br>Languages: HTML, CSS, Javascript';

  document.getElementById('tabletSolution').style.backgroundColor = '#c24273';
  document.getElementById('tabletSolution-h4').style.color = '#ffffff';
  document.getElementById('tabletSolutionP1').style.color = '#ffffff';
  document.getElementById('tabletSolutionP2').style.color = '#ffffff';
  document.getElementById('tabletSolutionP3').style.color = '#ffffff';
  tabletSolutionP1.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  document.getElementById('tabletLink-h4').style.color = '#28477c';
  tabletLinkA.setAttribute('href', 'https://angcim.github.io/des157-g/process/development/final/index.html');
  tabletLinkP.innerHTML = 'Critica Portfolio Review'
});


// INDULDGE IN ABUNDANCE
tabletSignage.addEventListener('click', function() {
  document.getElementById('workPage-tablet').style.display = 'block';
  document.getElementById('allProjects').style.display = 'none';
  document.getElementById('featured').style.display = 'none';
    document.getElementById('tabletIntro').style.display = 'none';

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
    document.getElementById('tabletIntro').style.display = 'none';

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
    document.getElementById('tabletIntro').style.display = 'none';

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


// *********** DESKTOP WORK PAGES ***************
// ********** DESKTOP WORK PAGES **********
//BACK BUTTON
desktopBack.addEventListener('click', function() {
  document.getElementById('featured2').style.display = 'flex';
  document.getElementById('allProjects-desktop').style.display = 'block';
  document.getElementById('workPage-desktopHome').style.display = 'none';
});

// EV EXPLORER
desktopVECC.addEventListener('click', function() {
  document.getElementById('workPage-desktopHome').style.display = 'block';
  document.getElementById('allProjects-desktop').style.display = 'none';
  document.getElementById('featured2').style.display = 'none';

  document.getElementById('workText-desktopHome').style.marginTop = "-103%";

  desktopTitle.innerHTML = 'EV EXPLORER';
  desktopCat.innerHTML = 'USER INTERFACE / USER EXPERIENCE';

  document.getElementById('colorBlock-desktopHome').style.backgroundColor = '#a2d0ed';
  document.getElementById('colorBlock-desktopHome').style.padding = '5.5em';

  document.getElementById('work-img-desktopHome').src = "images/projects/evexplorer.png";
  document.getElementById('work-img-desktopHome').alt = "DESIGN AND THE PLAY INSTINCT";
  document.getElementById('work-img-desktopHome').height = "799";
  document.getElementById('work-img-desktopHome').style.marginTop = "-14em";

  document.getElementById('desktopHomeChallenge').style.backgroundColor = '#83cdd5';
  document.getElementById('desktopHomeChallenge-h4').style.color = '#ffffff';
  document.getElementById('desktopHomeChallengeP').style.color = '#ffffff';
  desktopChallengeP.innerHTML = 'Research all the different VECCs tools and their features help redesign the EV Explorer website.';

  document.getElementById('desktopHomeTools-h4').style.color = '#ef8b6e';
  document.getElementById('desktopHomeToolsP').style.color = '#000000';
  desktopToolsP.innerHTML = 'Adobe Illustrator<br>AfterEffects';

  document.getElementById('desktopHomeSolution').style.backgroundColor = '#f8d053';
  document.getElementById('desktopHomeSolution-h4').style.color = '#ffffff';
  document.getElementById('desktopHomeSolutionP1').style.color = '#ffffff';
  document.getElementById('desktopHomeSolutionP2').style.color = '#ffffff';
  document.getElementById('desktopHomeSolutionP3').style.color = '#ffffff';
  desktopSolutionP1.innerHTML = 'For my internship at cEnergi, I was primarily a UX researcher and graphic designer. The biggest project I was involved in was redesigning EV Explorer. EV Explorer is a vehicle energy cost calculator that helps users compare fuel costs and savings between different types of vehicles. The goal of EV Explorer is to promote electric vehicles by allowing users to see its benefits in comparison to gas only vehicles.';

    desktopSolutionP2.innerHTML = 'The first part of the project included researching 12 different VECCs. Each week, I had to look through and explore all the different functions of the calculators and input the data through a spreadsheet. With months of research, I had to decide and make a case on which calculators should be used for usability testing. Throughout summer and half of fall, we did usability tests such as surveys with students from UC Davis and different car shows from California. We asked them to explore each vcc and answer survey questions in the end about how easy and useful each information that was presented.';

      desktopSolutionP3.innerHTML = 'After my internship ended and the user testing was completed, I moved to part-time and became the UI designer for EV Explorer. Collectively, we gathered all of the data between different users and started creating the new design for EV Explorer. The new EV Explorer has a more playful and inviting look. It uses light simple colors and icons. In the new mockup, the landing page has an illustration of an electric vehicle with a charging station. It also includes a small paragraph of the benefits of EVs and a “How it Works” in the bottom. Once the users select “Get Started”, there will be a popup of required inputs the user has to answer to gather enough information for the results. In the outputs page includes a graph that compares at least two different cars. On the right side presents the environmental benefits of the electric vehicle in terms of emissions, air quality, and petroleum. The environmental benefits includes an animated scene related to the topic. In the bottom of the page is all of the customizable settings. The customizeable settings helps users put in more detailed information to get the most accurate data. It includes the user’s driving behavior, types of vehicles, fuel costs, and finance costs.';

  document.getElementById('desktopHomeLink-h4').style.color = '#b0d757';
  desktopLinkA.setAttribute('href', 'https://drive.google.com/open?id=1P9Zzf-5mowXXw1jZ_AyyqRIhjVnSk1Dz');
  desktopLinkP.innerHTML = 'EV Explorer Mockup Designs PDF'
});

//SPOTLIGHT WEB PAGE
desktopWebPage.addEventListener('click', function() {
  document.getElementById('workPage-desktopHome').style.display = 'block';
  document.getElementById('allProjects-desktop').style.display = 'none';
  document.getElementById('featured2').style.display = 'none';

  document.getElementById('workText-desktopHome').style.marginTop = "-33%";

  desktopTitle.innerHTML = 'SPOTLIGHT WEB PAGE <br><em> "VIDEO CAASPP AND ELPAC REPORTS"</em>';
  desktopCat.innerHTML = 'WEB DESIGN';

  document.getElementById('colorBlock-desktopHome').style.backgroundColor = '#447bb2';
  document.getElementById('colorBlock-desktopHome').style.padding = '5.5em';

  document.getElementById('work-img-desktopHome').src = "images/projects/webpage.png";
  document.getElementById('work-img-desktopHome').alt = "Spotlight Web Page";
  document.getElementById('work-img-desktopHome').height = "368";
  document.getElementById('work-img-desktopHome').style.marginTop = "-13em";

  document.getElementById('desktopHomeChallenge').style.backgroundColor = '#255c7f';
  document.getElementById('desktopHomeChallenge-h4').style.color = '#ffffff';
  document.getElementById('desktopHomeChallengeP').style.color = '#ffffff';
  desktopChallengeP.innerHTML = 'Create a Web Page called "Video CAASPP and ELPAC Reports" for Spotlight Education\'s website. The web page must have the exact similar look and feel as the rest of the website. Find a family friendly image of a parent watching a video with a child.';

  document.getElementById('desktopHomeTools-h4').style.color = '#255c7f';
  document.getElementById('desktopHomeToolsP').style.color = '#000000';
  desktopToolsP.innerHTML = 'Adobe Illustrator<br>Adobe Photoshop<br>Squarespace<br>Languages: HTML and CSS';

  document.getElementById('desktopHomeSolution').style.backgroundColor = '#ef9029';
  document.getElementById('desktopHomeSolution-h4').style.color = '#ffffff';
  document.getElementById('desktopHomeSolutionP1').style.color = '#ffffff';
  document.getElementById('desktopHomeSolutionP2').style.color = '#ffffff';
  document.getElementById('desktopHomeSolutionP3').style.color = '#ffffff';
  desktopSolutionP1.innerHTML = 'As a small project for Spotlight Education, I had to create a new web page for the website. The web page is called “Video CAASPP and ELPAC Reports”. The new web page had to look similar to another web page that was already in the website. I was given a list of guidelines on what to put on the website such as having two call of actions and finding a stock image of a parent watching a video with a child. ';

  desktopSolutionP2.innerHTML = 'The first step of this project was to study the website and create a mockup on Illustrator before implementing it. I created a mockup on Illustrator first because it will be easier to make changes early on before its implemented on the website. I studied the styles used on the website such as the color, typefaces, and images used to help create a consist web page. After finding an image for the web page, I edited the photo through photoshop. I changed the color balance and saturation to blue and used content aware fill to stretch the image. After finishing the mockup and getting it approved, I implemented it on Squarespace, which is where the website was created.';

    desktopSolutionP3.innerHTML = '';

  document.getElementById('desktopHomeLink-h4').style.color = '#ef9029';
  desktopLinkA.setAttribute('href', 'https://www.spotlight-education.com/video-caasp-elpac-reports');
  desktopLinkP.innerHTML = 'Spotlight Education Video CAASP and ELPAC Reports';
});

// CCRG INFOGRAPHIC REPORT
desktopCCRG.addEventListener('click', function() {
  document.getElementById('workPage-desktopHome').style.display = 'block';
  document.getElementById('allProjects-desktop').style.display = 'none';
  document.getElementById('featured2').style.display = 'none';

  document.getElementById('workText-desktopHome').style.marginTop = "-83%";

  desktopTitle.innerHTML = 'COLLEGE CAREER AND READINESS GUIDE';
  desktopCat.innerHTML = 'INFOGRAPHIC REPORT';

  document.getElementById('colorBlock-desktopHome').style.backgroundColor = '#65b7ce';
  document.getElementById('colorBlock-desktopHome').style.padding = '5.5em';

  document.getElementById('work-img-desktopHome').src = "images/projects/ccrg.png";
  document.getElementById('work-img-desktopHome').alt = "CCRG Infographic Report";
  document.getElementById('work-img-desktopHome').height = "638";
  document.getElementById('work-img-desktopHome').style.marginTop = "-13.5em";

  document.getElementById('desktopHomeChallenge').style.backgroundColor = '#41a1b7';
  document.getElementById('desktopHomeChallenge-h4').style.color = '#ffffff';
  document.getElementById('desktopHomeChallengeP').style.color = '#ffffff';
  desktopChallengeP.innerHTML = 'Create an infographic report for CCRG. The report should include an outline of a student with a grad cap and a brain in the center. Around the student will be surrounded by thought bubbles with text and images. Brainstorm and think of an illustration that would best fit inside the brain for the report. After, create a save a date for that infographic report.';

  document.getElementById('desktopHomeTools-h4').style.color = '#99b8d8';
  document.getElementById('desktopHomeToolsP').style.color = '#000000';
  desktopToolsP.innerHTML = 'Adobe Illustrator<br>Atom Text Editor<br>Eclipse';

  document.getElementById('desktopHomeSolution').style.backgroundColor = '#274169';
  document.getElementById('desktopHomeSolution-h4').style.color = '#ffffff';
  document.getElementById('desktopHomeSolutionP1').style.color = '#ffffff';
  document.getElementById('desktopHomeSolutionP2').style.color = '#ffffff';
  document.getElementById('desktopHomeSolutionP3').style.color = '#ffffff';
  desktopSolutionP1.innerHTML = 'For Spotlight Education, I had to create an infographic report called “College and Career Readiness Guide”. This page is the front page of the CCRG reports and acts as as an illustrated table of contents for the students and parents. The page includes up to seven bubbles, but this mockup only shows five pages. After creating the report, I had make a “Save the Date” that would then be sent through mailchimp. For this design, the client wanted it to have the image of the student with the brain and grad cap. Since the two pieces of work are related, I made sure I used the same color scheme as the infographic report for consistency.';

    desktopSolutionP2.innerHTML = 'The main requirements of the report includes a student with a grad cap and a brain in the middle of the page. Around the student includes thought bubbles that represents a page of each report. The order of the pages goes from the bottom left all the up, and then to the bottom right page. Each thought bubble has the page number, title of the page, a small icon that represents the page, and brief text that directs the user to that page. The colors used for the infographic report are different shades of blue and white because it’s calm and easy on the eyes for students and parents. Inside the brain contains puzzle pieces of different subjects from school to represent.';

      desktopSolutionP3.innerHTML = 'The infographic report was made in Adobe Illustrator, but then was later implemented through Eclipse, which is an IDE. I used Eclipse to create a BIRT template of the report. For the BIRT template, I hard coded the text and images, and used CSS to style the text. The BIRT templates would be then given to our team to create params that would allow mass production of the product.';

  document.getElementById('desktopHomeLink-h4').style.color = '#65b7ce';
  desktopLinkA.setAttribute('href', 'https://drive.google.com/open?id=1FZ-x49gnL7Oakhs8ziCH-eiFA78wfm6X');
  desktopLinkP.innerHTML = 'View PDF'
});

// CRITICA PORTFOLIO REVIEW
desktopCritica.addEventListener('click', function() {
  document.getElementById('workPage-desktopHome').style.display = 'block';
  document.getElementById('allProjects-desktop').style.display = 'none';
  document.getElementById('featured2').style.display = 'none';

  document.getElementById('workText-desktopHome').style.marginTop = "-34%";

  desktopTitle.innerHTML = 'CRITICA PORTFOLIO REVIEW';
  desktopCat.innerHTML = 'WEBSITE DESIGN';

  document.getElementById('colorBlock-desktopHome').style.backgroundColor = '#b5cbea';
  document.getElementById('colorBlock-desktopHome').style.padding = '5.5em';

  document.getElementById('work-img-desktopHome').src = "images/projects/critica.png";
  document.getElementById('work-img-desktopHome').alt = "Critica Portfolio Review";
  document.getElementById('work-img-desktopHome').height = "259";
  document.getElementById('work-img-desktopHome').style.marginTop = "-15em";

  document.getElementById('desktopHomeChallenge').style.backgroundColor = '#28477c';
  document.getElementById('desktopHomeChallenge-h4').style.color = '#90a9d6';
  document.getElementById('desktopHomeChallengeP').style.color = '#ffffff';
  desktopChallengeP.innerHTML = 'Create a browser-based interactive exploration on your topic for DIS 2019 or C&C, hand-coded with the front-end stack and your choice (option) of a js libraries, such as p5.js, and css libraries';

  document.getElementById('desktopHomeTools-h4').style.color = '#c24273';
  document.getElementById('desktopHomeToolsP').style.color = '#000000';
  desktopToolsP.innerHTML = 'Adobe Illustrator <br>Atom Text Editor<br>Languages: HTML, CSS, Javascript';

  document.getElementById('desktopHomeSolution').style.backgroundColor = '#c24273';
  document.getElementById('desktopHomeSolution-h4').style.color = '#ffffff';
  document.getElementById('desktopHomeSolutionP1').style.color = '#ffffff';
  document.getElementById('desktopHomeSolutionP2').style.color = '#ffffff';
  document.getElementById('desktopHomeSolutionP3').style.color = '#ffffff';
  desktopSolutionP1.innerHTML = 'For this project, the topic I chose was education for graphic designers called Critica. Critica is an online community for all designers to help improve their online portfolio. The goal of the website is to give more opportunities to designers who do not have the proper resources to constantly improve their work. For instance, there are many designers out there that are not in any college programs or don’t know any other designers/professors that can help them properly critique their work. ';

      desktopSolutionP2.innerHTML = 'Critica is unique from known portfolio websites like Behance and Dribbble because it does not focus on showcasing work but it focuses on improving each other’s work. The design focuses on a playful and inviting environment for designers with functionalities that allows users to upload their work and have designers add comments on how it can improve. The website contains specific guidelines to help users give constructive criticism rather than saying something is “good” or “bad”.';

        desktopSolutionP3.innerHTML = '<strong>How it works:</strong> This is a working prototype with limited functions. It contains one html file and uses javascript to give it the behavior or multiple pages. It includes a community page with three pieces of work that the user can click on. It will then direct users to the page of the work selected, and the users can drag around the image and write comments. If the user is new, they can select “Get Started” and it will take them to the community page with pop up that has instructions on how to critique a piece of work. The next page is an upload pop up page. This is where users can put their work in the website by uploading the file, project name, designer’s name, and description. It will later then be sent for approval by moderators. (For the prototype, users can upload files and input text, but it will not be processed). The last page is the guidelines, which informs users on rules and tips.';

  document.getElementById('desktopHomeLink-h4').style.color = '#28477c';
  desktopLinkA.setAttribute('href', 'https://angcim.github.io/des157-g/process/development/final/index.html');
  desktopLinkP.innerHTML = 'Critica Portfolio Review'
});

// INDULDGE IN ABUNDANCE
desktopSignage.addEventListener('click', function() {
  document.getElementById('workPage-desktopHome').style.display = 'block';
  document.getElementById('allProjects-desktop').style.display = 'none';
  document.getElementById('featured2').style.display = 'none';

  document.getElementById('workText-desktopHome').style.marginTop = "-83%";

  desktopTitle.innerHTML = 'CALIFORNIA HALL SIGNAGE SYSTEM<br>"INDULDGE IN ABUNDANCE"';
  desktopCat.innerHTML = 'ENVIRONMENTAL GRAPHIC DESIGN';

  document.getElementById('colorBlock-desktopHome').style.backgroundColor = '#a6c852';
  document.getElementById('colorBlock-desktopHome').style.padding = '5.5em';

  document.getElementById('work-img-desktopHome').src = "images/projects/signage.png";
  document.getElementById('work-img-desktopHome').alt = "California Hall Signage System";
  document.getElementById('work-img-desktopHome').height = "641";
  document.getElementById('work-img-desktopHome').style.marginTop = "-14em";

  document.getElementById('desktopHomeChallenge').style.backgroundColor = '#e5b446';
  document.getElementById('desktopHomeChallenge-h4').style.color = '#b3794c';
  document.getElementById('desktopHomeChallengeP').style.color = '#ffffff';
  desktopChallengeP.innerHTML = 'Create a signage system for California Hall. The signage system must include a theme that relates to the word "California".';

  document.getElementById('desktopHomeTools-h4').style.color = '#c23a2c';
  document.getElementById('desktopHomeToolsP').style.color = '#000000';
  desktopToolsP.innerHTML = 'Adobe Illustrator <br>Adobe Photoshop';

  document.getElementById('desktopHomeSolution').style.backgroundColor = '#f7f7db';
  document.getElementById('desktopHomeSolution-h4').style.color = '#a6c852';
  document.getElementById('desktopHomeSolutionP1').style.color = '#a6c852';
  document.getElementById('desktopHomeSolutionP2').style.color = '#a6c852';
  document.getElementById('desktopHomeSolutionP3').style.color = '#a6c852';
  desktopSolutionP1.innerHTML = 'California Hall is a newly built in 2019, and is the largest lecture hall throughout campus. It can seat up to 500 students. Since it is a new building, many students do not know how to properly navigate throughout the area, giving us the goal to create an effective signage system. Our theme for our signage system is based on the abundance of fruits and vegetables in California. UC Davis is known for its agriculture, therefore California is a great canvas to tell its story.';

  desktopSolutionP2.innerHTML = 'The first part of the project included an extensive amount of research. We had to go to the building and study the location and how to naturally navigate around the building. We studied the materials and lighingused in the building such as it contains fake bamboo and glass for the walls. We also did research on the typical users that will enter California Hall.';

  desktopSolutionP3.innerHTML = 'The signs are inspired by wooden creates with fruits and vegetables inside. The bright colors and illustrations of the signs will brighten up the white plain walls inside the building. The signs are decorative and informative at the same time. There are nine different types of signs created for the system.<br>To learn more about the signage system, feel free to look through the process manual below.';

  document.getElementById('desktopHomeLink-h4').style.color = '#e5b446';
  desktopLinkA.setAttribute('href', 'https://drive.google.com/open?id=1g5W-aE7nfhjVGhqp-we5J9NXHbNk5nZP');
  desktopLinkP.innerHTML = 'View Process Manual'
});

// NEW ERA GARDEN
desktopNEGweb.addEventListener('click', function() {
  document.getElementById('workPage-desktopHome').style.display = 'block';
  document.getElementById('allProjects-desktop').style.display = 'none';
  document.getElementById('featured2').style.display = 'none';

  document.getElementById('workText-desktop').style.marginTop = "-73%"

  desktopTitle.innerHTML = 'NEW ERA GARDEN WEBSITE DESIGN';
  desktopCat.innerHTML = 'USER INTERFACE / USER EXPERIENCE';

  document.getElementById('colorBlock-desktopHome').style.backgroundColor = '#f9ac5b';
  document.getElementById('colorBlock-desktopHome').style.padding = '5.5em';

  document.getElementById('work-img-desktopHome').src = "images/projects/negweb.png";
  document.getElementById('work-img-desktopHome').alt = "New Era Garden Website";
  document.getElementById('work-img-desktopHome').height = "570";
  document.getElementById('work-img-desktopHome').style.marginTop = "-15em";

  document.getElementById('desktopHomeChallenge').style.backgroundColor = '#89cf3c';
  document.getElementById('desktopHomeChallenge-h4').style.color = '#ffffff';
  document.getElementById('desktopHomeChallengeP').style.color = '#ffffff';
  desktopChallengeP.innerHTML = 'Create a clickable prototype of a website for New Era Garden to help expand their community and share their resources.';

  document.getElementById('desktopHomeTools-h4').style.color = '#fb952e';
  document.getElementById('desktopHomeToolsP').style.color = '#000000';
  desktopToolsP.innerHTML = 'Adobe Illustrator <br>InVision App';

  document.getElementById('desktopHomeSolution').style.backgroundColor = '#ef1026';
  document.getElementById('desktopHomeSolution-h4').style.color = '#fb952e';
  document.getElementById('desktopHomeSolutionP1').style.color = '#ffffff';
  document.getElementById('desktopHomeSolutionP2').style.color = '#ffffff';
  document.getElementById('desktopHomeSolutionP3').style.color = '#ffffff';
  desktopSolutionP1.innerHTML = 'New Era Garden is a community garden located in the Sacramento Area. They provides empty plots to plant in for members. For this project, we received a real client that provided us background information, prices, and requirements for the website, and more. This project contained an extensive amount of research and user testing. As a group project, we all had individual tasks that we depended each other on. Part of my job was to create a clickable prototype of the website and test it on real life users with different interests. We did user testing throughout the community and also did some testing in UC Davis with students, professors, and staff.';

  desktopSolutionP2.innerHTML = 'The prototype itself is filled with colorful images of flowers and have colors that are inspired by their logo. The key features of the website include a login account, which is exclusive to members. With an account, members are allowed to log in their hours, pay their yearly dues, and post on the blog. There is an events page for socials and a blog page for articles. The website is accessible for anyone such as getting information about how to join, events, blogs, and contact.';

  desktopSolutionP3.innerHTML = '<strong>How the prototype works:</strong> There is no coding involved in this prototype. We used awebsite called InVision to create a function and clickable prototype. This website acts as actual website. (Due to over a hundred images, the prototype itself is a little slow until all the screens have loaded up, so please be patient with it)<br>* All stock images used for the website are creditted to its rightful owners.';

  document.getElementById('desktopHomeLink-h4').style.color = '#89cf3c';
  desktopLinkA.setAttribute('href', 'https://projects.invisionapp.com/share/4PPK3B2MJFN#/screens');
  desktopLinkP.innerHTML = 'New Era Garden Website Prototype'
});

// MIX'D TRAIL MIX
desktopMIXD.addEventListener('click', function() {
  document.getElementById('workPage-desktopHome').style.display = 'block';
  document.getElementById('allProjects-desktop').style.display = 'none';
  document.getElementById('featured2').style.display = 'none';

  document.getElementById('workText-desktopHome').style.marginTop = "-115%"

  desktopTitle.innerHTML = 'GO NUTS ON MIX\'D TRAIL MIX';
  desktopCat.innerHTML = 'BRANDING DESIGN';

  document.getElementById('colorBlock-desktopHome').style.backgroundColor = '#b9e0ea';
  document.getElementById('colorBlock-desktopHome').style.padding = '5.5em';

  document.getElementById('work-img-desktopHome').src = "images/projects/mixd.png";
  document.getElementById('work-img-desktopHome').alt = "MIX\'D Trail Mix";
  document.getElementById('work-img-desktopHome').height = "902";
  document.getElementById('work-img-desktopHome').style.marginTop = "-14em";

  document.getElementById('desktopHomeChallenge').style.backgroundColor = '#aad186';
  document.getElementById('desktopHomeChallenge-h4').style.color = '#73b550';
  document.getElementById('desktopHomeChallengeP').style.color = '#ffffff';
  desktopChallengeP.innerHTML = 'Choose any dried goods from the grocery store and create a whole new brand out of that product. The constraint is that the packaging must incorporate biomimicry and cater to the eldery.';

  document.getElementById('desktopHomeTools-h4').style.color = '#82c6b5';
  document.getElementById('desktopHomeToolsP').style.color = '#000';
  desktopToolsP.innerHTML = 'Adobe Illustrator<br>Adobe Photoshop<br>Adobe InDesign';

  document.getElementById('desktopHomeSolution').style.backgroundColor = '#be8451';
  document.getElementById('desktopHomeSolution-h4').style.color = '#522f18';
  document.getElementById('desktopHomeSolutionP1').style.color = '#522f18';
  document.getElementById('desktopHomeSolutionP2').style.color = '#522f18';
  document.getElementById('desktopHomeSolutionP3').style.color = '#522f18';
  desktopSolutionP1.innerHTML = 'MIX\'D is an organic trail mix company that advocates for a healthy diet and lifestyle by focusing on portion control and having a variety of mixes that target specific health benefits for every individual. I wanted my brand to be playful and friendly to illustrate that eating healthy can be fun and exciting.';

  desktopSolutionP2.innerHTML = 'For the graphics, I focused on a friendly and exciting logos. The "M" in MIX\'D, represents a mountain with a trail of nuts. The colors scheme includes colors of nature such as green, blue, and brown. To add an even more playful touch, the cashew represents as an apostrophe in MIX\'D. The logo contains colors of nature, but for the business model, the main colors used are teal. This includes envelopes and letterheads. The main typefaces used for the brand is Quicksand and Death Star. Death Star is for the logo while Quicksand is for text and body copy. To learn more about the graphics, feel free to look at my graphic standard below.';

  desktopSolutionP3.innerHTML = 'As a brand, MIX\'D is also environmentally cautious and promotes waste reduction. The packaging design was inspired by bulks of protein powder. Buying in bulk reduces wastes because it provides a small amount of material for a large amount of quantity. To help with portion control, inside the packaging, there is a paper scooper to help with the portions rather than the plastic scoopers inside protein powders. To learn more about the packaging, feel free to look through my process manual below.';

  document.getElementById('desktopHomeLink-h4').style.color = '#be8451';
  desktopLinkA.setAttribute('href', 'https://drive.google.com/open?id=1fdLAAR9aD-Zhzznu4moCIlFUeqiCPl96');
  desktopLinkP.innerHTML = 'Process Manual and Graphic Standard'
});

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
