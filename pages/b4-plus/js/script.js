function BuildWrapper(tag) {
    return function (data) {
        data = escapeHTML(data);
        return `<${tag}>${data}</${tag}>`;
    }
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

function handleClickOnH1() {
    let context = document.getElementById('data').value;
    var wrapH1 = BuildWrapper('h1');
    let result = wrapH1(context);

    console.log(result);
    innerResultButtonHTML.innerText = result;
}

function handleClickOnP() {
    let context = document.getElementById('data').value;
    var wrapP = BuildWrapper('p');
    let result = wrapP(context);

    console.log(result);
    innerResultButtonHTML.innerText = result;
}

const innerH1ButtonHTML = document.getElementById('innerH1');
const innerPButtonHTML = document.getElementById('innerP');
const innerResultButtonHTML = document.getElementById('result');

innerH1ButtonHTML.addEventListener('click', handleClickOnH1);
innerPButtonHTML.addEventListener('click', handleClickOnP);
