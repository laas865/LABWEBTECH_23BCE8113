import React from "react";
import StudentProfile from "./StudentProfile";
import StudentCard from "./StudentCard";
import Counter from "./Counter";
function App() {
  return (
    <div>
      <h1>React Lab Exercises</h1>

      {/* ================= LAB 9 ================= */}
      <h2>Lab Sheet 9</h2>

      <h3>Exercise 1: Student Profile</h3>
      <StudentProfile />

      <h3>Exercise 2: Student Cards</h3>
      <StudentCard name="Rahul" department="CSE" marks="85" />
      <StudentCard name="Anjali" department="ECE" marks="90" />
      <StudentCard name="Kiran" department="IT" marks="88" />

      <h3>Exercise 3: Counter Application</h3>
      <Counter />

      <hr />
    </div>
  );
}

export default App;
