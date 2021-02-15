const a2PlusButtonHTML = document.getElementById('a2-plus');

function myTrim(str) {
    let startIndex = 0,
        endIndex = str.length,
        space = ' ';

    for (let i = 0; i < str.length; i++){
        if (str[i] === space) {
            startIndex ++
        } else {break}
    }

    for (let i = str.length - 1; i > 0; i--){
        if (str[i] === space) {
            endIndex--
        } else {break}
    }

    return '_' + str.slice(startIndex, endIndex) + '_';
}

function callPromptA2Plus() {
    let str = prompt('Please, enter you massage');

    console.log(myTrim(str));
}

a2PlusButtonHTML.addEventListener('click', callPromptA2Plus);

