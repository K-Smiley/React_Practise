import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const course = 'Half Stack Application Development'



    const part1 = {
      name: 'Fundamentals of React',
        exercises: 10
      }
      const part2 = {
        name: 'Using props to pass data',
        exercises: 7
 }
    const part3 = {
       name: 'State of a component',
     exercises: 14
      }
    
      return (
     
        <div>
            <Header course={course} />
            <Part name={part1.name}  exercises={part1.exercises}/>
            <Part name={part2.name}  exercises={part2.exercises}/>
            <Part name={part3.name}  exercises={part3.exercises}/>
       
         
        </div>
      )

}

const Header = (props) => {
    console.log(props)
    return (
         <div>
            <h1>'{props.course}'</h1>
        </div>
    )
}



const Part = (props) => {
  console.log(props)
        return (
            <div>
        <p>Section:  {props.name} Exercises:  {props.exercises}</p>
        </div>
     )
 }






ReactDOM.render(<App />, document.getElementById('root'))
