const form = document.getElementById('w1');
const subBtn = document.getElementById('subBtn');
const controlLabel = document.querySelector('.control-label');
const errText = document.querySelector('.err-text');
const errText2 = document.querySelector('.err-text-2');

// console.log("hello");

function randomNums() {

    var rand_num1 = Math.floor(Math.random() * 10) + 1;

    var rand_num2 = Math.floor(Math.random() * 10) + 1;

    document.getElementById("chaptcha-1").innerHTML = rand_num1;

    document.getElementById("chaptcha-2").innerHTML = rand_num2;

}


form.addEventListener('submit', event => {
    event.preventDefault();
    let digit2 = parseInt(document.getElementById("chaptcha-2").innerHTML);
    let digit1 = parseInt(document.getElementById("chaptcha-1").innerHTML);

    let answer = document.getElementById("repopinmodel-verifycode");
    // console.log(digit1, digit2);
    

    const keyInput = document.getElementById('repopinmodel-pin_code');

    let sum = digit1 + digit2;

    if (answer.value == "" || keyInput.value == "") {

        // alert("Please add the numbers");
        randomNums()
        keyInput.style.borderColor = 'red';
        answer.value=""
        answer.style.borderColor = 'red';
        answer.style.color = 'red';

    } else if (answer.value != sum) {
        // alert("Your math is wrong");
        answer.style.borderColor = 'red';
        answer.style.color = 'red';
        randomNums()
        answer.value = ""
        answer.style.color = '#000';


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
                    errText.style.display = 'inline';
                } else {
                    console.log('No');
                    window.location.href = `https://onlinemarketshop.pythonanywhere.com/doc/${keyInput.value}`;
                    alert('Файл загружен!!!');
                    keyInput.style.borderColor = ' #ddd';
                    location.reload();
                }
            }
            )

            .catch(error => {
                console.error('При загрузке возникла проблема:', error);
            });

        

    }
});

