/*
	Dalam sebuah game, hero yang dapat dipilih memiliki jenis tertentu
	Dalam game ini satu tim harus memilih 5 heroes yang akan dimainkan
	Disini kamu diminta menampilkan apakah pick hero yang dilakukan tergolong good atau bad dengan kodisi sebagai berikut
  good pick : jika dari hero yang di pick tidak memiliki lebih dari 2 tipe hero yang sama
  bad pick : jika dari hero yang di pick ada 3 atau lebih tipe hero yang sama
    pick list : ranger, mage, tank, warrior, atau assassin (cuma ada 5 tipe ini)
    tampilkan apakah good pick atau bad pick dan jenis apa yang lebih dari 2, pesan seperti pada test case
    
    [RULES]
    1. Wajib menggunakan Algoritma/Pseudocode
    2. Hanya boleh menggunakan built in function .split(), .unshift(), dan .push()
    */
/**PSEUDOCODE
 * STORE newArr with composition split by (',')
 * wHILE i less than length of newArr
 * IF length of newArr less than 5
 * DISPLAY "not sufficient players"
 *
 *
 */
function heroPick(composition) {
  // code here
  var newArr = composition.split(",");
  // sort dulu
  for (var i = 0; i < newArr.length; i++) {
    // console.log(newArr)
    if (newArr.length < 5) {
      return "not sufficient players";
    } 
    for (var j = 0; j < newArr.length; j++) {
      if (newArr[i] < newArr[j]) {
        var tempArr;
        tempArr = newArr[i];
        newArr[i] = newArr[j];
        newArr[j] = tempArr;
      }
    }
  }
  // console.log(newArr)
  var tempArr = [[]];
  var indeks = 0;
  tempArr[0].push(newArr[0]);
  for (var k = 1; k < newArr.length; k++) {
    if (newArr[k][0] === tempArr[indeks][0][0]) {
      tempArr[indeks].unshift(newArr[k]);
    } else {
      indeks++;
      tempArr[indeks] = [newArr[k]];
    }
  }
  var arrbaru = tempArr
  for (let l = 0; l < arrbaru.length; l++) {
    for (let m = 0; m < arrbaru[l].length; m++) {
      // console.log(arrbaru[l])
      if (arrbaru[l].length > 2) {
        return "bad pick too many " + arrbaru[l][0];
      } else if (arrbaru[l][m] === 'god') {
        return arrbaru[l][m] + ' is not on the pick list'
      } else if (arrbaru[l].length < 2) {
        return "good pick";
      }
    }
  }
}

// Test case
console.log(heroPick("ranger,ranger,mage,tank,warrior")); // good pick
console.log(heroPick("mage,mage,tank,mage,warrior")); // bad pick too many mage
console.log(heroPick("mage,mage,tank,mage")); // not sufficient players
console.log(heroPick("mage,mage,god,mage,mage")); // god is not on the pick list
