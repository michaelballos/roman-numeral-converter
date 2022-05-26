/**
 * Converts an integer into a roman numeral.
 * @param {number} number input to convert
 * @returns Roman numeral
 */
function convertToRoman(number) {
  const romanNumeralMap = new Map([
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I'],
  ]);
  const romanNumeralArray = [];
  for (const [value, romanNumeral] of romanNumeralMap) {
    while (number >= value) {
      romanNumeralArray.push(romanNumeral);
      number -= value;
    }
  }
  return romanNumeralArray.join('');
}

// results
console.log(
  convertToRoman(36),
  convertToRoman(8),
  convertToRoman(85),
  convertToRoman(10),
  convertToRoman(2),
  convertToRoman(3),
  convertToRoman(4),
  convertToRoman(5),
  convertToRoman(9),
  convertToRoman(12),
  convertToRoman(16),
  convertToRoman(29),
  convertToRoman(44),
  convertToRoman(45),
  convertToRoman(68),
  convertToRoman(83),
  convertToRoman(97),
  convertToRoman(99),
  convertToRoman(400),
  convertToRoman(500),
  convertToRoman(501),
  convertToRoman(649),
  convertToRoman(798),
  convertToRoman(891),
  convertToRoman(1000),
  convertToRoman(1004),
  convertToRoman(1006),
  convertToRoman(1023),
  convertToRoman(2014),
  convertToRoman(3999)
);
