const a3PlusButtonHTML = document.getElementById('a3-plus');

function isPalindrome(str) {
    const specialSymbols = [' ', 'ь', 'ъ', '.', ',', ':', ';', '!', '_', '?', '-', '\"', '\''];
    let newString = str,
        arr = newString.toLowerCase()
            .split(''),
        newStringReverse = '',
        temporaryArr = [];

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === 'ё') {
                arr.splice(i, 1, 'е')
            }

            if (specialSymbols.indexOf(arr[i]) === -1) {
                temporaryArr.push(arr[i])
            }
        }

        newString = temporaryArr.join('');
        newStringReverse = temporaryArr.reverse().join('');

    return newString === newStringReverse;
}

function callPromptA3Plus() {
    let str = prompt('Please, enter you massage');

    if (str === null) return;

    return (isPalindrome(str)) ? alert('Yes, it\'s a palindrome.') : alert('No, it\'s not a palindrome.');
}

a3PlusButtonHTML.addEventListener('click', callPromptA3Plus);

