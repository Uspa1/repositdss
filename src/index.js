


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

const cardsWrapper = document.querySelector('.cards-wrapper')
const itCards = document.querySelector('.it-cards')
console.log('scripts loaded')


window.addEventListener('scroll', function(){
    const logoImage = document.querySelector
    ('.logo img');
    const mainNav = document.getElementById
    ('mainNav');
   
    if(window.pageYOffset >  0){
        logoImage.style.height = "100px";
        mainNav.classList.add('font-size')
    } else {
        logoImage.style.height = "114px";
        mainNav.classList.remove('font-size')
    }
    
// фигурные скобки -- объект
// квадратные скобки -- массивы

});
