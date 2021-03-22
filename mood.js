const moodButtonHTML = document.getElementById('mood');

function randomDiap(n,m) {
    return Math.floor(Math.random()*(m-n+1))+n;
}

function mood(colorsCount) {
    let colors = [ '', 'красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый' ],
        usedColor = {};

    console.log( 'цветов: ' + colorsCount );

    for ( let i=1; i <= colorsCount; i++ ) {
        let n,
            colorName;

        do {
            n = randomDiap(1,7);
            colorName = colors[n];
        } while (colorName in usedColor)

        usedColor[colorName] = true;
        console.log(colorName);
    }
}

moodButtonHTML.addEventListener('click', () => mood(3));
