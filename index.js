let result = 0;

window.addEventListener('load', () => {
    const wrapper = document.getElementById('wrapper');
    const loading = document.getElementById('loading');

    setTimeout(() => {
        loading.style.display = "none";
        wrapper.style.display = "block";
    }, 5000);
    // Sum variables
    const sumOne = document.getElementById('sum-one');
    const sumTwo = document.getElementById('sum-two');
    const sumBtn = document.getElementById('sum-button');
    const sumResult = document.getElementById('sum-result');
    const sumAnswer = document.getElementById('sum-answer');
    const sumHidden = document.getElementById('sum-result-hidden');

    // Substract variables
    const subOne = document.getElementById('sub-one');
    const subTwo = document.getElementById('sub-two');
    const subBtn = document.getElementById('sub-button');
    const subResult = document.getElementById('substr-result');
    const subAnswer = document.getElementById('substr-answer');
    const subHidden = document.getElementById('sub-result-hidden');

    // Multiplication variables
    const multOne = document.getElementById('mult-one');
    const multTwo = document.getElementById('mult-two');
    const multBtn = document.getElementById('mult-button');
    const multResult = document.getElementById('mult-result');
    const multAnswer = document.getElementById('mult-answer');
    const multHidden = document.getElementById('mult-result-hidden');

    // Division variables
    const divOne = document.getElementById('div-one');
    const divTwo = document.getElementById('div-two');
    const divBtn = document.getElementById('div-button');
    const divResult = document.getElementById('div-result');
    const divAnswer = document.getElementById('div-answer');
    const divHidden = document.getElementById('div-result-hidden');

    randomizeNumbers(sumOne, sumTwo, subOne, subTwo, multOne, multTwo);
    randomizeDivision(divOne, divTwo);
    action(sumBtn, sumOne, sumTwo, sumResult, sumAnswer, sumHidden);
    action(subBtn, subOne, subTwo, subResult, subAnswer, subHidden);
    action(multBtn, multOne, multTwo, multResult, multAnswer, multHidden);
    action(divBtn, divOne, divTwo, divResult, divAnswer, divHidden);
});

function randomizeNumbers(sumOne, sumTwo, subOne, subTwo, multOne, multTwo) {
    sumOne.value = Math.floor(Math.random() * 9999) + 1;
    sumTwo.value = Math.floor(Math.random() * 99) + 1;
    subOne.value = Math.floor(Math.random() * 9999) + 1;
    subTwo.value = Math.floor(Math.random() * 99) + 1;
    multOne.value = Math.floor(Math.random() * 9999) + 1;
    multTwo.value = Math.floor(Math.random() * 99) + 1;
}

function randomizeDivision(divOne, divTwo) {
    divOne.value = Math.floor(Math.random() * 9999) + 1;
    divTwo.value = Math.floor(Math.random() * 99) + 1;
    if (divTwo.value == 0) {
        divTwo.value = Math.floor(Math.random() * 99) + 1;
    }
    result = Number(divOne.value) / Number(divTwo.value);

    const checkResult = isWholeNumber(result);
    if (checkResult === false) {
        // const showInfo = document.querySelector('.show-info');
        // showInfo.style.display = "block";
        window.location.reload();
    }

    function isWholeNumber(value) {
        let isWhole = false;
        if (value % 1 === 0) {
            isWhole = true;
        } else {
            isWhole = false;
        }
        return isWhole;
    }
}

function action(button, numberOne, numberTwo, answerField, answerElement, hiddenElement) {
    // Sum numbers
    if (button) {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const currentTarget = e.currentTarget;
            console.log(currentTarget);
            function sumNumbers() {
                switch (currentTarget.id) {
                    case "sum-button": result = Number(numberOne.value) + Number(numberTwo.value); break;
                    case "sub-button": result = Number(numberOne.value) - Number(numberTwo.value); break;
                    case "mult-button": result = Number(numberOne.value) * Number(numberTwo.value); break;
                    case "div-button": result = Number(numberOne.value) / Number(numberTwo.value); break;
                }
                // result = result.toFixed(2);
                // if (result.endsWith('0')) {
                //     result = Number(result.slice(result.length - 1));
                // } else {
                //     result = Number(result);
                // }
                const resultToCheck = Number(answerField.value);

                if (isNaN(answerField.value) || answerField.value === '') {
                    return notify(`Подал си неправилни или липсващи данни! Въведи цифри!`, hiddenElement);
                }

                answerElement.disabled = false;
                if (result === resultToCheck) {
                    hiddenElement.style.display = "block";
                    answerElement.value = result.toString();
                    hiddenElement.textContent = `Браво, твоят отговор ${resultToCheck} е верен! Изчакай, докато подготвим нови примери за теб!`;
                    setTimeout(() => {
                        document.getElementById('calculator-sum').reset();
                    }, 3000);
                    setTimeout(() => {
                        hiddenElement.style.display = "none";
                        window.location.reload();
                    }, 5000);
                } else {
                    hiddenElement.style.display = "block";
                    hiddenElement.textContent = `Твоят отговор ${resultToCheck} е грешен! Опитай отново!`;
                    answerField.value = '';
                    answerElement.value = '';
                    setTimeout(() => {
                        hiddenElement.style.display = "none";
                    }, 7000);
                }
            }

            sumNumbers();
        });
    }
}

function notify(message, element) {
    element.style.display = "block";
    element.textContent = message;
    setTimeout(() => {
        element.style.display = "none";
    }, 5000);
    return;
}