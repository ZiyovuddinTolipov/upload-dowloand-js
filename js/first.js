const formFirst =document.getElementById("w0");
const errText = document.querySelector('.err-text');

// alert("Please enter");
formFirst.addEventListener('submit', event => {
    event.preventDefault();

     const keyPage = document.getElementById("file-guid").value;
     if (keyPage == "6860-6564-2e7a-9161-c9b4-1871-8566") {
        // alert("hello")
        window.location.href = "https://repository-gov-uz.vercel.app/file.html";
     } else {
        // alert("eror");
        errText.style.display = 'inline';
     }
});