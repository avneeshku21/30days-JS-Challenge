var yr=2004;
if((yr%4==0) && (yr%100!=0))
console.log(yr + " is a Leap Year");
else if(yr%400==0)
  console.log(yr + " is a Leap Year");
else
  console.log(yr + " is not a Leap Year");


  // program to check leap year
// function checkLeapYear(year) {

//     const leap = new Date(year, 1, 29).getDate() === 29;
//     if (leap) {
//         console.log(year + ' is a leap year');
//     } else {
//         console.log(year + ' is not a leap year');
//     }
// }

// // take input
// const year = prompt('Enter a year:');

// checkLeapYear(year);