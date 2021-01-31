import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const course = 'Half Stack Application Development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using Props to Pass Data'
    const exercises2 = 7
    const part3 = 'State of a Component'
    const exercises3 = 14

    return (
        <div>
            <Header course={course} />

            <Part part={part1} />
            <Part part={part2} />
            <Part part={part3} /> 
            <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
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
        <p>Section {props.part}</p>
    )
}


const Total = (props) => {
    console.log(props)
    return (
        <div>
            <p>Total exercises: {props.exercises1 + props.exercises2 + props.exercises3} </p>
        </div>
    )
}




ReactDOM.render(<App />, document.getElementById('root'))
