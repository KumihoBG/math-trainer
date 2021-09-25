window.addEventListener('load', () => {
    document.getElementById('wrapper').style.display = "none";
    setTimeout(() => {
        document.getElementById('loading').style.display = "none";
        document.getElementById('wrapper').style.display = "block";
    }, 10000);


    // Divide numbers
    const divOne = document.getElementById('div-one');
    divOne.value = Math.floor(Math.random() * 9999) + 1;
    const divTwo = document.getElementById('div-two');
    divTwo.value = Math.floor(Math.random() * 99) + 1;
    const divBtn = document.getElementById('div-button');
    const divResult = document.getElementById('div-result');
    const divAnswer = document.getElementById('div-answer');
    const divHidden = document.getElementById('div-result-hidden');

    if (divTwo.value == 0) {
        divTwo.value = Math.floor(Math.random() * 99) + 1;
    }

    const result = Number(divOne.value) / Number(divTwo.value);
    const checkResult = isWholeNumber(result);
    if (checkResult === false) {
        location.reload();
        return false;
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

    // Sum numbers
    const sumOne = document.getElementById('sum-one');
    sumOne.value = Math.floor(Math.random() * 9999) + 1;
    const sumTwo = document.getElementById('sum-two');
    sumTwo.value = Math.floor(Math.random() * 99) + 1;
    const sumBtn = document.getElementById('sum-button');
    const sumResult = document.getElementById('sum-result');
    const sumAnswer = document.getElementById('sum-answer');
    const sumHidden = document.getElementById('sum-result-hidden');

    // Substract numbers
    const subOne = document.getElementById('sub-one');
    subOne.value = Math.floor(Math.random() * 9999) + 1;
    const subTwo = document.getElementById('sub-two');
    subTwo.value = Math.floor(Math.random() * 99) + 1;
    const subBtn = document.getElementById('sub-button');
    const subResult = document.getElementById('substr-result');
    const subAnswer = document.getElementById('substr-answer');
    const subHidden = document.getElementById('sub-result-hidden');

    // Multiply numbers
    const multOne = document.getElementById('mult-one');
    multOne.value = Math.floor(Math.random() * 9999) + 1;
    const multTwo = document.getElementById('mult-two');
    multTwo.value = Math.floor(Math.random() * 99) + 1;
    const multBtn = document.getElementById('mult-button');
    const multResult = document.getElementById('mult-result');
    const multAnswer = document.getElementById('mult-answer');
    const multHidden = document.getElementById('mult-result-hidden');

    // Sum numbers
    if (subBtn) {
        sumBtn.addEventListener('click', (e) => {
            e.preventDefault();

            function sumNumbers() {
                const result = Number(sumOne.value) + Number(sumTwo.value);
                const answer = Number(sumResult.value);

                if (isNaN(sumResult.value) || sumResult.value === '') {
                    return notify(`Подал си неправилни или липсващи данни! Въведи цифри!`);
                }

                sumAnswer.disabled = false;
                if (result === answer) {
                    sumHidden.style.display = "block";
                    sumAnswer.value = result.toString();
                    sumHidden.textContent = `Твоят отговор ${answer} е верен! Браво!`;
                    setTimeout(() => {
                        document.getElementById('calculator-sum').reset();
                    }, 3000);
                    setTimeout(() => {
                        sumHidden.style.display = "none";
                        window.location.reload();
                    }, 5000);
                } else {
                    sumHidden.style.display = "block";
                    sumHidden.textContent = `Твоят отговор ${answer} е грешен! Опитай отново!`;
                    sumResult.value = '';
                    sumAnswer.value = '';
                    setTimeout(() => {
                        sumHidden.style.display = "none";
                    }, 7000);
                }
            }

            sumNumbers();

            function notify(message) {
                sumHidden.style.display = "block";
                sumHidden.textContent = message;
                setTimeout(() => {
                    sumHidden.style.display = "none";
                }, 5000);
                return;
            }
        });
    }

    // Substract numbers
    if (subBtn) {
        subBtn.addEventListener('click', (e) => {
            e.preventDefault();

            function sumNumbers() {
                const result = Number(subOne.value) - Number(subTwo.value);
                const answer = Number(subResult.value);

                if (isNaN(subResult.value) || subResult.value === '') {
                    return notify(`Подал си неправилни или липсващи данни! Въведи цифри!`);
                }

                subAnswer.disabled = false;
                if (result === answer) {
                    subHidden.style.display = "block";
                    subAnswer.value = result.toString();
                    subHidden.textContent = `Твоят отговор ${answer} е верен! Браво!`;
                    setTimeout(() => {
                        document.getElementById('calculator-sub').reset();
                    }, 3000);
                    setTimeout(() => {
                        subHidden.style.display = "none";
                        window.location.reload();
                    }, 5000);
                } else {
                    subHidden.style.display = "block";
                    subHidden.textContent = `Твоят отговор ${answer} е грешен! Опитай отново!`;
                    subResult.value = '';
                    subAnswer.value = '';
                    setTimeout(() => {
                        subHidden.style.display = "none";
                    }, 7000);
                }
            }

            sumNumbers();

            function notify(message) {
                subHidden.style.display = "block";
                subHidden.textContent = message;
                setTimeout(() => {
                    subHidden.style.display = "none";
                }, 5000);
                return;
            }
        });
    }

    // Multiply numbers
    if (multBtn) {
        multBtn.addEventListener('click', (e) => {
            e.preventDefault();

            function sumNumbers() {
                const result = Number(multOne.value) * Number(multTwo.value);
                const answer = Number(multResult.value);

                if (isNaN(multResult.value) || multResult.value === '') {
                    return notify(`Подал си неправилни или липсващи данни! Въведи цифри!`);
                }

                multAnswer.disabled = false;
                if (result === answer) {
                    multHidden.style.display = "block";
                    multAnswer.value = result.toString();
                    multHidden.textContent = `Твоят отговор ${answer} е верен! Браво!`;
                    setTimeout(() => {
                        document.getElementById('calculator-mult').reset();
                    }, 3000);
                    setTimeout(() => {
                        multHidden.style.display = "none";
                        window.location.reload();
                    }, 5000);
                } else {
                    multHidden.style.display = "block";
                    multHidden.textContent = `Твоят отговор ${answer} е грешен! Опитай отново!`;
                    multResult.value = '';
                    multAnswer.value = '';
                    setTimeout(() => {
                        multHidden.style.display = "none";
                    }, 7000);
                }
            }

            sumNumbers();

            function notify(message) {
                multHidden.style.display = "block";
                multHidden.textContent = message;
                setTimeout(() => {
                    multHidden.style.display = "none";
                }, 5000);
                return;
            }
        });
    }

    // Divide numbers
    if (divBtn) {
        divBtn.addEventListener('click', (e) => {
            e.preventDefault();

            function sumNumbers() {
                const result = Number(divOne.value) / Number(divTwo.value);
                const answer = Number(divResult.value);
                if (divTwo.value == 0 && result == Infinity) {
                    return notify('Не може да се дели с нула!\n Моля, натисни F5, за да презаредиш страницата!');
                }
                if (isNaN(divResult.value) || divResult.value === '') {
                    return notify(`Подал си неправилни или липсващи данни! Въведи цифри!`);
                }

                divAnswer.disabled = false;
                if (result === answer) {
                    divHidden.style.display = "block";
                    divAnswer.value = result.toString();
                    divHidden.textContent = `Твоят отговор ${answer} е верен! Браво!`;
                    setTimeout(() => {
                        document.getElementById('calculator-div').reset();
                    }, 3000);
                    setTimeout(() => {
                        divHidden.style.display = "none";
                        window.location.reload();
                    }, 5000);
                } else {
                    divHidden.style.display = "block";
                    divHidden.textContent = `Твоят отговор ${answer} е грешен! Опитай отново!`;
                    divResult.value = '';
                    divAnswer.value = '';
                    setTimeout(() => {
                        divHidden.style.display = "none";
                    }, 7000);
                }
            }

            sumNumbers();

            function notify(message) {
                divHidden.style.display = "block";
                divHidden.textContent = message;
                setTimeout(() => {
                    divHidden.style.display = "none";
                }, 5000);
                return;
            }
        });
    }
});

