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
  let morse = {};
  for (let name in MORSE_TABLE) {
    morse[Object.values(MORSE_TABLE[name])] = name;
  }
  for (let letter in morse) {
    let zeros = 10 - morse[letter].length * 2;
    let str = "0";
    str = str.repeat(zeros);
    morse[letter] =
      str + morse[letter].split("").map((item) => {
          return item == "." ? (item = "10") : (item = "11");
        }).join("");
  }
  morse[" "] = "**********";
  let arr = [];
  for(let i=0; i< expr.length-10; i+=10)
  arr.push(expr.substring(i, i+10));
  let res = [];
  for( i in arr) 
  {
      res.push(Object.keys(morse).find(key => morse[key] === arr[i]));
  }
    return res.join('');
}

module.exports = {
    decode
}
