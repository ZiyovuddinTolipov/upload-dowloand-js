const form = document.getElementById('w1');
const subBtn = document.getElementById('subBtn');
console.log("hello");
form.addEventListener('submit', event => {
    event.preventDefault();

    const keyInput = document.getElementById('repopinmodel-pin_code');

    fetch(`https://onlinemarketshop.pythonanywhere.com/doc/${keyInput.value}`)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            if (response.success == true) {
                window.location.href = `https://onlinemarketshop.pythonanywhere.com/doc/${keyInput.value}`;
                alert('Файл загружен!!!');
                keyInput.style.borderColor = ' #ddd';
                location.reload();

            } else {
                keyInput.value = ""
                keyInput.classList.add('erorr');
                keyInput.style.borderColor = 'red';
            }
            // if (!response.ok ) {
            //     throw new Error('Ulanishda muammo');
            // } 

        }

        )

        .catch(error => {
            console.error('При загрузке возникла проблема:', error);
        });
});

