import React from "react";

const Header = ({ course }) => {
  return <h1>{course}</h1>;
};

const Part = ({ part, exercise }) => {
  return (
    <p>
      {part}: {exercise}
    </p>
  );
};

const Content = ({
  part1,
  part2,
  part3,
  exercises1,
  exercises2,
  exercises3,
}) => {
  return (
    <div>
      <Part name={parts[0].name} exercises={parts[0].exercises} />
      <Part name={parts[1].name} exercises={parts[1].exercises} />
      <Part name={parts[2].name} exercises={parts[2].exercises} />
    </div>
  );
};

const Total = ({ parts }) => {
  return (
    <p>
      Number of exercises:
      {parts[0].exercises + parts[1].exercises + parts[2].exercises}
    </p>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };

  const total = part1.exercises + part2.exercises + part3.exercises;

  return (
    <div>
      <Header title={course} />
      <Content
        part1={part1.name}
        part2={part2.name}
        part3={part3.name}
        exercises1={part1.exercises}
        exercises2={part2.exercises}
        exercises3={part3.exercises}
      />
      <Total total={total} />
    </div>
  );
};

export default App;
