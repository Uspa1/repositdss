import './scss/style.css'

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

    // фигурные скобки -- объект
    // квадратные скобки -- массивы

});

const cardsWrapper = document.querySelector('.cards-wrapper');
const itCards = document.querySelector('.it-cards');
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


fetch("https://uspa1.github.io/repositdss/mock/mock.json")
    .then(data => {

        console.log(data);

        return data.json()
    })
    .then(data => {
        let div = document.getElementById('section-3');


        data.cardsIT.forEach((element) => {


            div.innerHTML += `<div class="card-container"><div class="card">
           <div class="front face">
             
           </div>
           <div class="back face">
             <h1>${element['name']}</h1>
             <p class="artist">Predskazanie</p>
             
           </div>
         </div>  
       </div>`
        });
        data.cardsItJoke.forEach((element) => {
            div.innerHTML += `<div class="card-container">

                <div class="card">
                    <div class="front face">

                    </div>
                    <div class="back face">
                        <h1>${element['name']}</h1>
                        <p class="artist">Predskazanie</p>

                    </div>
                </div>
            </div>`

        });
        data.cardsItUseful.forEach((element) => {
                div.innerHTML +=` <div class="card-container">

                    <div class="card">
                        <div class="front face">

                        </div>
                        <div class="back face">
                            <h1>${element['name']}</h1>
                            <p class="artist">Predskazanie</p>

                        </div>
                    </div>
                </div>`

        });


    }).then(()=> {
        const card = document.querySelectorAll(".card");

        let count = 0;

    console.log(card.length)
 for (let i = 0; i < card.length; i++) {
    card[i].addEventListener("click", function () {
        count++;

        if (count <= 1) {
        this.classList.add('active')
    }

     });
 }
 
    })



