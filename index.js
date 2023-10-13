// Customer inputs flavor selections

const userInputString = prompt(
    "Please enter the ingredients separated by commas.",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

const stringArray = userInputString.split(",");

// console.table(stringArray);

function amount(){
    const froyo = {};
    for (let ele of stringArray){
        if (froyo[ele]){
            froyo[ele] += 1;
        }else{
            froyo[ele] = 1;
        }
    }
    return froyo;
}

console.log(amount());

// const flavors = [];
//  for (let i = 0; i < stringArray.length; i++) {
//      const str = stringArray[i];
//      if(!flavors.includes(str)){
//          flavors.push(str);
//      }
//  }

//  console.table(flavors);
 
//  const froyo = {};
//  for (const element of flavors){
//     froyo[element] = '';
//  }

//  console.log(froyo);




// function amount(){
//     let count = 0;
//     let total = [];
//     for(let i = 0; i < flavors.length; i++) {
//         let flavor = flavors[i];
//         for(let j = 0; j < stringArray.length; j++) {
//             if ( flavor == stringArray[j]) {
//             count++;
//             }
//         }
//         total.push(flavor + " = " + count);
//         count = 0;
//     }
//     return total;
// }

// console.log(amount())



