function handle1click() {
  console.log('first square clicked');
}

function ex1(array, maxIndexToSum) {
  let sum = 0
  for (var i = 0; i < maxIndexToSum; i++) {
    sum += array[i];
  }
  console.log('ex1:', 'sum:', sum)
  return sum;
}

function ex2(array) {
  let sumPosNums = 0, sumNegNums = 0
  for (var i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      sumPosNums++;
    } else {
      sumNegNums++;
    }
  }
  console.log('ex2:', 'overall positive numbers:', sumPosNums)
  console.log('ex2:', 'overall negative numbers:', sumNegNums)
}

function ex3(array, latter) {
  console.log('ex3:', 'array print:')
  for (var i = 0; i < array.length; i++) {
    console.log(array[i] + latter)
  }
}

function isPrime(num) {
  for (var i = 2; i < num; i++)
    if (num % i === 0) return false;
  return num > 1;
}

function ex4(number) {
  let flag = true;
  console.log('ex4:', 'array Primal numbers:')
  if (number === 0 || number === 1) {
    alert(`Primal Number cannot be ${number}`)
    return;
  }
  for (var i = 2; i < number; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}

function ex5(number) {
  let string = "";

  for (let n = 1; n <= number; n++) {
    for (let m = n; m < number; m++) {
      string += ' ';
    }
    string += '*' + createpalindrom(n) + '*' + '\n';
  }
  for (let n = number - 1; n >= 1; n--) {
    for (let m = n; m < number; m++) {
      string += ' ';
    }
    string += '*' + createpalindrom(n) + '*' + '\n';
  }
  console.log(string);
}

function createpalindrom(num) {
  let string = '';
  for (let n = 1; n <= num; n++) {
    string += n;
  }
  for (let n = num - 1; n >= 1; n--) {
    string += n;
  }

  return string;
}

function ex6(number) {
  if (number == -999) {
    return false;
  }
  let num = 0, temp = number, num5placer = 1000, num2placer = 10;
  while (temp > 100) {
    num = temp % 10;
    temp = Math.trunc(temp / 10);
  }
  switch (num) {
    case 2:
      temp = number;
      number = 0;
      let move = Math.trunc(temp / 1000);
      number += move;
      while (temp > 10) {
        num = temp % 10;
        number = number + num * num2placer;
        num2placer = num2placer * 10;
        temp = Math.trunc(temp / 10);
      }
      break;
    case 5:
      temp = number;
      number = 0;
      while (temp > 0) {
        num = temp % 10 * num5placer;
        number += num
        num5placer = num5placer / 10;
        temp = Math.trunc(temp / 10);
      }
      break;
    case 8:
      number = number * 8;
      break;
    default:
      temp = number;
      while (temp > 100) {
        num = temp % 100;
        temp = Math.trunc(temp / 100);
        number = num * 100 + temp
      }
      break;
  }
  if (number >= 1000 && number <= 5000) {
    alert('cool');
    return true;
  } else if (number > 5000 && number <= 10000) {
    alert('whats up mate?');
    return true;
  } else {
    alert('Something is not OK')
    return true;
  }
}

function ex11(array) {
  let min = array[0], max = 0, sum = 0;
  for (let x = 0; x < array.length; x++) {
    sum = sum + array[x];
    if (array[x] > max) {
      max = array[x];
    }
    if (array[x] < min) {
      min = array[x];
    }
    
  }
  console.log('lowest on array: ' + min + ' highest on array: ' + max + ' and sum is : ' + sum)
}

function ex9() {
  let morseStr = prompt('insert morse code');
  let word = '', morselatter = '';

  for (let x = 0; x < morseStr.length; x++) {
    if (morseStr[x] != ' ') {
      morselatter += morseStr[x];
    } if (morseStr[x] == ' ' || x + 1 == morseStr.length) {
      switch (morselatter) {
        case '.-':
          word += 'a'
          break;
        case '-...':
          word += 'b'
          break;
        case '-.-.':
          word += 'c'
          break;
        case '-..':
          word += 'd'
          break;
        case '.':
          word += 'e'
          break;
        case '..-.':
          word += 'f'
          break;
        case '--.':
          word += 'g'
          break;
        case '....':
          word += 'h'
          break;
        case '..':
          word += 'i'
          break;
        case '.---':
          word += 'j'
          break;
        case '-.-':
          word += 'k'
          break;
        case '.-..':
          word += 'l'
          break;
        case '--':
          word += 'm'
          break;
        case '-.':
          word += 'n'
          break;
        case '---':
          word += 'o'
          break;
        case '.--.':
          word += 'p'
          break;
        case '--.-':
          word += 'q'
          break;
        case '.-.':
          word += 'r'
          break;
        case '...':
          word += 's'
          break;
        case '-':
          word += 't'
          break;
        case '..-':
          word += 'u'
          break;
        case '...-':
          word += 'v'
          break;
        case '.--':
          word += 'w'
          break;
        case '-..-':
          word += 'x'
          break;
        case '-.--':
          word += 'y'
          break;
        case '--..':
          word += 'z'
          break;
        case '/':
          word += ' '
      }
      morselatter = ''
    }
  }
  alert(word);
}

function ex10(str1, str2) {
  let word1Cut = '', word2Cut = ''
  for (let x = 0; x < 2; x++) {
    word1Cut += str1[x]
  }
  for (let y = 0; y < 2; y++) {
    word2Cut += str2[y]
    str2[y] = ''
  }
  str2 = word1Cut + str2.slice(2)
  str1 = word2Cut + str1.slice(2)

  console.log(str1, str2)
}

function ex7(string) {
  let wordCatcher = '', flag = false, fixedString = string, cut = '';
  for (let x in string) {
    wordCatcher += string[x]
    if (wordCatcher == 'not ' && !flag) {
      flag = true;
      cut = string.slice(0, x - 3)
    } else if (wordCatcher == 'bad' && flag) {
      fixedString = cut + 'good!'
    }

    if (string[x] == ' ') {
      wordCatcher = '';
    }
  }
  console.log(fixedString)
}

const materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

console.log(materials.map(material => material.length));

const sharks = ['baby shark','mommy shark','grandma shark','grandpa shark','lets go hunt'];

let newharks = sharks.map((item) => {return item + ',' + ' doo'.repeat(6) +'\n'});

function ex12() {
  let song = '';
  for (let x in sharks) {
    for (let y = 0; y < 4; y++) {
      if (y <= 2) {
        song += newharks[x]
      } else {
        song += sharks[x] + '!\n'
      }
    }
  }
  console.log(song);
};

function ex13(a,b,c){
  let shoresh = b*b - 4*a*c,monePos,moneNeg,mechane;

  if(shoresh <= 0){
    console.log('no solution')
  }else {
monePos = -b + Math.sqrt(shoresh);
moneNeg = -b - Math.sqrt(shoresh);

if(moneNeg != 0){
console.log(moneNeg/(2*a))
}
if(monePos != 0){
  console.log(monePos/(2*a))
}
  }

}

const reverse = (string) => {
  return string.split('').reverse().join('');
}

function exES61(){
let text = prompt('enter text to reverse')
alert(reverse(text))
}

function exES62(obj,condition){
for(v in obj) {
  if(condition(obj[v])){
    delete obj[v]
  }
}
console.log(obj)
}


const minN = (array,num)=>{
const newArray = array.sort((a,b)=>a-b)
if(num == undefined){
  newArray = newArray.slice(0,1)
return newArray;
}else{
  const cutArray = newArray.slice(0,num);
  return cutArray;
}
}

function exES64(){
 let array = [42,54,2,214,546],num = 2;
 console.log(minN(array,num))
}

function exES65(obj,condition = (a, b) => a - b){
  for(v in obj) { 
      const newObj = obj.sort(condition).slice(0,1);
      return newObj[0];
  }
  }

function exES66(obj,condition){
  for(v in obj) {
    if(condition == undefined){
return true;
    }else if(!condition(obj[v])){
      return false;
    }
  }
  return true;
  }


  function exES68(numFrom,numTo,amount){
    let array = []
for(let x = 0; x < amount; x++){
array.push(Math.round(Math.random()*numTo)+numFrom)
}
console.log(array);
    }

