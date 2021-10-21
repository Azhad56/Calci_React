import "./App.css";
import {useState} from "react";

function App() {
  const [screen,setScreen] = useState("");
  function process(event){
    if (event.target.value==="=")
    {
      let result = eval(screen);
      setScreen(result);
    }
    else if (event.target.value==="C")
    {
      setScreen("");
    }
    else {
      setScreen((prevState) => {
        return prevState + event.target.value;
      })
    }
    
  }
  return (
    <>
      <input type="text" value={screen}/>
      <table>
        <tr>
          <td>
            <button value={"1"} onClick = { (event) => { process(event) } }> 1 </button>
          </td>
          <td>
            <button value={"2"} onClick = { (event) => { process(event) } }> 2 </button>
          </td>
          <td>
            <button value={"3"} onClick = { (event) => { process(event) } }> 3 </button>
          </td>
          <td>
            <button value={"4"} onClick = { (event) => { process(event) } }> 4 </button>
          </td>
          <td>
            <button value={"5"} onClick = { (event) => { process(event) } }> 5 </button>
          </td>
        </tr>
        <tr>
          <td>
            <button value={"6"} onClick = { (event) => { process(event) } }> 6 </button>
          </td>
          <td>
            <button value={"7"} onClick = { (event) => { process(event) } }> 7 </button>
          </td>
          <td>
            <button value={"8"} onClick = { (event) => { process(event) } }> 8 </button>
          </td>
          <td>
            <button value={"9"} onClick = { (event) => { process(event) } }> 9 </button>
          </td>
          <td>
            <button value={"C"} onClick = { (event) => { process(event) } }> C </button>
          </td>
        </tr>
        <tr>
          <td>
            <button value={"+"} onClick = { (event) => { process(event) } }> + </button>
          </td>
          <td>
            <button value={"-"} onClick = { (event) => { process(event) } }> - </button>
          </td>
          <td>
            <button value={"*"} onClick = { (event) => { process(event) } }> X </button>
          </td>
          <td>
            <button value={"/"} onClick = { (event) => { process(event) } }> / </button>
          </td>
          <td>
            <button value={"="} onClick = { (event) => { process(event) } }> = </button>
          </td>
        </tr>
      </table>
    </>
  );
}

export default App;
