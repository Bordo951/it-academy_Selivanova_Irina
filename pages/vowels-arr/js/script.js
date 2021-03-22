const forEachButtonHtml = document.getElementById('forEach'),
    filterButtonHtml = document.getElementById('filter'),
    reduceButtonHtml = document.getElementById('reduce');

//forEach
function countVowelsForEach(str) {
    if (str === null) {
        return ;
    }

    let arr = str.toLowerCase().split(''),
        vowelsArr = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'],
        counter = 0;

    arr.forEach((letter) => {
        if (vowelsArr.indexOf(letter) >= 0)
            counter += 1;
    });

    return `Количество русских гласных букв: ${counter}`;
}

function callCountVowelsForEach(){
    let message = prompt('Please, enter you message');

    console.log('forEach: ', countVowelsForEach(message));
}

//filter
function countVowelsFilter(str) {
    if (str === null) {
        return ;
    }

    let arr = str.toLowerCase().split(''),
        vowelsArr = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'],
        arrNew;

    arrNew = arr.filter((letter) => {
        if (vowelsArr.indexOf(letter) >= 0) {
            return letter;
        }
    })

    return `Количество русских гласных букв: ${arrNew.length}`;
}

function callCountVowelsFilter(){
    let message = prompt('Please, enter you message');

    console.log('filter: ', countVowelsFilter(message));
}

//reduce
function countVowelsReduce(str) {
    if (str === null) {
        return ;
    }

    let arr = str.toLowerCase().split(''),
        vowelsArr = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'],
        newString;

    newString = arr.reduce((previousValue, currentValue, index) => {
        if (vowelsArr.indexOf(currentValue) >= 0) {
            return previousValue + currentValue;
        }
        return previousValue;
    }, '');

    return `Количество русских гласных букв: ${newString.length}`;
}

function callCountVowelsReduce(){
    let message = prompt('Please, enter you message');

    console.log('reduce: ', countVowelsReduce(message));
}

forEachButtonHtml.addEventListener('click', callCountVowelsForEach);
filterButtonHtml.addEventListener('click', callCountVowelsFilter);
reduceButtonHtml.addEventListener('click', callCountVowelsReduce);
