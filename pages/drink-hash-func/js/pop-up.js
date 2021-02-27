const overlayHTML = document.querySelector('.overlay');
const popUpHTML = document.querySelector('.pop-up');
const closePopUpBtnHTML = document.querySelector('.close-pop-up');
const contentPopUpBtnHTML = document.querySelector('.pop-up__content');

overlayHTML.addEventListener('click', closePopUp);
closePopUpBtnHTML.addEventListener('click', closePopUp);

console.log(overlayHTML);
console.log(popUpHTML);

function openPopUp() {
    overlayHTML.classList.add('visible');
    popUpHTML.classList.add('visible');
    addDrinksListToHTML();
}

function closePopUp() {
    overlayHTML.classList.remove('visible');
    popUpHTML.classList.remove('visible');
}

function getDrinkHTML(drinkName) {
    return `<li class="pop-up__drink-name">${drinkName}</li>`;
}

function addDrinksListToHTML() {
    let drinksArr = drinkStorage.getKeys(),
        html = '';

    drinksArr.forEach ((drink) => html += getDrinkHTML(drink));
    contentPopUpBtnHTML.innerHTML = html;
}
