// The END
const form = document.getElementById('w1');
const subBtn = document.getElementById('subBtn');
const controlLabel = document.querySelector('.control-label');
const errText = document.querySelector('.err-text');
const errText2 = document.querySelector('.err-text-2');
const errTextCaptcha = document.querySelector('.err-text-captcha');
const chaptchaImg = document.querySelector('.chaptcha-1');



// function randomNums() {
// function getRandomItem(arr) {
//     const randomIndex = Math.floor(Math.random() * arr.length);
//     const item = arr[randomIndex];

//     // document.getElementById("chaptcha-2").innerHTML = rand_num2;
//     return item;
// }
// const array =
// [
//     "../images/captcha/random0.png",
//     "../images/captcha/random1.png",
//     "../images/captcha/random2.png",
//     "../images/captcha/random3.png",
//     "../images/captcha/random4.png",
//     "../images/captcha/random5.png",
//     "../images/captcha/random6.png",
//     "../images/captcha/random7.png",
//     "../images/captcha/random8.png",
//     "../images/captcha/random9.png",
//     "../images/captcha/random10.png"
// ];

//     const result = getRandomItem(array);
//     console.log(result);
//     document.getElementById("chaptcha-1").innerHTML = `<img src="${result}" alt="captcha" />`;

// }
// program to get a random item from an array

// function getRandomItem(arr) {

//     // get random index value
//     const randomIndex = Math.floor(Math.random() * arr.length);

//     // get random item
//     const item = arr[randomIndex];

//     return item;
// }

function getImagePath(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];

    // document.getElementById("chaptcha-2").innerHTML = rand_num2;
    return item;
    // return "./images/captcha/random5.png";
}
const array =
[
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

// const result = getImagePath(array);

function randomNums() {
    //   document.getElementById('someImage').src=getImagePath();

    chaptchaImg.style.backgroundImage = `url('${getImagePath(array)}')`
};
console.log( getImagePath(array));



form.addEventListener('submit', event => {
    event.preventDefault();
    let digit2 = parseInt(document.getElementById("chaptcha-2").innerHTML);
    let digit1 = parseInt(document.getElementById("chaptcha-1").innerHTML);

    let answer = document.getElementById("repopinmodel-verifycode");
    // console.log(digit1, digit2);


    const keyInput = document.getElementById('repopinmodel-pin_code');

    let sum = digit1 + digit2;
    console.log(answer.value >= 0);
    if (answer.value == "" && keyInput.value == "") {
        // console.log("Please add the numbers");
        randomNums()
        keyInput.style.borderColor = 'red';
        answer.value = ""
        answer.style.borderColor = 'red';
        answer.style.color = 'red';
        errTextCaptcha.style.display = 'inline';
        errText2.style.display = 'inline';
    } else if (answer.value == "" && keyInput.value >= 0) {
        errText2.style.display = 'disabled';
        errTextCaptcha.style.display = 'inline';
        errText.style.display = 'disabled';

        //  alert("Your math is wrong");
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
    else if (answer.value != sum) {
        answer.style.borderColor = 'red';
        answer.style.color = 'red';
        randomNums()
        answer.value = ""
        answer.style.color = '#000';
        errTextCaptcha.style.display = 'inline';

    } else {

        // all good now! //
        fetch(`https://onlinemarketshop.pythonanywhere.com/doc/${keyInput.value}`)
            // .then(response => response)
            .then(response => {
                // console.log(response);
                if (response.headers.get('Content-Type').includes('application/json')) {
                    // console.log('Yes');
                    keyInput.classList.add('erorr');
                    keyInput.style.borderColor = 'red';
                    controlLabel.style.color = 'red';
                    errText.style.color = 'red';
                    errText2.style.display = 'disabled';
                    errText.style.display = 'inline';
                    randomNums()
                } else {
                    // console.log('No');
                    // confirm('Файл загружен!!!');
                    keyInput.style.borderColor = ' #ddd';
                    errText.style.display = 'disabled';
                    errTextCaptcha.style.display = 'disabled';
                    controlLabel.style.color = 'black';
                    errText2.style.display = 'disabled';
                    window.location.href = `https://onlinemarketshop.pythonanywhere.com/doc/${keyInput.value}`;
                    keyInput.value = ''
                    answer.value = ""


                    // location.reload();
                }
            }
            )

            .catch(error => {
                console.error('При загрузке возникла проблема:', error);
            });



    }
});

