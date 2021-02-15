const b1PlusButtonHTML = document.getElementById('b1-plus');

function getCentury(value) {
    return Math.floor(value / 100) + 1 + ' век';
}

function callPromptB1Plus(){
    let year = prompt('Please, enter you year');

    console.log(getCentury(year));
}

b1PlusButtonHTML.addEventListener('click', callPromptB1Plus);
