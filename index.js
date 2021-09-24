window.addEventListener('load', () => {
    const sumOne = document.getElementById('sum-one');
    sumOne.value = Math.floor(Math.random() * 9999) + 1;
    const sumTwo = document.getElementById('sum-two');
    sumTwo.value = Math.floor(Math.random() * 99) + 1;
    const sumBtn = document.getElementById('sum-button');
    const sumResult = document.getElementById('sum-result');
    const sumAnswer = document.getElementById('sum-answer');
    const sumHidden = document.getElementById('sum-result-hidden');
    
    if (sumBtn) {
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
                        sumOne.value = '';
                        sumTwo.value = '';
                        sumResult.value = '';
                        sumAnswer.value = '';
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

});

