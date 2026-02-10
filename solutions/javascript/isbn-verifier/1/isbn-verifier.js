export const isValid = function(isbn) {
  const cleaned = isbn.replace(/-/g, '');

  let sum = 0;
  if (cleaned.length > 10) return false;
  for (let i = 0; i < 10; i++) {
    const char = cleaned[i];
    let value;
    if (char === 'X' && i === 9) {
      value = 10;
    } else {
      value = Number(char);
    }
    sum += value * (10 - i);
  }

  return sum % 11 === 0;
};