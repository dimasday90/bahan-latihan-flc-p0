/*
===============
Shortest Word
===============

[INSTRUCTIONS]
shortestWords adalah sebuah function yang menerima satu parameter berupa string,
di mana string tersebut adalah sebuah kalimat dengan rangkaian kata-kata.
function akan mereturn sebuah array yang terdiri dari kata dengan jumlah huruf paling sedikit di kalimat tersebut.

[RULE]
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi array untuk pemecahan masalah.
- Dilarang menggunakan indexOf, match, reduce, map dan regex

[EXAMPLE]
input: Do you want to become a great coder.
proses: panjang kata paling sedikit dalam kalimat tersebut: 1, maka akan mencari kata dengan huruf tersebut
output: ['a']

input (kalimat): You dont know what you have until you lose it!.
proses: panjang kata paling sedikit dalam kalimat tersebut: 3, maka akan mencari kata dengan huruf tersebut
output: ['you', 'it!']
*/


function shortestWords(words) {
    var arr = words.split(' ');
    var result = [];
    var str = arr[0]
    for(var i = 1; i < arr.length; i ++) {
        if(arr[i].length <= str.length && arr[i] !== '') {
            str = arr[i];
            result.push(str)
        }
    }
    result.push(str)
    if(result.length === 1) {
        return result;
    } else {
        result.splice(result.length - 1, 1)
        if(result[0].length > result[1].length || result[0] === result[1]) {
            result.splice(0, 1)
        }
        return result
    }
}

console.log(shortestWords('Do you want to become a great coder ?')); // ['a', '?']
console.log(shortestWords('You dont know what you have until you lose it!')); // ['you', 'it!'] \\ kalo keluarnya ["You"] boleh ga?
console.log(shortestWords('I am diligent')); // ['I']
console.log(shortestWords('Apapun hasilnya, kita sudah berusaha, serahkan saja')); // ['kita', 'saja']