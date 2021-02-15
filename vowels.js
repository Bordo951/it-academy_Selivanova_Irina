const vowelsButtonHTML = document.getElementById('vowels');

function countVowelsNumber(str) {
    if (str === null) {
        return ;
    }

    let arr = str.split(''),
        vowelsArr = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'],
        counter = 0;

    for (let i = 0; i < arr.length; i++) {
        if (vowelsArr.indexOf(arr[i]) >= 0) {
            counter += 1;
        }
    }

    return `Количество русских гласных букв: ${counter}`;
}

function callPromptVowels(){
    let message = prompt('Please, enter you message');

    console.log(countVowelsNumber(message));
}

vowelsButtonHTML.addEventListener('click', callPromptVowels);
