// The END
const form = document.getElementById('w1');
const subBtn = document.getElementById('subBtn');
const controlLabel = document.querySelector('.control-label');
const errText = document.querySelector('.err-text');
const errText2 = document.querySelector('.err-text-2');
const errTextCaptcha = document.querySelector('.err-text-captcha');
const chaptchaImg = document.querySelector('.chaptcha-1');
const glyphicon = document.querySelector('.glyphicon');

var randomValue1;

const myArray = [
    { valueURL: "./images/captcha/random0.png", valueIMG: 7 },
    { valueURL: './images/captcha/random1.png', valueIMG: 8 },
    { valueURL: './images/captcha/random2.png', valueIMG: 6 },
    { valueURL: './images/captcha/random3.png', valueIMG: 4 },
    { valueURL: './images/captcha/random4.png', valueIMG: 9 },
    { valueURL: './images/captcha/random5.png', valueIMG: 4 },
    { valueURL: './images/captcha/random6.png', valueIMG: 8 },
    { valueURL: './images/captcha/random7.png', valueIMG: 1 },
    { valueURL: './images/captcha/random8.png', valueIMG: 7 },
    { valueURL: './images/captcha/random9.png', valueIMG: 3 },
    { valueURL: './images/captcha/random10.png', valueIMG: 7 }

];
function randomNums(myArr) {
    console.log(myArr);
    var randomIndex = Math.floor(Math.random() * myArr.length);
    randomValue1 = myArr[randomIndex];
    chaptchaImg.style.backgroundImage = `url('${randomValue1.valueURL}')`
    console.log(randomValue1, 'randomValue');
    // location.reload()
    return randomValue1;
};
randomNums(myArray);

form.addEventListener('submit', event => {
    event.preventDefault();
    let answer = document.getElementById("repopinmodel-verifycode");
    const keyInput = document.getElementById('repopinmodel-pin_code');
    subBtn.disabled = true

    console.log(answer.value >= 0);
    if (answer.value == "" && keyInput.value == "") {
        randomNums(myArray)
        keyInput.style.borderColor = 'red';
        answer.value = ""
        answer.style.borderColor = 'red';
        answer.style.color = 'red';
        errTextCaptcha.style.display = 'inline';
        errText2.style.display = 'inline';
        subBtn.disabled = false;
    } else if (answer.value == "" && keyInput.value > 0) {
        errTextCaptcha.style.display = 'inline';
        errText2.style.display = 'disabled';
        errText.style.display = 'disabled';
        subBtn.disabled = false;
    }
    else if (answer.value == "") {
        errText2.style.display = 'inline';
        errText.style.display = 'disabled';
        errTextCaptcha.style.display = 'disabled';
        subBtn.disabled = false;

    } else if (keyInput.value == "") {
        errText2.style.display = 'inline';
        errText.style.display = 'disabled';
        randomNums(myArray);
        subBtn.disabled = false;


    }
    else if (answer.value != randomValue1.valueIMG) {
        answer.style.borderColor = 'red';
        answer.style.color = 'red';
        answer.value = ""
        answer.style.color = '#000';
        errTextCaptcha.style.display = 'inline';
        alert(data.valueIMG, answer.v)
        subBtn.disabled = false;
    } else {

        fetch(`https://onlinemarketshop.pythonanywhere.com/doc/${keyInput.value}`)
            // .then(response => response)
            .then(response => {
                // console.log(response);
                if (response.headers.get('Content-Type').includes('application/json')) {
                    console.log('Yes');
                    keyInput.classList.add('erorr');
                    keyInput.style.borderColor = 'red';
                    controlLabel.style.color = 'red';
                    // errText.style.color = 'red';
                    errText2.style.display = 'disabled';
                    errText.style.display = 'inline';
                    randomNums(myArray)
                    // alert('2')
                } else {
                    event.preventDefault();
                    // console.log('No');
                    errText.style.display = 'disabled';
                    errTextCaptcha.style.display = 'disabled';
                    errText2.style.display = 'disabled';
                    errText2.innerHTML = '';
                    errText.innerHTML = '';
                    errTextCaptcha.innerHTML = '';
                    controlLabel.style.color = 'black';
                    window.location.href = `https://onlinemarketshop.pythonanywhere.com/doc/${keyInput.value}`;
                    // confirm('Файл загружен!!!');
                    keyInput.style.borderColor = ' #ddd';
                    answer.style.borderColor = ' #ddd';
                    keyInput.value = '';
                    answer.value = "";
                    subBtn.disabled = false;
                    // randomNums(myArray);



                    // location.reload();
                }
            }
            )
            .catch(error => {
                console.error('При загрузке возникла проблема:', error);
            });
    }
});

