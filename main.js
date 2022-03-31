let myImage = document.querySelector('img');

myImage.onclick = ()=>/*function()*/ {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute('src','images/firefox2.png');
    } else {
      myImage.setAttribute('src','images/firefox-icon.png');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
  }
//the code calls on an API localStorage, which allows us to store data in the browser and retrieve it later  
//LOCAL STORAGE PR DATABASE IS REQ FOR PREVENTING LOSS OF DATA WHEN REFRESH


if(!localStorage.getItem('name')) 
{
    setUserName();
} 

else 
{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
  }
  