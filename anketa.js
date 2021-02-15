const anketaButtonHTML = document.getElementById('anketa');
let lastName,
    name,
    middleName,
    ageInYears,
    isMan,
    isPensioner;


function creatingForm() {
    do {
        lastName = prompt('Please, enter your last name' );
        if (lastName === null) return;
    } while (!isValidString(lastName))

    do {
        name = prompt('Please, enter your name' );
        if (name === null) return;
    } while (!isValidString(name))

    do {
        middleName = prompt('Please, enter your middle name');
        if(middleName === null) {
            middleName = '';
        }
    } while (middleName !== '' && !isValidString(middleName))

    do {
        ageInYears = prompt('Please, enter your age');
        if (ageInYears === null) return;
    } while (!isValidAge(ageInYears))

    isMan = confirm('Is your gender male?');
    isPensioner = confirm('Are you retired?');
    let result = alert(
        `
        Your surname, name, middle name: ${lastName} ${name} ${middleName}
        Your age in years: ${ageInYears}
        Your age in days: ${getAgeInDays(ageInYears)}
        In 5 years you will be: ${getIncreasedAge(ageInYears)}
        Your gender: ${convertBooleanResultToString(isMan)}
        You are retired: ${convertBooleanResultToString(isPensioner)}
        `
    );
}

function getAgeInDays(ageInYears) {
    const daysInYear = 360;

    return parseInt(ageInYears) * daysInYear;
}

function getIncreasedAge(ageInYears) {
    const inFive = 5;

    return parseInt(ageInYears) + inFive;
}

function convertBooleanResultToString(isTrue) {
    let result = 'no';

    if (isTrue) result = 'yes';

    return result;
}

function isValidString(str) {
    let isValid = true;

    if (str.length === 0 || !Number.isNaN(Number(str))) {
         isValid = false;
     }

    return isValid;
}

function isValidAge(age) {
    let isValid = true;

    if (!Number.isInteger(Number(age)) || Number.isNaN(Number(age))) {
        isValid = false;
    }

    if (age < 0 && age >= 100) {
        isValid = false;
    }

    return isValid;
}

anketaButtonHTML.addEventListener('click', creatingForm);
