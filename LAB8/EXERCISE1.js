const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter student name: ", function(studentName) {
  rl.question("Enter mark1: ", function(mark1) {
    rl.question("Enter mark2: ", function(mark2) {
      rl.question("Enter mark3: ", function(mark3) {

        mark1 = Number(mark1);
        mark2 = Number(mark2);
        mark3 = Number(mark3);

        const calculateTotal = (m1, m2, m3) => m1 + m2 + m3;
        const calculateAverage = (m1, m2, m3) => (m1 + m2 + m3) / 3;

        let total = calculateTotal(mark1, mark2, mark3);
        let average = calculateAverage(mark1, mark2, mark3);

        console.log("Student Name:", studentName);
        console.log("Total Marks:", total);
        console.log("Average Marks:", average.toFixed(2));

        rl.close();
      });
    });
  });
});
