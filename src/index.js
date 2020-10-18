const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  expr = expr.replace(new RegExp("11", "g"), "-");
  expr = expr.replace(new RegExp("10", "g"), ".");
  for (let i = 0; i < expr.length; i += 11) {
    expr = expr.replace("**********", " ");
  }
  for (let i = 0; i < expr.length; i++) {
    if (
      expr[i] === "0" &&
      expr[i + 1] !== "0" &&
      expr[i + 1] !== "1" &&
      expr[i + 1] !== " "
    ) {
      let key = "";
      let j = i;
      while (
        expr[j + 1] !== "0" &&
        expr[j + 1] !== "1" &&
        expr[j + 1] !== " " &&
        j + 1 < expr.length
      ) {
        key += expr[j + 1];
        j++;
      }
      expr = expr.replace(key, MORSE_TABLE[key]);
    }
  }
  expr = expr.replace(new RegExp("0", "g"), "");
  return expr;
}

module.exports = {
    decode
}
