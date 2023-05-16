const form = document.getElementById('w1');
const subBtn = document.getElementById('subBtn');
console.log("hello");
form.addEventListener('submit', event => {
    event.preventDefault();

    const keyInput = document.getElementById('repopinmodel-pin_code');

    fetch(`https://onlinemarketshop.pythonanywhere.com/doc/${keyInput.value}`)
        .then(response => {
            console.log(response.json());
            const contentType = response.headers.get('content-type').split('/')[1];
            console.log(contentType);
            if (!response.ok ) {
                throw new Error('Ulanishda muammo');
            } 
            else if (response.status === 200) {
                window.location.href = `https://onlinemarketshop.pythonanywhere.com/doc/${keyInput.value}`; 
                alert('Файл загружен!!!');
                location.reload(); 
            } else if (response.status === 404){
                console.log('erorr');
                 
            }
        }

        )
    
        .catch(error => {
            console.error('При загрузке возникла проблема:', error);
        });
});

