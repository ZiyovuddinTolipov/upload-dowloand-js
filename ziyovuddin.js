// funksiya qiymatlarini hisoblash
function y(x) {
    return Math.pow(6, x) + 8;
  }
  
  // a0, a1 va b1 koeffitsientlarini hisoblash
  function calculateCoefficients() {
    const a0 = (1/2) * (y(-1) + y(1));
    const a1 = (1/2) * (y(-1) - y(1));
    const b1 = (1/(2*Math.PI)) * (y(-1) - y(1));
    return [a0, a1, b1];
  }
  
  // natijalarni console ga chiqarish
  const [a0, a1, b1] = calculateCoefficients();
  console.log(`a0 = ${a0}`);
  console.log(`a1 = ${a1}`);
  console.log(`b1 = ${b1}`);