

const Attribute = (props) => {
  const text = "We are true seeker of knowledge "
  return text
}

const Multi = (a, b) => {
  return a + b
  
}

const Add = Multi(7, 9)
console.log(Add)
const App = () => {
  return (
    <div>
      <h1>hello world</h1>
      <Attribute />
      <div>The result of Multi(7, 9) is {Add}</div>
      

        
    </div>
  )
}

export default App