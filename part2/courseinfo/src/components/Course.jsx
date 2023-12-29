const Course = ({ course }) => (
    <div>
        <Header text={course.name} />
        <Content parts={course.parts} />
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

export default Course