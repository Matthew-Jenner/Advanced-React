import {useState} from "react"


const UseStateBasics = () => {
  // const value = (useState('hello')[0]);
  // console.log(value);

  const [count, setCount] = useState(0)
  const handleClick = () => {
    setCount(count + 1)
  }
  return <div>
    <h4> You Clicked {count} times</h4>
    <button type="vutton" className="btn" onClick={handleClick}> Click Me</button>
  </div>
};

export default UseStateBasics;
