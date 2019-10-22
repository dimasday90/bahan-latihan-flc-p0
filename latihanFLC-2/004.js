/*
================
MISSING NUMBER
================

description: Sebuah fungsi untuk mencari angka yang hilang berdasarkan pola dari board atau
papan yang tersedia. Fungsi akan mengembalikan nilai sebuah array yang berisi
angka-angka yang hilang

examples:
INPUT = 
[
  [ 7 ,' ', 5 ],
  [' ', 8 , 9 ]
  [ 1 ,' ',' '] 
]

ASUMSI PADA PAPAN SUDAH TERDAPAT RANGE TERBESAR DAN TERKECIL YAITU 1 DAN 9 SEHINGGA
OUTPUT:
[ 2, 3, 4, 6]

PADA MASING-MASING TEST CASE SUDAH TERDAPAT RANGE TERBESAR DAN TERKECIL
*/

function missingNum ( arr ) {
  // Your code here
  var arr1 = [];
  for(var i = 0; i < arr.length; i ++) {
    for(var j = 0; j < arr[i].length; j ++) {
      // console.log(arr[i][j])
      if(typeof arr[i][j] === typeof 0) {
        arr1.push(arr[i][j]);
      }
    }
  }
  // console.log(arr1);
  var result = arr1.sort()
  // console.log(result);
  for(var k = 0; k < result.length; k ++) {
    if(result[k] === 9 && result[k] === result[result.length - 1]) {
      result.splice(k, 1);
    } else if(result[k] === result[result.length - 1]) {
      result[k] --
    } else {
      result[k] ++
    }
  }
  return result;
}


console.log(missingNum([[3,' ', 5], [1,' ', 7], [9,' ',' ']])) // [ 2, 4, 6, 8 ]
console.log(missingNum([[ 2,' '], [' ',5]])) // [ 3, 4 ]
console.log(missingNum([[11,' ', 13], [17,' ', 19], [' ',16,' ']])) // [ 12, 14, 15, 18 ]
console.log(missingNum([[3,' ', 5, 15], [1,' ', 7, 13], [9,' ',' ', 12], [' ', 16,' ',' ']])) // [ 2, 4, 6, 8 ]
console.log(missingNum([])) // []