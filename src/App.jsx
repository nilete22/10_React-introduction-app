import { Header} from "./Header.jsx";
import { Total } from "./Total.jsx";
import { Content } from "./Content.jsx";

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={ course }/>
      <Content section1={part1} ex1={exercises1} section2={part2} ex2={exercises2} section3={part3} ex3={exercises3} />
      <Total ex1={exercises1} ex2={exercises2} ex3={exercises3} />
    </div>
  )
}

export default App
