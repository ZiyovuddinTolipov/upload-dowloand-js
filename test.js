// // Nomerlarni va ismlarni saqlash uchun massivlar
// var nomerlar = [11,12,13];
// var ismlar = ["o'z bir","o'n ikki","o'n uch"];

// // Nomerni va ismni chiqarish funktsiyasi
// function chiqarish() {
//   // Random nomer generatsiya qilish
//   var nomer = Math.floor(Math.random() * 10) + 1;
//   nomerlar.push(nomer);

//   // Random ism generatsiya qilish
//   var ism = "Ism" + nomer;
//   ismlar.push(ism);

//   // Nomerni va ismni konsolga chiqarish
//   console.log("Nomer: " + nomer + ", Ism: " + ism);
// }

// // 10 ta nomer va ism generatsiya qilish

//   chiqarish();


// // Random ismlar generatsiya qilish
// const valueIMG = [7, 8, 6, 4, 9, 4, 8, 1, 7, 3, 7];
// const valueURL = [
//   "./images/captcha/random0.png",
//   "./images/captcha/random1.png",
//   "./images/captcha/random2.png",
//   "./images/captcha/random3.png",
//   "./images/captcha/random4.png",
//   "./images/captcha/random5.png",
//   "./images/captcha/random6.png",
//   "./images/captcha/random7.png",
//   "./images/captcha/random8.png",
//   "./images/captcha/random9.png",
//   "./images/captcha/random10.png"
// ];

// // Random malumotlarni generatsiya qilish
// let randomNum = Math.floor(Math.random() * 10)
// var malumot = {
//   nomer: valueURL[randomNum],
//   // ism: ismlar[Math.floor(Math.random() * ismlar.length)]
//   ism: valueIMG[randomNum]
// };
// console.log(malumot);
// 7, 8, 6, 4, 9, 4, 8, 1, 7, 3, 7

// var myArray = [
//   { valueURL: "./images/captcha/random0.png", valueIMG: 7 },
//   { valueURL: './images/captcha/random1.png', valueIMG: 8 },
//   { valueURL: './images/captcha/random2.png', valueIMG:6 },
//   { valueURL: './images/captcha/random3.png', valueIMG: 4 },
//   { valueURL: './images/captcha/random4.png', valueIMG: 9 },
//   { valueURL: './images/captcha/random5.png', valueIMG: 4 },
//   { valueURL: './images/captcha/random6.png', valueIMG: 8 },
//   { valueURL: './images/captcha/random7.png', valueIMG: 1 },
//   { valueURL: './images/captcha/random8.png', valueIMG: 7 },
//   { valueURL: './images/captcha/random9.png', valueIMG: 3 },
//   { valueURL: './images/captcha/random10.png', valueIMG: 7 }

// ];

// var randomIndex = Math.floor(Math.random() * myArray.length);
// // console.log(randomIndex+1);
// console.log(myArray[randomIndex].valueIMG);
// console.log(myArray[randomIndex].valueURL);
// function getRandomArray() {
//   var myArray = [1, 2, 3, 4, 5]; // O'zgartirishingiz kerak bo'lgan massivni shu yerdagi qiymatlar bilan almashtiring yoki random qilib oling
//   var randomIndex = Math.floor(Math.random() * myArray.length);
//   var randomValue = myArray[randomIndex];
//   console.log(randomValue);
//   return randomValue; // Qiymatni funksiyadan tashqarida ham olish uchun return qilamiz
// }

// var result = getRandomArray(); // Funktsiyani chaqirish va natijani o'zgaruvchiga o'rnating
// console.log(result);
// Fonksiyon içindeki değişkeni dışarıda kullanma
var externalVariable; // Dışarıda tanımlanan değişken

function myFunction() {
  // var internalVariable = "Bu değişken fonksiyon içinde";
  externalVariable = Math.floor(Math.random() * 10);;
  // console.log(internalVariable); // "Bu değişken fonksiyon içinde"
  console.log(externalVariable); // "Bu değişken fonksiyon dışında"
}

myFunction();
console.log(externalVariable); 