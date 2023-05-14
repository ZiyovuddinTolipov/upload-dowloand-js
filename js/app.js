const form = document.getElementById('w0');
const subBtn = document.getElementById('subBtn');

form.addEventListener('submit', event => {
    event.preventDefault();

    const keyInput = document.getElementById('file-guid');

    fetch(`https://onlinemarketshop.pythonanywhere.com/doc/${keyInput.value}`)
        .then(response => {
            console.log(response.status);
            const contentType = response.headers.get('content-type').split('/')[1];
            console.log(contentType);
            if (!response.ok ) {
                throw new Error('Ulanishda muammo');
            } 
            else if (response.status === 200) {
                window.location.href = `https://onlinemarketshop.pythonanywhere.com/doc/${keyInput.value}`;  
            } else if (response.status === 404){
                console.log('erorr');
            }
        }

        )
        // .then( blob => {
        //         const url = window.URL.createObjectURL(new Blob([blob]));
        //         const link = document.createElement('a');
        //         link.href = url;
        //         link.setAttribute('download', `${keyInput.value}`)
        //         document.body.appendChild(link);
        //         link.click();
        //         link.parentNode.removeChild(link);
        //         location.reload();
        // }
        // )
        .catch(error => {
            console.error('Yuklab olishda muammo yuz berdi:', error);
        });
});

