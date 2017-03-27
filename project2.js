var emailIcon;
var linkedInIcon;
var gitHubIcon;
var gpIcon;
var appIcon;
var profilesIcon;
var oldWidth;
var oldHeight;


window.onload = function(){
  emailIcon = document.getElementById('emailicon');
  linkedInIcon = document.getElementById('liicon');
  gitHubIcon = document.getElementById('giticon');
  appIcon = document.getElementById('app');
  gpIcon = document.getElementById('gp');
  profilesIcon = document.getElementById('prof');
  description = document.getElementById('appDescription');



  linkedInIcon.onmouseover = resize;
  emailIcon.onmouseover = resize;
  gitHubIcon.onmouseover = resize;
  gpIcon.onmouseover = changeColor;
  appIcon.onmouseover = changeColor;
  profilesIcon.onmouseover = changeColor;

  linkedInIcon.onmouseout = returnSize;
  emailIcon.onmouseout = returnSize;
  gitHubIcon.onmouseout = returnSize;
  appIcon.onmouseout = unchangeColor;
  gpIcon.onmouseout = unchangeColor;
  profilesIcon.onmouseout = unchangeColor;

  gitHubIcon.onclick = openGitHub;
  linkedInIcon.onclick = openLI;
  profilesIcon.onclick = openMSO;
  gpIcon.onclick = openGP;
  appIcon.onclick = openApp;
  emailIcon.onclick = openEmailForm;


}

function openMSO(){
  window.open("http://meetscoresonline.com");
}

function openGP(){
  window.open("https://git.cs.du.edu/malberne/gamemilestone1.git");
}

function openApp(){
  window.open("https://itunes.apple.com/us/app/ems-relay/id898601651?mt=8");
}

function openLI(){
  window.open("https://www.linkedin.com/in/malia-berner-092a25b5");
}

function openGitHub(){
  window.open("https://github.com/maliaberner");
}

function openEmailForm(){
  window.open('mailto:maliaberner4@gmail.com');
}

function changeColor(){
  (this).style.backgroundColor = "#8D6CAB";
}

function unchangeColor(){
  (this).style.backgroundColor = "#6cab6e";
}


function resize(){
  console.log("hello");
  oldWidth = this.style.width;
  oldHeight = this.style.height;
  this.style.height = oldHeight + "100px";
  this.style.width = oldWidth+ "100px";
}

function returnSize(){
  this.style.height = oldHeight;
  this.style.width = oldWidth;
}
