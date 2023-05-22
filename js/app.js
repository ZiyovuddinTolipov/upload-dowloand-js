const form = document.getElementById('w1');
const subBtn = document.getElementById('subBtn');
const controlLabel = document.querySelector('.control-label');
const errText = document.querySelector('.err-text');
// console.log("hello");
form.addEventListener('submit', event => {
    event.preventDefault();
    let answer = document.getElementById("repopinmodel-verifycode").value;

    let digit1 = parseInt(document.getElementById("chaptcha-1").innerHTML);

    let digit2 = parseInt(document.getElementById("chaptcha-2").innerHTML);
    

    const keyInput = document.getElementById('repopinmodel-pin_code');

    let sum = digit1 + digit2;

    if (answer == "") {

        alert("Please add the numbers");

    } else if (answer != sum) {

        // alert("Your math is wrong");
        answer.style.borderColor = 'red';
        answer.style.color = 'red';

    } else {

        // all good now! //
        fetch(`https://onlinemarketshop.pythonanywhere.com/doc/${keyInput.value}`)
            // .then(response => response)
            .then(response => {
                console.log(response);
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

        document.getElementById("status").innerHTML = "Correct, it is now safe to submit the form";

        document.getElementById("answer").value = "";

    }
});

