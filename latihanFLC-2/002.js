/*
================
SENSOR SENTENCE
================
description: Sebuah fungsi yang akan mendeteksi apakah kalimat tersebut merupakan kalimat yang
tidak baik dan akan mengembalikan nilai kalimat yang telah di sensor

rules:
1. Wajib menggunakan Pseudocode/ Algoritma
2. tidak boleh menggunakan built in function .filter(), .map(), .split(), .findIndex(), indexOf(), .join()
3. tidak boleh menggunakan REGEX, seperti .match, .replace


examples:
JIKA INPUT KALIMAT = 'HAHAHA PAYAH LOOO' dan INPUT SENSOR = 'PAYAH'
MAKA OUTPUT = 'HAHAHA ***** LOOO'
                    
*/

/*
PSEUDOCOUDE
PROGRAM sensorSentence with 2 paramater, sentence and words to be sensored
    SET arr with empty array
    SET str with empty string
    LOOP with i equals 0 until less than the length of sentence
        IF index i of sentence is ' '
            STORE arr with str
            STORE arr with ' '
            SET str with empty string
        ELSE
            ADD str with index i of sentence
            IF i equals the length of sentence minus 1
                STORE arr with str
            END IF
        END IF
    END LOOP
    SET newStr with empty string
    LOOP with j equals 0 until the length of arr
        IF index j of arr === words
            SET ganti with empty string
            LOOP with k equals 0 until the length of index j of arr
                ADD ganti with '*'
            END LOOP
            ADD newStr with ganti
        ELSE
            ADD newStr with index j of arr
        END IF
    END LOOP
    PRINT newStr
END PROGRAM
*/
function sensorSentence(sentence, words) {
    var arr = [];
    var str = ''
    for(var i = 0; i < sentence.length; i ++) {
        if(sentence[i] === ' ') {
            arr.push(str)
            arr.push(' ')
            str = ''
        } else {
            str += sentence[i]
            if(i === sentence.length - 1) {
                arr.push(str)
            }
        }
    }
    var newStr = ''
    for(var j = 0; j < arr.length; j ++) {
        if(arr[j] === words) {
            var ganti = ''
            for(var k = 0; k < arr[j].length; k ++) {
                ganti += '*';
            }
            newStr += ganti;
        } else {
            newStr += arr[j];
        }
    }
    return newStr;
}


console.log(sensorSentence('Hey you are a murderer', 'murderer')) // Hey you are a ********

console.log(sensorSentence('I will kill you later, i swear', 'kill')) // I will **** you later, i swear

console.log(sensorSentence("Oh my god, holy cow! i can't believe it", "cow!")) // Oh my god, holy **** i can't believe it

console.log(sensorSentence("Aku ingin pindah ke meikartu", "meikartu")) // Aku ingin pindah ke ********

console.log(sensorSentence('HAHA HEHE HIHI HUHU HOHO', 'WEY')) // 'HAHA HEHE HIHI HUHU HOHO'

console.log(sensorSentence('', '')) // ''
