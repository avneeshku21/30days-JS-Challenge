// program to generate a multiplication table

const number = parseInt(prompt('Enter an integer: '));

//creating a multiplication table
for(let i = 1; i <= 10; i++) {

    const result = i * number;

    // display the result
    console.log(`${number} * ${i} = ${result}`);
    
}

// let i = 1;
// while (i < 10) {
//   if(i < 5) {
// console.log('The Number is ' + i );
//   }
//   i++;
// }
