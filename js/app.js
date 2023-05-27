// The END
const form = document.getElementById('w1');
const subBtn = document.getElementById('subBtn');
const controlLabel = document.querySelector('.control-label');
const errText = document.querySelector('.err-text');
const errText2 = document.querySelector('.err-text-2');
const errTextCaptcha = document.querySelector('.err-text-captcha');
const chaptchaImg = document.querySelector('.chaptcha-1');

function randomNums() {
    const valueIMG = [7, 8, 6, 4, 9, 4, 8, 1, 7, 3, 7];
    const valueURL = [
        "./images/captcha/random0.png",
        "./images/captcha/random1.png",
        "./images/captcha/random2.png",
        "./images/captcha/random3.png",
        "./images/captcha/random4.png",
        "./images/captcha/random5.png",
        "./images/captcha/random6.png",
        "./images/captcha/random7.png",
        "./images/captcha/random8.png",
        "./images/captcha/random9.png",
        "./images/captcha/random10.png"
    ];

    const randomNum = Math.floor(Math.random() * 10)
    let malumot = {
        valueURL: valueURL[randomNum],
        valueIMG: valueIMG[randomNum]
    };
    chaptchaImg.style.backgroundImage = `url('${malumot.valueURL}')`
    // console.log(malumot,'first');
    return malumot;

};
// funksiya ichidagi malumotni tashqariga olib oldik
const data = randomNums();
console.log( data.valueIMG)

form.addEventListener('submit', event => {
    let answer = parseInt(document.getElementById("repopinmodel-verifycode").value);
    const keyInput = document.getElementById('repopinmodel-pin_code');

    console.log(answer.value >= 0);
    if (answer == "" && keyInput.value == "") {
        // console.log("Please add the numbers");
        randomNums()
        keyInput.style.borderColor = 'red';
        answer.value = ""
        answer.style.borderColor = 'red';
        answer.style.color = 'red';
        errTextCaptcha.style.display = 'inline';
        errText2.style.display = 'inline';
    } else if (answer == "" && keyInput.value >= 0) {
        errTextCaptcha.style.display = 'inline';
        errText2.style.display = 'disabled';
        errText.style.display = 'disabled';
    }
    else if (keyInput.value == "") {
        errText2.style.display = 'inline';
        errText.style.display = 'disabled';
        errTextCaptcha.style.display = 'disabled';

    } else if (keyInput.value == "") {
        errText2.style.display = 'inline';
        errText.style.display = 'disabled';
        randomNums()
    }
    else if (answer != data.valueIMG ) {
        answer.style.borderColor = 'red';
        answer.style.color = 'red';
        randomNums()
        answer = ""
        answer.style.color = '#000';
        errTextCaptcha.style.display = 'inline';
        alert('hi')

    } else {

        // all good now! //
        fetch(`https://onlinemarketshop.pythonanywhere.com/doc/${keyInput.value}`)
            // .then(response => response)
            .then(response => {
                // console.log(response);
                if (response.headers.get('Content-Type').includes('application/json')) {
                    console.log('Yes');
                    keyInput.classList.add('erorr');
                    keyInput.style.borderColor = 'red';
                    controlLabel.style.color = 'red';
                    errText.style.color = 'red';
                    errText2.style.display = 'disabled';
                    errText.style.display = 'inline';
                    randomNums()
                    alert('2')
                } else {
                    // console.log('No');
                    keyInput.style.borderColor = ' #ddd';
                    errText.style.display = 'disabled';
                    errTextCaptcha.style.display = 'disabled';
                    controlLabel.style.color = 'black';
                    errText2.style.display = 'disabled';
                    window.location.href = `https://onlinemarketshop.pythonanywhere.com/doc/${keyInput.value}`;
                    keyInput.value = ''
                    answer = ""
                    confirm('Файл загружен!!!');


                    // location.reload();
                }
            }
            )
            .catch(error => {
                console.error('При загрузке возникла проблема:', error);
            });
    }
});

