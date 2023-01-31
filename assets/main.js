// 1. Ekrana 5 defe adini yazdir
// for(let i=0; i<5; i++){
//     console.log('Seyfi')
// }




// 2. Input ile daxil edilen adi 5 defe ekrana yazdir
// let currentName = prompt("Enter your name:")
// for(let i=0; i<5; i++){
//     console.log(currentName)
// }




// 3. Input ile daxil olunan adi input ile daxil edilen eded defe ekrana yazdir
//  let sName = prompt("Enter your name:")
//  let num = +prompt("Enter your age:")
//  for(let i=0; i<num; i++){
//     console.log(sName);
//  }

// 4. 1 den input ile daxil olunan edede qeder cut ededleri tap
// let entryNum = +prompt("Enter your number:")
// for(let i = 1; i <= entryNum; i++){
//     if (i % 2 == 0) {
//         console.log(i)
//     }
// }




// 5. Input ile daxil edilen 5 ededden menfi olanlarin cemi, cut olanlarin vurgunu tap
// let minusSum = 0;
// let evenMultiple = 1;

// for(let i = 0; i < 5; i++){
//     let inpNum = +prompt(`${i+1} ci ededi daxil et`)
//     if (inpNum < 0) {
//         minusSum = minusSum + inpNum;
//     }
//     if (inpNum % 2 == 0 && inpNum > 0) {
//         evenMultiple = evenMultiple * inpNum;
//     }
// }
// console.log(`menfi olanlarin toplami ${minusSum}`)
// console.log(`musbet olanlarin vurugu ${evenMultiple}`)




// 6. UMG umumi ortalama hesblanmasi
// let subject = 5;
// let totalPoint = 0;
// for(let i = 0; i <subject ; i++){
//     let entryPoint = +prompt(`${i+1} ci exam pointi daxil et`);
//     if (0 <= entryPoint && entryPoint <= 100) {
//         totalPoint = totalPoint + entryPoint;
//     }
//     else{
//         console.log('bele giris bali daxil edile bilmez');
//     }
// }
// let middlePoint=0;
// middlePoint = (middlePoint + totalPoint)/subject;
// console.log(`ortalama baliniz ${middlePoint}`);
// if (50 <= middlePoint && middlePoint <=60) {
//     console.log("siz E almisiniz");
// }
// else if (60 <= middlePoint && middlePoint <= 70){
//     console.log("siz D almisiniz");
// }
// else if (70 <= middlePoint && middlePoint <= 80){
//     console.log("siz C almisiniz");
// }
// else if (80 <= middlePoint && middlePoint <= 90){
//     console.log("siz B almisiniz");
// }
// else if (90 <= middlePoint && middlePoint <= 100){
//     console.log("siz A almisiniz");
// }
// else{
//     console.log('siz kesilmisiniz')
// }



// 7. n=7 
// let n = 7;
// let num = '';
// for (let i = 1; i <= n; i++) {
//  num = num + ' ' + i;
//  console.log(num)
// }

// 8. a=4 column ; b = 5 row;
let a = 4;
let b = 5;
let row = '';
for(let i = 1; i <= b; i++){
   for(let j = 1; j <= a; j++){
    row = row + ' ' + '*'
   }
   row = row + "\n";
}
console.log(row);



