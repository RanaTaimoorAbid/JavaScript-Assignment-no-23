
// // 1. Display current date and time in browser
// document.write(new Date() + "<br>");

// // 2. Alert current month in words
// var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var currentMonth = new Date().getMonth();
// alert(months[currentMonth]);

// // 3. Alert the first 3 letters of the current day
// var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var currentDay = new Date().getDay();
// alert(days[currentDay]);

// // 4. Display "It’s Fun day" if it's Saturday or Sunday
// var currentDay = new Date().getDay();
// if (currentDay === 0 || currentDay === 6) {
//     alert("It’s Fun day");
// }

// // 5. Display message based on date
// var currentDate = new Date().getDate();
// if (currentDate < 16) {
//     alert("First fifteen days of the month");
// } else {
//     alert("Last days of the month");
// }

// // 6. Determine minutes since Jan. 1, 1970
// var minutesSinceEpoch = Date.now() / (1000 * 60);
// console.log("Minutes since Jan. 1, 1970: " + minutesSinceEpoch);

// // 7. Test whether it's before noon or after
// var currentHour = new Date().getHours();
// if (currentHour < 12) {
//     alert("It's AM");
// } else {
//     alert("It's PM");
// }

// // 8. Create Date object for last day of last month of 2020
// var laterDate = new Date(2020, 11, 31);

// // 9. Calculate days past since 1st Ramadan
// var ramadanStartDate = new Date(2015, 5, 18); // June is 5 as months are zero-based
// var currentDate = new Date();
// var daysPassed = Math.floor((currentDate - ramadanStartDate) / (1000 * 60 * 60 * 24));
// alert("Days passed since 1st Ramadan: " + daysPassed);

// // 10. Display seconds elapsed between reference date and beginning of 2015
// var referenceDate = new Date("January 1, 1970");
// var beginningOf2015 = new Date("January 1, 2015");
// var secondsElapsed = (beginningOf2015 - referenceDate) / 1000;
// document.write("Seconds elapsed between reference date and beginning of 2015: " + secondsElapsed + "<br>");

// // 11. Extract hours, reset date object an hour ahead, and display
// var currentDate = new Date();
// var currentHour = currentDate.getHours();
// currentDate.setHours(currentHour + 1);
// document.write("Date object an hour ahead: " + currentDate + "<br>");

// // 12. Create date object reset to 100 years back
// var currentDate = new Date();
// currentDate.setFullYear(currentDate.getFullYear() - 100);
// alert("Date 100 years back: " + currentDate);

// // 13. Calculate and show birth year based on age
// var age = prompt("Enter your age:");
// var currentYear = new Date().getFullYear();
// var birthYear = currentYear - age;
// alert("Your birth year is: " + birthYear);


// //ch 35-38
// // 1. Display current date & time in browser
// function displayCurrentDateTime() {
//     document.write(new Date() + "<br>");
// }

// // 2. Greet user using full name
// function greetUser(firstName, lastName) {
//     alert("Hello, " + firstName + " " + lastName);
// }

// // 3. Add two numbers and return the sum
// function addNumbers(num1, num2) {
//     return num1 + num2;
// }

// // 4. Calculator function
// function calculator(num1, num2, operator) {
//     switch (operator) {
//         case '+':
//             return num1 + num2;
//         case '-':
//             return num1 - num2;
//         case '*':
//             return num1 * num2;
//         case '/':
//             if (num2 !== 0) {
//                 return num1 / num2;
//             } else {
//                 return "Error: Division by zero";
//             }
//         default:
//             return "Invalid operator";
//     }
// }

// // 5. Square function
// function square(number) {
//     return number * number;
// }

// // 6. Factorial function
// function factorial(number) {
//     if (number === 0 || number === 1) {
//         return 1;
//     } else {
//         return number * factorial(number - 1);
//     }
// }

// // 7. Counting function
// function countNumbers(start, end) {
//     for (var i = start; i <= end; i++) {
//         document.write(i + "<br>");
//     }
// }

// // 8. Hypotenuse calculation
// function calculateHypotenuse(base, perpendicular) {
//     function calculateSquare(side) {
//         return side * side;
//     }
//     return Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular));
// }

// // 9. Area of a rectangle function
// function calculateRectangleArea(width, height) {
//     // Arguments as value
//     var area1 = width * height;
//     document.write("Area with arguments as value: " + area1 + "<br>");

//     // Arguments as variables
//     var area2 = width * height;
//     document.write("Area with arguments as variables: " + area2 + "<br>");
// }

// // 10. Palindrome check function
// function isPalindrome(str) {
//     var reversedStr = str.split('').reverse().join('');
//     return str === reversedStr;
// }

// // 11. Convert first letter of each word to uppercase
// function capitalizeFirstLetter(str) {
//     var words = str.split(' ');
//     for (var i = 0; i < words.length; i++) {
//         words[i] = words[i][0].toUpperCase() + words[i].slice(1);
//     }
//     return words.join(' ');
// }

// // 12. Find the longest word in a string
// function longestWord(str) {
//     var words = str.split(' ');
//     var longest = "";
//     for (var i = 0; i < words.length; i++) {
//         if (words[i].length > longest.length) {
//             longest = words[i];
//         }
//     }
//     return longest;
// }

// // 13. Count occurrences of a letter in a string
// function countOccurrences(str, letter) {
//     var count = 0;
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === letter) {
//             count++;
//         }
//     }
//     return count;
// }

// // 14. Functions to calculate properties of a circle
// function calcCircumference(radius) {
//     var circumference = 2 * Math.PI * radius;
//     document.write("The circumference is " + circumference.toFixed(2) + "<br>");
// }

// function calcArea(radius) {
//     var area = Math.PI * radius * radius;
//     document.write("The area is " + area.toFixed(2) + "<br>");
// }

//// ch 38-42

// // 1. Calculate power of a raised to b
// function power(a, b) {
//     return Math.pow(a, b);
// }

// // 2. Determine if a year is a leap year
// function isLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// // 3. Calculate area of triangle
// function calculateTriangleArea(a, b, c) {
//     function calculateSemiPerimeter(a, b, c) {
//         return (a + b + c) / 2;
//     }
//     var s = calculateSemiPerimeter(a, b, c);
//     return Math.sqrt(s * (s - a) * (s - b) * (s - c));
// }

// // 4. Calculate average and percentage of marks
// function mainFunction(mark1, mark2, mark3) {
//     function calculateAverage(mark1, mark2, mark3) {
//         return (mark1 + mark2 + mark3) / 3;
//     }
//     function calculatePercentage(mark1, mark2, mark3) {
//         return ((mark1 + mark2 + mark3) / 300) * 100;
//     }
//     var average = calculateAverage(mark1, mark2, mark3);
//     var percentage = calculatePercentage(mark1, mark2, mark3);
//     console.log("Average: " + average);
//     console.log("Percentage: " + percentage + "%");
// }

// // 5. Custom indexOf function
// function customIndexOf(str, char) {
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//             return i;
//         }
//     }
//     return -1;
// }

// // 6. Delete all vowels from a sentence
// function deleteVowels(sentence) {
//     return sentence.replace(/[aeiou]/gi, '');
// }

// // 7. Count occurrences of any two vowels in succession
// function countSuccessiveVowels(text) {
//     var count = 0;
//     for (var i = 0; i < text.length - 1; i++) {
//         var char1 = text[i].toLowerCase();
//         var char2 = text[i + 1].toLowerCase();
//         if ("aeiou".includes(char1) && "aeiou".includes(char2)) {
//             count++;
//         }
//     }
//     return count;
// }

// // 8. Convert distance between cities
// function convertDistance(distance, unit) {
//     switch (unit) {
//         case "meters":
//             return distance * 1000;
//         case "feet":
//             return distance * 3280.84;
//         case "inches":
//             return distance * 39370.1;
//         case "centimeters":
//             return distance * 100000;
//         default:
//             return "Invalid unit";
//     }
// }

// // 9. Calculate overtime pay of employees
// function calculateOvertimePay(hoursWorked) {
//     if (hoursWorked > 40) {
//         var overtimeHours = hoursWorked - 40;
//         return overtimeHours * 12.00;
//     } else {
//         return 0;
//     }
// }

// // 10. Calculate number of currency notes to be given by cashier
// function calculateCurrencyNotes(amount) {
//     var notes100 = Math.floor(amount / 100);
//     var remainder = amount % 100;
//     var notes50 = Math.floor(remainder / 50);
//     remainder %= 50;
//     var notes10 = Math.floor(remainder / 10);
//     console.log("100 Rupee notes: " + notes100);
//     console.log("50 Rupee notes: " + notes50);
//     console.log("10 Rupee notes: " + notes10);
// }
