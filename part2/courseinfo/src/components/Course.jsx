const Course = ({ course }) => (
    <div>
        <Header text={course.name} />
        <Content parts={course.parts} />
        <Statistics parts={course.parts} />
    </div>
)

const Header = ({ text }) => <h1>{text}</h1>

const Content = ({ parts }) => (
    <div>
        {parts.map(part => <Part key={part.id} part={part} />)}
    </div>
)

const Part = ({ part }) => (
    <p>{part.name} {part.exercises}</p>
)

const Statistics = ({ parts }) => {
    let totalExercises = parts.reduce((previousValue, currentValue) => previousValue + currentValue.exercises, 0)

    return (
        <TotalExercises total={totalExercises} />
    )
}

const TotalExercises = ({ total }) => (
    <p><strong>total of {total} exercises</strong></p>
)

export default Course