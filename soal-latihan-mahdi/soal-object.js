/*

Function travelingIndonesia akan mengembalikan nilai sebuah string suatu perjalanan seseorang
di kota-kota besar yang ada di Indonesia.

Secara berturut-turut rute akan berlangsung ;
Yogyakarta > Semarang > Surabaya > Denpasar

Rute tersebut berlaku arah sebaliknya.
Traveller dapat menggunakan transportasi yang disediakan oleh
Pemerintah yaitu berupa :

- Pesawat, biayanya 275000
- Kereta, biayanya 250000
- Bis, biayanya 225000

Biaya tersebut berlaku untuk jarak 1 kota saja.

Dikarenakan traveller berkeliling Indonesia bertepatan dengan digalakkannya visit Indonesia
Maka traveller akan mendapatkan diskon menggunakan metode pembayaran tertentu;

- OVO > akan mendapatkan diskon 15% setiap kota
- Dana > akan mendapatkan diskon 10% setiap kota
- Gopay > akan mendapatkan diskon 5% setiap kota
- Cash > normal;

Function tersebut akan mengembalikan siapa yang mengeluarkan biaya paling besar (sudah termasuk diskon);

Note:
1. Hanya boleh menggunakan built in function .push();

*/

function index(city, array) {
  for(var i = 0; i < array.length; i ++) {
    if(array[i] === city) {
      return i;
    }
  }
}

function transport(alat) {
  if(alat === 'Bis') {
    return 225000
  } else if(alat === 'Kereta') {
    return 250000
  } else if(alat === 'Pesawat') {
    return 275000
  }
}

function diskon(e) {
  if(e === 'OVO') {
    return 15
  } else if(e === 'Dana') {
    return 10
  } else if(e === 'Gopay') {
    return 5
  } else if(e === 'Cash') {
    return 1
  }
}

function list(array) {
  var result = []
  for(var i = 0; i < array.length; i ++) {
    var sub = [];
    var str = ''
    for(var j = 0; j < array[i].length; j ++) {
      if(array[i][j] === '-') {
        sub.push(str)
        str = ''
      } else {
        str += array[i][j]
      }
    }
    sub.push(str)
    result.push(sub);
  }
  return result
}

function terbesar(arr2) {
  var bool = false;
  while(!bool) {
    var swapped = 0;
    for(var i = 1; i < arr2.length; i ++) {
      if(arr2[i - 1]['totalCost'] < arr2[i]['totalCost']) {
        var swap = arr2[i];
        arr2[i] = arr2[i - 1];
        arr2[i - 1] = swap
        swapped ++
      }
    }
    if(swapped === 0) {
      bool = true
    }
  }
  return arr2
}

// function terkecil(arr2) {
//   var bool = false;
//   while(!bool) {
//     var swapped = 0;
//     for(var i = 1; i < arr2.length; i ++) {
//       if(arr2[i - 1]['totalCost'] > arr2[i]['totalCost']) {
//         var swap = arr2[i];
//         arr2[i] = arr2[i - 1];
//         arr2[i - 1] = swap
//         swapped ++
//       }
//     }
//     if(swapped === 0) {
//       bool = true
//     }
//   }
//   return arr2
// }

function travelingIndonesia(arr, emoney) {
  var destinations = ['Yogyakarta', 'Semarang', 'Surabaya', 'Denpasar']
  var result = []
  var listAll = list(arr)
  for(var i = 0; i < listAll.length; i ++) {
    var obj = {
      name: listAll[i][0],
      departureCity: listAll[i][1],
      destinationCity: listAll[i][2],
      transport: listAll[i][3],
      totalCost: 0
    };
    var jarak = index(obj.departureCity, destinations) - index(obj.destinationCity, destinations);
    if(jarak < 0) {
      jarak *= -1
    }
    obj.totalCost = (transport(obj.transport) * jarak) - ((transport(obj.transport) * jarak) * (diskon(emoney) / 100))
    result.push(obj)
  }
  return terbesar(result);
};


console.log(travelingIndonesia(['Danang-Yogyakarta-Semarang-Bis', 'Alif-Denpasar-Surabaya-Kereta', 'Bahari-Semarang-Denpasar-Pesawat'], 'OVO'));
/*
[ { name: 'Bahari',
    departureCity: 'Semarang',
    destinationCity: 'Denpasar',
    transport: 'Pesawat',
    totalCost: 467500 },
  { name: 'Alif',
    departureCity: 'Denpasar',
    destinationCity: 'Surabaya',
    transport: 'Kereta',
    totalCost: 212500 },
  { name: 'Danang',
    departureCity: 'Yogyakarta',
    destinationCity: 'Semarang',
    transport: 'Bis',
    totalCost: 191250 } ]
*/
console.log("==================================================================================================");
console.log(travelingIndonesia(['Shafur-Surabaya-Yogyakarta-Kereta', 'Taufik-Semarang-Surabaya-Pesawat', 'Alex-Yogyakarta-Semarang-Kereta'], 'Dana'));

// [ { name: 'Shafur',
//     departureCity: 'Surabaya',
//     destinationCity: 'Yogyakarta',
//     transport: 'Kereta',
//     totalCost: 450000 },
//   { name: 'Taufik',
//     departureCity: 'Semarang',
//     destinationCity: 'Surabaya',
//     transport: 'Pesawat',
//     totalCost: 247500 },
//   { name: 'Alex',
//     departureCity: 'Yogyakarta',
//     destinationCity: 'Semarang',
//     transport: 'Kereta',
//     totalCost: 225000 } ]
// */
console.log("==================================================================================================");
console.log(travelingIndonesia(['Andika-Denpasar-Surabaya-Bis', 'Katy-Surabaya-Denpasar-Pesawat'], 'Gopay'));

// [ { name: 'Katy',
//     departureCity: 'Surabaya',
//     destinationCity: 'Denpasar',
//     transport: 'Pesawat',
//     totalCost: 261250 },
//   { name: 'Andika',
//     departureCity: 'Denpasar',
//     destinationCity: 'Surabaya',
//     transport: 'Bis',
//     totalCost: 213750 } ]
// */
console.log("==================================================================================================");
console.log(travelingIndonesia(['Putra-Denpasar-Yogyakarta-Pesawat'], 'Cash'));

// [ { name: 'Putra',
//     departureCity: 'Denpasar',
//     destinationCity: 'Yogyakarta',
//     transport: 'Pesawat',
//     totalCost: 825000 } ]
// */
console.log(travelingIndonesia([], 'Cash')); // [];