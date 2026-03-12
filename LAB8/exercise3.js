const readline = require("readline");

class Course {
  constructor(courseName, instructor) {
    this.courseName = courseName;
    this.instructor = instructor;
  }

  displayCourse() {
    console.log(`Course: ${this.courseName}, Instructor: ${this.instructor}`);
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter Course Name: ", (courseName) => {
  rl.question("Enter Instructor Name: ", (instructor) => {
    rl.question("Are seats available? (yes/no): ", (seatInput) => {

      let course1 = new Course(courseName, instructor);
      course1.displayCourse();

      let seatsAvailable = seatInput.toLowerCase() === "yes";

      let enrollCourse = new Promise((resolve, reject) => {
        if (seatsAvailable)
          resolve("Enrollment Successful");
        else
          reject("Course Full");
      });

      enrollCourse
        .then(msg => console.log(msg))
        .catch(err => console.log(err));

      rl.close();
    });
  });
});