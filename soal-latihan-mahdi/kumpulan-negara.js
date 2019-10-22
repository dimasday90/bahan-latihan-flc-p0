/*
  =======================
  Kumpulan Nama Negara
  =======================

  Deskripsi: Sebuah fungsi yang akan mengembalikan kumpulan-kumpulan nama negara. 
  Yang dikelompokkan sesuai abjad pertama dari nama negara-negara tersebut.
  Kemudian dihitung ada berapa negara yang memiliki abjad awal yang sama.
  
  rules:
  1. tidak boleh menggunakan built in function kecuali .push() dan .unshift()
  2. Function menerima parameter berupa nama-nama negara
  3. Function akan mengembalikan multidimensional Array
*/

function countryCollection(countries) {
  // you can only write your code here!
  var result = [];
  for(var i = 0; i < countries.length; i ++) {
    result.push(group(countries[i], countries))
  }
  return bener(result)
}

function group(str, arr) {
  var result = [str[0][0]];
  var count = 0;
  for(var i = 0; i < arr.length; i ++) {
    if(result[0] === arr[i][0]) {
      result.push(arr[i])
      count ++
    }
  }
  result.push(count);
  return result;
}

function bener(array) {
  var obj = {}
  var result = []
  for(var r = 0; r < array.length; r ++) {
    var key = array[r][0]
    // console.log(key);
    if(!obj[key]) {
      // console.log(obj[key]);
      result.push(array[r])
      obj[key] = 'found';
    }
    // console.log(obj);
  }
  return result
}



console.log(countryCollection(["Barbados", "Oman", "Gibraltar", "Malaysia", "Suriname", "Mayotte", "Turkmenistan", "Austria", "Somalia"]))
// [ 
//   [ 'B', 'Barbados', 1 ],
//   [ 'O', 'Oman', 1 ],
//   [ 'G', 'Gibraltar', 1 ],
//   [ 'M', 'Malaysia', 'Mayotte', 2 ],
//   [ 'S', 'Suriname', 'Somalia', 2 ],
//   [ 'T', 'Turkmenistan', 1 ],
//   [ 'A', 'Austria', 1 ] 
// ]
console.log(countryCollection(["Bhutan", "Comoros", "Botswana", "Iceland", "Lesotho", "Liechtenstein", "Malawi", "Algeria", "Azerbaijan", "Indonesia", "Andorra", "Armenia"]))
// [
//   [ 'B', 'Bhutan', 'Botswana', 2 ],
//   [ 'C', 'Comoros', 1 ],
//   [ 'I', 'Iceland', 'Indonesia', 2 ],
//   [ 'L', 'Lesotho', 'Liechtenstein', 2 ],
//   [ 'M', 'Malawi', 1 ],
//   [ 'A', 'Algeria', 'Azerbaijan', 'Andorra', 'Armenia', 4 ]
// ]