const form = document.getElementById('file-upload-form');

form.addEventListener('submit', event => {
    event.preventDefault();

    const fileInput = document.querySelector('input[type="file"]');
    const keyInput = document.querySelector('input[type="text"]');

    const formData = new FormData();

    // formData.append('file', fileInput.files[0]);
    // formData.append('text', keyInput.value);
    // console.log(keyInput.value);

    fetch(`https://onlinemarketshop.pythonanywhere.com/upload/${keyInput.value}`, {
        method: 'POST',
        body: formData
    })
        // .then(response  => response.json())
        .then(response => {
            // handle response
            console.log(response.json());
            // alert('Fayl yuklandi');
            // location.reload();

            formData.append('file', fileInput.files[0]);
            formData.append('text', keyInput.value);
        })
        .catch(error => {
            // alert('Error: ' + error.message)
            // handle error
            console.log(error);

            console.error('Fayl yuklanmadi' + error.message)
        });
});
let fileInputName = document.getElementById('up');
let span = document.getElementById('upload');

// Fires on file upload
fileInputName.addEventListener('change', function (event) {

    // Get file name
    let fileName = fileInputName.files[0].name.slice(0, 10);
    console.log(fileName);

    // Update file name in span
    span.innerText = fileName;

});