function BuildWrapper(tag) {
    return function (data, object) {
        data = escapeHTML(data);
        let result = `<${tag}>${data}</${tag}>`

        if (object) {
            result = `<${tag}${parseObject(object)}>${data}</${tag}>`
        }

        return result;
    }
}

function parseObject(object) {
    let str = '';

    for (let key in object) {
        str += ` ${key}='${escapeHTML(object[key])}'`
    }
    return str;
}

function escapeHTML(text) {
    if (!text)
        return text;
    text = text.toString()
        .split("&").join("&amp;")
        .split("<").join("&lt;")
        .split(">").join("&gt;")
        .split('"').join("&quot;")
        .split("'").join("&#039;");
    return text;
}

// function handleClickOnH1() {
//     let context = document.getElementById('data').value;
//     var wrapH1 = BuildWrapper('h1');
//     let result = wrapH1(context);
//
//     console.log(result);
//     innerResultButtonHTML.innerText = result;
// }

function handleClickOnP() {
    var wrapP = BuildWrapper('p');
    let result = wrapP(contextHTML.value);

    console.log(result);
    innerResultHTML.innerText = result;
}

function handleClickOnPLang() {
    var wrapP = BuildWrapper('p');
    let result = wrapP(contextHTML.value, {lang: 'ru'});

    console.log(result);
    innerResultHTML.innerText = result;
}

function handleClickOnH1AlignTitle() {
    var wrapP = BuildWrapper('h1');
    let result = wrapP(contextHTML.value, {lang: 'ru', align: 'centre', title: 'M&M\'s'});

    console.log(result);
    innerResultHTML.innerText = result;
}

const contextHTML = document.getElementById('data');
const innerResultHTML = document.getElementById('result');
const innerPButtonHTML = document.getElementById('innerP');
const innerPLangButtonHTML = document.getElementById('innerPLang');
const innerH1AlignTitleButtonHTML = document.getElementById('innerh1AlignTitle');

innerPButtonHTML.addEventListener('click', handleClickOnP);
innerPLangButtonHTML.addEventListener('click', handleClickOnPLang);
innerH1AlignTitleButtonHTML.addEventListener('click', handleClickOnH1AlignTitle);
