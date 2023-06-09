const form = document.getElementById('file-upload-form');

const fileInput = document.querySelector('input[type="file"]');
const keyInput = document.querySelector('input[type="text"]');
form.addEventListener('submit', event => {
  event.preventDefault();


  const formData = new FormData();

  formData.append('file', fileInput.files[0]);
  formData.append('text', keyInput.value);

  fetch(`https://onlinemarketshop.pythonanywhere.com/upload/${keyInput.value}`, {
    method: 'POST',
    body: formData
  })
    .then(response => response.json())
    .then(response => {

      if (response.success == true) {
        alert('Yuklandi')
        keyInput.style.borderColor = ' #ddd';
        location.reload();

      } else {
        keyInput.value = ""
        keyInput.classList.add('erorr');
        keyInput.style.borderColor = 'red';
      }

    })
    .catch(error => {
      console.error('Fayl yuklanmadi' + error.message)
    });
});
let fileInputName = document.getElementById('up');
let span = document.getElementById('upload');

// Fires on file upload
fileInputName.addEventListener('change', function (event) {

  let fileName = fileInputName.files[0].name.slice(0, 10);
  // console.log(fileName)

  span.innerText = fileName;



  fileInput.addEventListener('change', (event) => {
    const fileList = event.target.files;

    for (let i = 0; i < fileList.length; i++) {
      const file = fileList[i];
      const fileName = file.name;
      const fileType = file.type;

      if (fileType === 'application/pdf' || fileType === 'application/msword' || fileType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
        console.log('Fayl qabul qilindi: ' + fileName);
      } else {
        console.log('Noto\'g\'ri fayl turi: ' + fileName);
      }
    }
  });
});