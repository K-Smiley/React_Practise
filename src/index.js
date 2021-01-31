import React from 'react'
import ReactDOM from 'react-dom'

// index.js file, has App comonent to send to index.html
const App = () => {
    const course = 'Half Stack Application Development'
    const parts = [
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
 
    
   
      // these are the components to return in <App />
      return (
          <div>
                <Header course={course} />
                <Part parts={parts[0]} />
                <Part parts={parts[1]} />
                <Part parts={parts[2]} />
         </div>
      )
}

// component for Header
const Header = (props) => {
    // console.log(props)
    return (
        <div>
            <h1>'{props.course}'</h1>
        </div>
    )
}
// component for Part
const Part = (props) => {
    console.log(props)
    return (
        <div>
           <p>Section: {props.parts.name} | No. of exercises: {props.parts.exercises}</p>
        </div>
     )
 }


ReactDOM.render(<App />, document.getElementById('root'))
