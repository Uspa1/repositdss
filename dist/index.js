

// const mockIt = './dist/mock.json';
// "use strict";
// const cardsWrapper = document.getElementById('cards')
// cardsWrapper.style.padding = '50px';
// const url = './dist/mock.json';
// async function getPosts(url) {
//     let response = await fetch(url);
//     if (response.ok) {
//         let json = await response.json();
//         json.cards.forEach((element, index) => {
//             if (index < 2) {
//                 cardsWrapper.innerHTML +=
//                     `
//                         <div class="uk-card uk-card-body">
//                 <h3 class="uk-card-title"> ${element.imgUrl}</h3>
//             </div> `
//             }
//         });
//     } else {
//         alert("Ошибка HTTP: " + response.status);
//     }
// }
// getPosts(url)

const cardsWrapper = document.querySelector('.cards-wrapper');
const itCards = document.querySelector('.it-cards');
console.log('scripts loaded');


window.addEventListener('scroll', function() {
    const logoImage = document.querySelector('.logo img');
    const mainNav = document.getElementById('mainNav');

    if (window.pageYOffset > 0) {
        logoImage.style.height = "100px";
        mainNav.classList.add('font-size')
    } else {
        logoImage.style.height = "114px";
        mainNav.classList.remove('font-size')
    }
    
    
  
  
  // Run
  
  
    
  

    // фигурные скобки -- объект
    // квадратные скобки -- массивы

});





const time = document.getElementById('time'),
  greeting = document.getElementById('greeting'),
  name = document.getElementById('name'),
  focus = document.getElementById('mood');

// Options
const showAmPm = true;

// Show Time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  // Set AM or PM
  const amPm = hour >= 12 ? 'PM' : 'AM';

  // 12hr Format
 

  // Output Time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )} ${showAmPm ? amPm : ''}`;

  setTimeout(showTime, 1000);
}

// Add Zeros
function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set Background and Greeting
function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();

   
    if (hour < 6) {
      // Night

      greeting.textContent = 'Good Night, ';
  }
  else if (hour >= 17) {
    // Evening
    
    greeting.textContent = 'Good Evening, ';
    document.body.style.color = 'white';
  }
  else if (hour >= 11) {
    // Afternoon
   
    greeting.textContent = 'Good Afternoon, ';
  }
  else if (hour >= 6) {
    // Morning
   
    greeting.textContent = 'Good Morning, ';
  } 
  
    
  
}

// Get Name
function getName() {
  if (localStorage.getItem('name') === null) {
    name.textContent = 'Enter Name';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}

// Set Name
function setName(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('name', e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem('name', e.target.innerText);
  }
}

// Get Focus
function getFocus() {
  if (localStorage.getItem('mood') === null) {
    focus.textContent = 'Enter Mood';
  } else {
    focus.textContent = localStorage.getItem('mood');
  }
}

// Set Focus
function setFocus(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('mood', e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem('mood', e.target.innerText);
  }
}


name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

// Run
showTime();
setBgGreet();
getName();
getFocus();



