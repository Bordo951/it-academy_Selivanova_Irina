const b2PlusButtonHTML = document.getElementById('b2-plus');

function revertString(str) {
    return str.split('').reverse().join('');
}

function callPromptB2Plus(){
    let message = prompt('Please, enter you message');

    console.log(revertString(message));
}

b2PlusButtonHTML.addEventListener('click', callPromptB2Plus);
