/* --------------------------------- creating data */

/* creating name*/
var name = 'Zachariah col';
/* creating address */
var address = "Austin Texas";
/* creating current education header */
var currentEduHeader = "Current Education";
/* creating current education info */
var currentEduInfo = "Udacity's Front-End Web Developer Program";

/* creating experience header */
var experienceHeader = "Experience";
/* creating experience title */
var experienceTitle = "DoubleHorn - Web Developer Intern";
/* creating experience date */
var experienceDate = "June 2016- August 2016 . 3 month's";
/* creating experience info */
var experienceInfo = "Worked with Senior Engineers on small internal AngularJS application creation and maintenance. Extensive use of bootstrap and leading web frameworks. Experience with Linux CLI for setup of development environments and Apache and Nginx.";

/* creating education header */
var eduHeader = "Education";

/* creating education */
var education = [
  {
    class:"Udacity",
    date:"May, 2017", 
    info: "Intro To Html, Css, Responsive Web Design Fundamentals and Javascript Basics"
  },
  {
    class:"Codecademy",
    date:"2016",
    info: "Html and Css, Commandline, Javascript, Jquery, Angular 1"
  },
];

/* creating volunteer header */
var volHeader = "Volunteer";
/* creating volunteer title */
var volTitle = "The Iron Yard Teaching Assistant";
/* creating volunteer date */
var volDate = "March 21st, 2016 - April 11th 2016";
/* creating volunteer info */
var volInfo = "Assisted in teaching the fundamental's of Programming, using the Scratch Platform and Building mini-game's.";




/* bringing in name */
 document.getElementById("name").innerHTML = name;
/* bringing in address */
 document.getElementById("address").innerHTML = address;
/* bringing in current edu header */
 document.getElementById("currentEduHeader").innerHTML = currentEduHeader;
/* bringing in current edu info */
 document.getElementById("currentEduInfo").innerHTML = currentEduInfo;

/* bringing in experience header */
 document.getElementById("experienceHeader").innerHTML = experienceHeader;
/* bringing in experience title */
 document.getElementById("experienceTitle").innerHTML = experienceTitle;
/* bringing in experience date */
 document.getElementById("experienceDate").innerHTML = experienceDate;
/* bringing in experience info */
 document.getElementById("experienceInfo").innerHTML = experienceInfo;

/* bringing in education header */
 document.getElementById("eduHeader").innerHTML = eduHeader;
/* bringing education info to page */
for (var i = 0; i < education.length; i++) {
      /* creating education html */
      eduClassHtml = "<h2 id='eduClassHtml'>data</h2>";
      eduDateHtml = "<h3 id='eduDateHtml'>data</h3>";
      eduInfoHtml = "<h2 id='eduInfoHtml'>data</h2>";
      /* adding data to html */
      eduClassHtml = eduClassHtml.replace("data",education[i].class);
      eduDateHtml = eduDateHtml.replace("data",education[i].date);
      eduInfoHtml = eduInfoHtml.replace("data",education[i].info + "<br>");
      /* adding html to page */
      $("#eduSection").append(eduClassHtml);
      $("#eduSection").append(eduDateHtml);
      $("#eduSection").append(eduInfoHtml);
}

/* bringing in volunteer header */
 document.getElementById("volHeader").innerHTML = volHeader;
/* bringing in volunteer title */
 document.getElementById("volTitle").innerHTML = volTitle;
/* bringing in volunteer date */
 document.getElementById("volDate").innerHTML = volDate;
/* bringing in volunteer info */
 document.getElementById("volInfo").innerHTML = volInfo;


/* creating acheived header */
var acheivedHeader = "Acheivment's";

/* creating education */
var acheived = [
  {
    title:"Veterans Affairs Hackathon",
    date:"February 19-21, 2016",
    info: "Attended second Hackathon and won $3,000, traveled to Washington D.C, and pitched my idea to Veteran Affair's."
  },
  {
    title:"Galvanize Hackathon",
    date:"February 9th, 2016",
    info: "Participated in very first Hackathon which lasted a few hours and won."
  },
];


/* bringing in acheived header */
 document.getElementById("acheivedHeader").innerHTML = acheivedHeader;
/* bringing acheived info to page */
for (var i = 0; i < acheived.length; i++) {
      /* creating acheived html */
      acheivedTitleHtml = "<h2 id='acheivedTitleHtml'>data</h2>";
      acheivedDateHtml = "<h3 id='acheivedDateHtml'>data</h3>";
      acheivedInfoHtml = "<h2 id='acheivedInfoHtml'>data</h2>";
      /* adding data to html */
      acheivedTitleHtml = acheivedTitleHtml.replace("data",acheived[i].title);
      acheivedDateHtml = acheivedDateHtml.replace("data",acheived[i].date);
      acheivedInfoHtml = acheivedInfoHtml.replace("data",acheived[i].info + "<br>");
      /* adding html to page */
      $("#acheivedSection").append(acheivedTitleHtml);
      $("#acheivedSection").append(acheivedDateHtml);
      $("#acheivedSection").append(acheivedInfoHtml);
}