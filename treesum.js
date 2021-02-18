const treesumButtonHTML = document.getElementById('treesum');

let myArr = [ 5, 7,
            [ 4, [2], 8, [1,3], 2 ],
            [ 9, [] ],
            1, 8
        ];

// let myArr = [ 5, 7, 4, [1, 2]];


//First variant: using 'flat' method
// function getTreeSum(arr) {
//     let newArr = arr.flat(Infinity);
//
//     return newArr.reduce(getSum);
// }
//
// function getSum(total, num) {
//     return total + num;
// }


//Second variant: using recursive method
function getTreeSum(arr) {
    let copyArr = [...arr],
        sum = 0;

    if(arr.length === 0){
        return sum;
    }

    for (let i = 0; i < copyArr.length; i++) {
        if (typeof copyArr[i] !== "number") {
            let copyArrI = copyArr[i];
                copyArr.splice(i, 1);
            return getTreeSum(copyArr.concat(copyArrI));
        } else {
            sum += copyArr[i];
        }
    }

    return sum;
}

function callAlertTreesum() {
    let sum = getTreeSum(myArr);

    alert(`The sum of the array is ${sum}`)
}

treesumButtonHTML.addEventListener('click', callAlertTreesum);
