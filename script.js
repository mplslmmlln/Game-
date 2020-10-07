let minValue = parseInt(prompt('Минимальное знание числа для игры','0')) || 0 ;
minValue = minValue < -1000 ? -1000 : minValue;
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100')) || 100;
maxValue = maxValue > 1000 ? 1000 : maxValue;
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

let orderNumberField = document.getElementById('orderNumberField');
let answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

document.getElementById('btnRetry').addEventListener('click', function () {
    orderNumber = 1;
    answerField = document.getElementById('answerField');
    minValue = parseInt(prompt('Минимальное знание числа для игры','0')) || 0;
    minValue = minValue < -1000 ? -1000 : minValue;
    maxValue = parseInt(prompt('Максимальное знание числа для игры','100')) || 100;
    maxValue = maxValue > 1000 ? 1000 : maxValue;
    gameRun = true;
    orderNumberField.innerText = orderNumber;
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    answerField.innerText = `Вы загадали число ${answerNumber }?`;

})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            let phraseRandom = Math.round( Math.random()*3);
            let answerPhrase = ``;
            switch (phraseRandom) {
                case 0:
                answerPhrase = `Вы загадали число ${answerNumber }?`;
                break;
                case 1:
                answerPhrase = `Возможно, это число ${answerNumber }?`;
                break;
                case 2:
                answerPhrase = `Это легко! Ты загадал число ${answerNumber }?`;
                break;
                case 3:
                answerPhrase = `Я уверен, что ты загадал число ${answerNumber }?`;
                break;
            }
        answerField.innerText = answerPhrase;
        }
        }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            let phraseRandom = Math.round( Math.random()*3);
            let answerPhrase = ``;
            switch (phraseRandom) {
                case 0:
                answerPhrase = `Вы загадали число ${answerNumber }?`;
                break;
                case 1:
                answerPhrase = `Возможно, это число ${answerNumber }?`;
                break;
                case 2:
                answerPhrase = `Это легко! Ты загадал число ${answerNumber }?`;
                break;
                case 3:
                answerPhrase = `Я уверен, что ты загадал число ${answerNumber }?`;
                break;
            }
        answerField.innerText = answerPhrase;
        }
        }
    })


document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        const phraseRandom = Math.round( Math.random()*2);
        let answerPhrase = ``;
        switch (phraseRandom) {
          case 0:
            answerPhrase = `Я всегда угадываю\n\u{1F60E}`;
            break;
          case 1:
            answerPhrase = `Запросто!`;
            break;
          case 2:
            answerPhrase = `Easy!`;
            break;
        }

    answerField.innerText = answerPhrase;
    gameRun = false;
    }
})




