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
  for(let i = 0; i < expr.length; i++)
  {
      for(let j = 5; j > 0; j--)
      {
          if(MORSE_TABLE[expr.substring(i, i+j)])
          {
              expr = expr.replace(expr.substring(i, i+j), MORSE_TABLE[expr.substring(i, i+j)]);
              j =0;
          }
      }
  }
  expr = expr.replace(new RegExp("0", "g"), "");
  for (let i = 0; i < expr.length; i += 11) {
    expr = expr.replace("**********", " ");
  }
  return expr;
}

module.exports = {
    decode
}
