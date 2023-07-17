// REVERSE ARRAY
const reverseArray = [1, 4, 6, 7];
const reverseArray2 = [7, 4, 2, 1];
const reverseArray3 = [5];

reverseArray.reverse();
console.log(reverseArray);
console.log(reverseArray2);
console.log(reverseArray3);

//SUM ARRAY
const sumArray = [8, 3, 9, 2, 5];
const sumArray2 = [1, 1, 1, 1, 1];
const sumArray3 = [0, 0, 0];
const sumArray4 = [5, 7];
const sumArray5 = [8];
const initialValue = 0;

const sumWhitInitial = (Array) => Array.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
console.log(sumWhitInitial(sumArray));
console.log(sumWhitInitial(sumArray2));
console.log(sumWhitInitial(sumArray3));
console.log(sumWhitInitial(sumArray4));
console.log(sumWhitInitial(sumArray5));

// LINEAR SEARCH
const linearSearch = [8, 3, 9, 2, 5];
const linearSearch2 = [2, 6, 7, 4, 1];
const linearSearch3 = [2, 6, 7, 5, 1];

const found = linearSearch.find(Element => Element === 3)
console.log(found)
const found2 = linearSearch2.find(Element => Element === 4)
console.log(found2)
const found3 = linearSearch3.find(Element => Element === 4)
console.log(found3)

// FIZZ BUZZ ARRAY
const fizzBuzzArray = [8 ,3 ,9 ,2 ,5]
const fizzBuzzArray2 = [3 ,4 ,6 ,7 ,9]
const fizzBuzzArray3 = [4 ,5 ,9 ,15 ,19]
const fizzBuzzArray4 = [2 ,4 ,7 ,8 ,1]

function ubahFizzBuzz 
(dataArray) {
    return dataArray.map(data => {
        if (data % 3 === 0 && data % 5 === 0) {
            return "FizzBuzz"
        }else if (data % 3 === 0) {
            return "Fizz"
        }else if (data % 5 === 0) {
            return "Buzz"
        }else{
            return data 
        }
    })
}

console.log(ubahFizzBuzz(fizzBuzzArray))
console.log(ubahFizzBuzz(fizzBuzzArray2))
console.log(ubahFizzBuzz(fizzBuzzArray3))
console.log(ubahFizzBuzz(fizzBuzzArray4))

// GET 3&5 NUMBER
const getNumber = [8 ,3 ,9 ,2 ,5]
const getNumber2 = [3 ,4 ,6 ,7 ,9]
const getNumber3 = [4 ,5 ,9 ,15 ,19]
const getNumber4 = [2 ,4 ,7 ,8 ,1]

function ambilKelipatan(dataArray) {
    const hasil = dataArray.filter(data => data % 3 === 0 || data % 5 === 0)
    return hasil.length > 0 ? hasil : null
}

console.log(ambilKelipatan(getNumber))
console.log(ambilKelipatan(getNumber2))
console.log(ambilKelipatan(getNumber3))
console.log(ambilKelipatan(getNumber4))

// PALIANDROME 
function isPalindrome(str) {
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}

console.log(isPalindrome("Hallo"));
console.log(isPalindrome("apa")); 
console.log(isPalindrome("oppa"));
console.log(isPalindrome("katak")); 
console.log(isPalindrome("rusak")); 

  
// MAX & MIN
function cariMaxMin(array) {
    const max = Math.max(...array);
    const min = Math.min(...array);
    return { max, min };
  }
  
  const array = [8, 3, 9, 4, 5];
  console.log(cariMaxMin(array));

//   GET 2D ARRAY
function hitungTotalNilai(dataArray) {
    let total = 0;
  
    dataArray.forEach(data => {
      const jumlah = data[1];
      total += jumlah;
      console.log(`Jumlah ${data[0]} ada ${jumlah}`);
    });
  
    console.log(`Total nilai: ${total}`);
  }
  
  const perlengkapan = [
    ["topi", 3],
    ["kaos", 6],
    ["jeans", 4],
  ];
  
  hitungTotalNilai(perlengkapan);

//   SUM 2D ARRAY
function hitungTotalNilai(dataArray) {
    let total = 0;
  
    dataArray.forEach(data => {
      data.forEach(item => {
        total += item;
      });
    });
  
    return total;
  }
  
  const array1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  console.log(hitungTotalNilai(array1));
  
  const array2 = [[1, 2], [4, 5, 6]];
  console.log(hitungTotalNilai(array2));
  
  const array3 = [[1, 2, 3, 4, 5]];
  console.log(hitungTotalNilai(array3)); 

//   MAX MIN 2D ARRAY
function hitungTotalNilai(dataArray) {
    const hasil = dataArray.map(data => {
      const total = data.reduce((acc, curr) => acc + curr, 0);
      return total;
    });
  
    return hasil;
  }
  
  const array2D = [[1, 2, 3], [6, 4, 5], [7, 9, 8]];
  console.log(hitungTotalNilai(array2D)); 
  
  const array2D1 = [[1, 2], [4, 5, 6]];
  console.log(hitungTotalNilai(array2D1)); 
  
  const array2D3 = [[4, 2, 5, 1, 3]];
  console.log(hitungTotalNilai(array2D3)); 
  
    