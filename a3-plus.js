const a3PlusButtonHTML = document.getElementById('a3-plus');

function isPalindrome(str) {
    let newString = str.toLowerCase()
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]\sьъ/g, '')
        .replace(/ё/g, 'е');
console.log(newString);





}

function callPromptA3Plus() {
    let str = prompt('Please, enter you massage');

    console.log(isPalindrome(str));
}

a3PlusButtonHTML.addEventListener('click', callPromptA3Plus);

