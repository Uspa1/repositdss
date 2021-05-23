import './scss/style.css'



console.log('scripts loaded');


window.addEventListener('scroll', function () {
    const logoImage = document.querySelector('.logo img');
    const mainNav = document.getElementById('mainNav');

    if (window.pageYOffset > 0) {
        logoImage.style.height = "100px";
        mainNav.classList.add('font-size')
    } else {
        logoImage.style.height = "114px";
        mainNav.classList.remove('font-size')
    }
    window.addEventListener('scroll', function () {
        const mybutton = document.getElementById('myBtn');
    
        if (window.pageYOffset > 0) {
            
            mybutton.classList.add('visible')
        } else {
            
            mybutton.classList.remove('visible')
        }

    })

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



//card section


// fetch("https://uspa1.github.io/repositdss/mock/mock.json")
//     .then(data => {

//        console.log(data);

//         return data.json()
//     })
//     .then(data => {
//         let div = document.getElementById('section-3');


//         data.cardsIT.forEach((element) => {


//             div.innerHTML += `<div class="card-container"><div class="card">
//            <div class="front face">
             
//            </div>
//            <div class="back face">
//              <h1>${element['name']}</h1>
//              <p class="artist">Predskazanie</p>
             
//            </div>
//          </div>  
//        </div>`
//         });
//         data.cardsItJoke.forEach((element) => {
//             div.innerHTML += `<div class="card-container">

//                 <div class="card">
//                     <div class="front face">

//                     </div>
//                     <div class="back face">
//                         <h1>${element['name']}</h1>
//                         <p class="artist">Predskazanie</p>

//                    </div>
//               </div>
//             </div>`

//         });
//         data.cardsItUseful.forEach((element) => {
//                 div.innerHTML +=` <div class="card-container">

//                     <div class="card">
//                         <div class="front face">

//                         </div>
//                         <div class="back face">
//                             <h1>${element['name']}</h1>
//                             <p class="artist">Predskazanie</p>

//                         </div>
//                     </div>
//                 </div>`

//         });


//     })
    const cardCase = document.getElementById('section-3')

    let counts = 0
    
    
    
    fetch("https://uspa1.github.io/repositdss/mock/mock.json")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            firstRendering(data)
        });
    
    
    
    function firstRendering(cardsArrays) {
        if (localStorage.getItem('activeGroup')) {
            renderCards(cardsArrays[Object.keys(cardsArrays)[localStorage.getItem('activeGroup')]]);
            checkCard()
        }
    
        document.querySelectorAll('.btn').forEach((box, index) => {
    
            box.addEventListener("click", function () {
              
                
                switch (index) {
                    case 0:
                        //render first cards
                        localStorage.setItem('activeGroup', 0)
                        renderCards(cardsArrays[Object.keys(cardsArrays)[localStorage.getItem('activeGroup')]]);
                        checkCard()
    
                        break;
                    case 1:
                        //render second cards
                        localStorage.setItem('activeGroup', 1)
                        renderCards(cardsArrays[Object.keys(cardsArrays)[localStorage.getItem('activeGroup')]]);
                        checkCard()
    
                        break;
                    case 2:
                        //render third cards
                        localStorage.setItem('activeGroup', 2)
                        renderCards(cardsArrays[Object.keys(cardsArrays)[localStorage.getItem('activeGroup')]]);
                        checkCard()
    
                        break;
                }
            })
    
        })
    
    }
    
    
    
    function renderCards(wichArray) {
        counts++;
    
        wichArray.forEach((item, index) => {
            if (localStorage.getItem('currentActive') == index) {
                cardCase.innerHTML += `<div class="card active">
            <img src = "${item.imgUrl}"> 
            <p>${item.name} </p>
            </div>`
            }
            else {
                cardCase.innerHTML += `<div class="card ">
                <img src = "${item.imgBack}"> 
                
                </div>`

            }
        })
    
    }
    function sayHi() {
        localStorage.clear();
        location.reload();
        
        } 
 
    
      
     
    
    function checkCard() {
    
        document.querySelectorAll('.card').forEach((box, index) =>
            box.addEventListener("click", function () {
                if (!localStorage.getItem('currentActive')) {
                    box.classList.toggle("flip")
                    location.reload();
                    localStorage.setItem('currentActive', index)
                    document.querySelectorAll('.btn ').forEach((box, index) => {
                        box.setAttribute('disabled', true)
                    })
                }
                else {
                    alert('карта уже открыта, карты будут доступны спустя 20 секунд');
                    setTimeout(sayHi, 20000);

                }
            })
        )
    }
    
    
    
    
    
    if (counts > 0 || localStorage.getItem('activeGroup')) {
        document.querySelectorAll('.btn').forEach((box, index) => {
            box.setAttribute('disabled', true)
        })
    }
    
    //localclear
    let button = document.querySelector('.local');
    button.addEventListener("click", function () {
        localStorage.clear();
        location.reload();
        document.querySelectorAll('.btn ').forEach((box, index) => {
            box.setAttribute('disabled', false)
        })
 
    })
    let myInterval = function () {
        setInterval(() => {
            if (!document.cookie.split('=')[1]) {
                localStorage.clear();
                location.reload();
                document.querySelectorAll('.btn').forEach((box, index) => {
                    box.setAttribute('disabled', false)
                })
                clearInterval(myInterval)
            }
        }, 1000)
    }
   
const mybutton = document.getElementById("myBtn")

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.classList.add("visible")
  } else {
    mybutton.classList.add("unvisible")
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 
 
 mybutton.addEventListener("click",function(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
 })

