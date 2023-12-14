const formFirst = document.getElementById("w0");
const errText = document.querySelector('.err-text');

formFirst.addEventListener('submit', event => {
   event.preventDefault();
   const keyPage = document.getElementById("file-guid").value;
   if (keyPage == "6860-6564-2e7a-9161-c9b4-1871-8566") {
      window.location.href = "file.html";
   } else {
      errText.style.display = 'inline';
   }
});
