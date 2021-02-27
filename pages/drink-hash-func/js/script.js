const newDrinkFormHTML = document.getElementById('new-drink-form');
const getDrinkHtml = document.getElementById('get-drink');
const deleteDrinkHtml = document.getElementById('delete-drink');
const vewDrinkListHtml = document.getElementById('list-drink');
const beverageNameHtml = document.getElementById('drink');
const alcoholBeverageHtml = document.getElementsByName('isAlcohol');
const beverageRecipeHtml = document.getElementById('recipe');
let isAlcohol = 'Нет';

newDrinkFormHTML.addEventListener('submit', addNewDrink);
getDrinkHtml.addEventListener('click', getDrinkInformation);
deleteDrinkHtml.addEventListener('click', deleteDrink);
vewDrinkListHtml.addEventListener('click', vewDrinkList);

function getNewDrinkFromForm() {
    for (let i = 0; i < alcoholBeverageHtml.length; i++) {
        if (alcoholBeverageHtml[i].checked) {
            isAlcohol = alcoholBeverageHtml[i].value === 'yes' ? 'Да' : 'Нет';
        }
    }

    return {
        drinkKey: beverageNameHtml.value,
        drinkValue: {
            isAlcohol: isAlcohol,
            recipe: beverageRecipeHtml.value
        }
    };
}

function clineForm() {
    beverageNameHtml.value = '';
    beverageRecipeHtml.value = '';

    for (let i = 0; i < alcoholBeverageHtml.length; i++) {
        alcoholBeverageHtml[i].checked = false;
    }
}

function addNewDrink(event) {
    let newDrink = getNewDrinkFromForm();

    drinkStorage.addValue(newDrink.drinkKey, newDrink.drinkValue);

    clineForm();
    event.preventDefault();
}

function getDrinkInformation() {
    let requiredDrink = prompt('Какой напиток Вы хотите найти?');

    if (requiredDrink === null) return;

    return drinkStorage.getValue(requiredDrink) ? alert (returnsDrink(requiredDrink)) : alert(`Напиток ${requiredDrink} не найден.`);
}

function returnsDrink(requiredDrink) {
    let currentDrink = drinkStorage.getValue(requiredDrink);

    return `
            Напиток: ${requiredDrink}
            Алкогольный: ${currentDrink.isAlcohol}
            Состав: ${currentDrink.recipe}`;
}

function deleteDrink() {
    let requiredDrink = prompt('Какой напиток Вы хотите удалить?');

    if (requiredDrink === null) return;

    if (drinkStorage.getValue(requiredDrink)) {
        drinkStorage.deleteValue(requiredDrink);
        alert(`Напиток ${requiredDrink} был удалён`);
    } else {
        alert(`Напиток ${requiredDrink} не найден.`);
    }
}

function vewDrinkList() {
    openPopUp();
}

console.log(drinkStorage.getKeys());
