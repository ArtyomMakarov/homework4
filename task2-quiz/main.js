let input = document.getElementsByClassName('input');
let button = document.getElementById('button');
let result = document.getElementById('result');
let case1 = `<h3>Вы независимы от соц.сетей. Так держать!</h3>`;
let case2 = `<h3>Вы проводите время выше среднего.</h3>`;
let case3 = `<h3>Вы зависимы от соц.сетей.</h3>`;
const LEVEL1 = 5;
const LEVEL2 = 10;

function getValues() {
    let output = [];
    let sum = 0;
    for (let i =0; i < input.length; i++) {
        if (input[i].checked) {
            output.push(input[i].value);
        }
    }
    if (output.length < 5) {
        return alert("Ответьте на все вопросы");
    }
    output.forEach(function (item) {
        let num = +item;
        sum += num;
    });

    if (sum == LEVEL1) {
        result.innerHTML = case1;
    } else if (sum > LEVEL1 && sum <= LEVEL2) {
        result.innerHTML = case2;
    } else {
        result.innerHTML = case3;
    }
}
button.addEventListener('click', function () {
    console.log(getValues());
});