const Part = (props) =>{
  return(
    <p>{props.name} {props.exercises}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
}
  
  return (
    <div>
      <Header course={course.name}/>
      <Content data={course.parts}/>
      <Total  data={course.parts}/>
    </div>
  )
}

const Header = (props) => {
  return(
  <h1>{props.course}</h1>
)}

const Content = (props) => {
  const data = props.data
  console.log(data[0].name)
  return(
    <div>
      <Part name={data[0].name} exercises = {data[0].exercises}/>
      <Part name={data[1].name} exercises = {data[1].exercises}/>
      <Part name={data[2].name} exercises = {data[2].exercises}/>
    </div>
  )
}

const Total = (props) => {
  let output = 0;
  props.data.forEach(element => {
    output += element.exercises
  });
  return(
  <p>{output}</p>
)}

export default App