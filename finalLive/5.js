/**
 * ///////////
 * User Weapon
 * ///////////
 * Function userWeapon adalah sebuah function yang berfungsi merubah senjata dari setiap karakter.
 * Function ini menerima parameter yaitu:
 *  - user = tipe data object, merupakan informasi dari user
 *  - weapon = tipe data string, merupakan senjata yang akan dipakai user
 * Function ini akan mengembalikan tipe data string yang berisi informasi perubahan senjata
 * 
 * [EXAMPLE]
 * Input:
 * - User: {
 *    name: 'yogs',
 *    weapon: 'redKnife',
 *    job: 'swordman',
 *    attack: 700
 *  }
 * - newWeapon: blackKnife
 * Proses:
 * - Apabila heroes tersebut dapat menggunakan weapon yang diminta maka akan diubah senjata
 *   dan menyesuaikan dengan output nilai yang baru. (700 - weaponLama(100) + weapon baru (300)) = 900
 * Output:
 * yogs menggunakan senjata blackKnife attack menjadi 900
 * 
 * [RULES]
 * 1. Dilarang menggunakan built in function kecuali .push() dan .unshift()
 * 2. Asumsi senjata awal pemain selalu ada dan sesuai
 * 3. Apabila ada karakter yang berusaha memakai senjata yang tidak bisa dipakai job tersebut
 *    maka kembalikan Invalid Weapon
 */

 function cekSenjata(namaSenjata, weapons) {
  //  console.log(weapons, nama)
   for (let i = 0; i < weapons.length; i++) {
     if (namaSenjata === weapons[i]) {
       return true
     }
    }
    return false
 }

function cariIndex(nameJob, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].job === nameJob) {
      // console.log(arr[i].job)
      return i
    }
  } return -1
}

function userWeapon(user, weapon) {
  var heroes = [
    { job: 'swordman', weaponTypes: ['knife', 'katana'] },
    { job: 'ninja', weaponTypes: ['knife', 'kunai', 'katana'] },
    { job: 'samurai', weaponTypes: ['knife', 'katana'] },
    { job: 'monk', weaponTypes: ['knuckle'] }
  ]
  var weapons = {
    'redKnife': { type: 'knife', attack: 100 },
    'blackKnife': { type: 'knife', attack: 300 },
    'crimsonSword': { type: 'katana', attack: 800 },
    'moonlightSword': { type: 'katana', attack: 400 },
    'starKunai': { type: 'kunai', attack: 80 },
    'huumaShuriken': { type: 'kunai', attack: 340 },
    'emptyBracer': { type: 'knuckle', attack: 20 },
    'brokenArms': { type: 'knuckle', attack: 40 }
  }
  // code here
  var posisiHero = cariIndex(user['job'], heroes)
  var izinSenjata = cekSenjata(weapons[weapon]['type'], heroes[posisiHero]['weaponTypes'])
  if (izinSenjata === false) {
    return 'Invalid weapon'
  } else {
    var userAtk  = user['attack']
    var weaponAtk = weapons[user['weapon']]['attack']
    var weaponsAtk = weapons[weapon]['attack']
    return  userAtk - weaponAtk + weaponsAtk 
  }
}

console.log(userWeapon({
  name: 'yogs',
  job: 'swordman',
  weapon: 'redKnife',
  attack: 700
}, 'blackKnife'))
// yogs menggunakan senjata blackKnife attack menjadi 900

console.log(userWeapon({
  name: 'arms',
  job: 'monk',
  weapon: 'emptyBracer',
  attack: 3000
}, 'crimsonSword'))
// Invalid weapon

console.log(userWeapon({
  name: 'yuss',
  job: 'ninja',
  weapon: 'huumaShuriken',
  attack: 900
}, 'starKunai'))
// yuss menggunakan senjata starKunai attack menjadi 640