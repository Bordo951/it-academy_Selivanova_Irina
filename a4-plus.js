const a4PlusButtonHTML = document.getElementById('a4-plus');

function isPalindromeA4(str) {
    const specialSymbols = [' ', 'ь', 'ъ', '.', ',', ':', ';', '!', '_', '?', '-', '\"', '\''];

    str = str.toLowerCase();

    specialSymbols.forEach((element) => {
        let index = str.indexOf(element);

        if (index >= 0) {
            str = str.replace(str[index], '');
        }
    })

    str = str.replace('ё', 'е');

    checkForPalindrome(str);
}

function checkForPalindrome (str) {
    let firstLetter = str.slice(0, 1),
        lastLetter = str.slice(str.length-1, str.length);

    if (firstLetter !== lastLetter) {
        alert('No, it\'s not a palindrome.')
        return false;
    } else {
        str = str.slice(1, str.length-1);

        if (str.length > 1) {
            return checkForPalindrome(str);
        } else {
            alert('Yes, it\'s a palindrome.')
            return true;
        }
    }
}

function callPromptA4Plus() {
    let str = prompt('Please, enter you massage');

    if (str === null) return;

    return isPalindromeA4(str);
}

a4PlusButtonHTML.addEventListener('click', callPromptA4Plus);
