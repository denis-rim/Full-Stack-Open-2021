const Header = ({ name }) => {
  return <h2>{name}</h2>;
};

const Part = ({ name, exercises }) => {
  return (
    <div className="course-content">
      {name}: {exercises}
    </div>
  );
};

const Content = ({ parts }) => {
  console.log(parts);
  return (
    <div>
      {parts.map((part) => {
        return (
          <Part key={part.id} name={part.name} exercises={part.exercises} />
        );
      })}
    </div>
  );
};

const Total = ({ parts }) => {
  const sum = parts.reduce((acc, item) => {
    return acc + item.exercises;
  }, 0);

  return <p>Total of {sum} exercises</p>;
};

const Course = ({ course }) => {
  return (
    <div className="course">
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default Course;
