let result = 0;

window.addEventListener('load', () => {
    const wrapper = document.getElementById('wrapper');
    const loading = document.getElementById('loading');
    const footer = document.querySelector('footer');

    setTimeout(() => {
        loading.style.display = "none";
        wrapper.style.display = "block";
        footer.style.display = "block";
    }, 3990);
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
    let divAnswer = document.getElementById('div-answer');
    let divRemainder = document.getElementById('div-remainder-result');
    let remainderAnswer = document.getElementById('remainder');
    const divHidden = document.getElementById('div-result-hidden');

    randomizeNumbers(sumOne, sumTwo, subOne, subTwo, multOne, multTwo, divOne, divTwo);
    action(sumBtn, sumOne, sumTwo, sumResult, sumAnswer, undefined, undefined, sumHidden);
    action(subBtn, subOne, subTwo, subResult, subAnswer, undefined, undefined, subHidden);
    action(multBtn, multOne, multTwo, multResult, multAnswer, undefined, undefined, multHidden);
    action(divBtn, divOne, divTwo, divResult, divAnswer, remainderAnswer, divRemainder, divHidden);
});

function randomizeNumbers(sumOne, sumTwo, subOne, subTwo, multOne, multTwo, divOne, divTwo) {
    sumOne.value = Math.floor(Math.random() * 9999) + 1;
    sumTwo.value = Math.floor(Math.random() * 99) + 1;
    subOne.value = Math.floor(Math.random() * 9999) + 1;
    subTwo.value = Math.floor(Math.random() * 99) + 1;
    multOne.value = Math.floor(Math.random() * 9999) + 1;
    multTwo.value = Math.floor(Math.random() * 99) + 1;
    divOne.value = Math.floor(Math.random() * 9999) + 1;
    divTwo.value = Math.floor(Math.random() * 99) + 1;
    if (divTwo.value == 0) {
        divTwo.value = Math.floor(Math.random() * 99) + 1;
    }
}

function action(button, numberOne, numberTwo, answerField, answerElement, remainderAnswer, remainderElement, hiddenElement) {
    // Get result
    if (button) {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const currentTarget = e.currentTarget;
            console.log(currentTarget);
            function getResult() {
                switch (currentTarget.id) {
                    case "sum-button": result = Number(numberOne.value) + Number(numberTwo.value); break;
                    case "sub-button": result = Number(numberOne.value) - Number(numberTwo.value); break;
                    case "mult-button": result = Number(numberOne.value) * Number(numberTwo.value); break;
                    case "div-button": result = Number(numberOne.value) / Number(numberTwo.value); break;
                }

                const resultToCheck = Number(answerField.value);

                if (isNaN(answerField.value) || answerField.value === '') {
                    return notify(`Подал си неправилни или липсващи данни! Въведи цифри!`, hiddenElement);
                }

                // Gets the result from the division, checks if remainder left
                let quotient = 0;
                let remainder = 0;
                let checkResult = isWholeNumber(Number(numberOne.value), Number(numberTwo.value));

                if (checkResult === false) {
                    quotient = Math.floor(Number(numberOne.value) / Number(numberTwo.value));
                    remainder = Number(numberOne.value) % Number(numberTwo.value);
                }
                let line = [];

                if (Number(answerField.value) === quotient && Number(remainderElement.value) == remainder) {
                    hiddenElement.style.display = "block";

                    answerElement.disabled = false;
                    remainderAnswer.disabled = false;

                    answerElement.value = quotient.toString();
                    remainderAnswer.value = remainder.toString();
                
                    line.push(`Браво, твоят отговор частно ${quotient} с остатък ${remainder} е верен!`);
                    line.push('Изчакай, докато подготвим нови примери за теб!');
                    hiddenElement.textContent = line.join('\n');
                    setTimeout(() => {
                        document.getElementById('calculator-div').reset();
                    }, 3000);
                    setTimeout(() => {
                        hiddenElement.style.display = "none";
                        window.location.reload();
                    }, 5000);
                } else if (result === resultToCheck) {
                    if (remainderElement == undefined) {
                        hiddenElement.style.display = "block";
                        answerElement.value = result.toString();
                        line.push( `Браво, твоят отговор ${resultToCheck} е верен!`);
                        line.push('Изчакай, докато подготвим нови примери за теб!');
                        hiddenElement.textContent = line.join('\n');
                        setTimeout(() => {
                            document.getElementById('calculator-sum').reset();
                        }, 3000);
                        setTimeout(() => {
                            hiddenElement.style.display = "none";
                            window.location.reload();
                        }, 5000);
                    }
                } else {
                    hiddenElement.style.display = "block";
                    hiddenElement.textContent = `Твоят отговор е грешен! Опитай отново!`;
                    answerField.value = '';
                    answerElement.value = '';
                    setTimeout(() => {
                        hiddenElement.style.display = "none";
                    }, 7000);
                }
            }

            getResult();
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

function isWholeNumber(valueOne, valueTwo) {
    let isWhole = false;
    if (valueOne % valueTwo === 0) {
        isWhole = true;
    } else {
        isWhole = false;
    }
    return isWhole;
}