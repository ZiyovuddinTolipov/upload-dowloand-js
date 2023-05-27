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


// Random ismlar generatsiya qilish
const valueIMG = [7, 8, 6, 4, 9, 4, 8, 1, 7, 3, 7];
const valueURL = [
  "./images/captcha/random0.png",
  "./images/captcha/random1.png",
  "./images/captcha/random2.png",
  "./images/captcha/random3.png",
  "./images/captcha/random4.png",
  "./images/captcha/random5.png",
  "./images/captcha/random6.png",
  "./images/captcha/random7.png",
  "./images/captcha/random8.png",
  "./images/captcha/random9.png",
  "./images/captcha/random10.png"
];

// Random malumotlarni generatsiya qilish
let randomNum = Math.floor(Math.random() * 10)
var malumot = {
  nomer: valueURL[randomNum],
  // ism: ismlar[Math.floor(Math.random() * ismlar.length)]
  ism: valueIMG[randomNum]
};
console.log(malumot);


