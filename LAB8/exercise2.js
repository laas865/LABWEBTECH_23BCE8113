const readline = require("readline");

class Student {
  constructor(id, name, department, marks) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.marks = marks;
  }

  getGrade() {
    if (this.marks >= 90) return "A";
    else if (this.marks >= 75) return "B";
    else if (this.marks >= 60) return "C";
    else return "D";
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter ID: ", (id) => {
  rl.question("Enter Name: ", (name) => {
    rl.question("Enter Department: ", (department) => {
      rl.question("Enter Marks: ", (marks) => {

        const student = new Student(Number(id), name, department, Number(marks));

        const { id: sid, name: sname, department: sdept, marks: smarks } = student;
        console.log(sid, sname, sdept, smarks);

        const updatedStudent = {
          ...student,
          grade: student.getGrade()
        };

        console.log(updatedStudent);

        rl.close();
      });
    });
  });
});