// const arr = ['Abdussattor', 'Abdullox', 'Sirojiddin', 'Sobir', 'Azimjon', 'Akba']

// const name5 = []
// const name4 = []
// let savol = prompt('Soz kiriting')

// arr.push(savol)
// arr.forEach(e => {

//     if (e.length >= 5) {
//         name5.push(e)
        
//     } else {
//         name4.push(e)
        
//     }

// });


// console.log(name4, ' 5 tadan uzun emas');

// console.log(name5, ' 5 tadan uzun');


const arr = ['non', 'asal', 'banan', 'aziza', 'gul', 'mashina']

const withN = []
const notN = []
let savol = prompt('Soz kiriting')

arr.push(savol)
arr.forEach(e => {

    if ( e.includes('n')) {
        withN.push(e)
        
    } else {
        notN.push(e)
        
    }

});


console.log(withN, ' n harfi bor');

console.log(notN, ' n harfi yoq');
