import { useState } from 'react'
import Button from './components/button'
import './App.css'
import Operation from './components/Operation'
function App() {

  const [num1, setNum1] =useState(null)
  const [num2, setNum2] =useState(null)
  const [operator, setoperator] =useState(null)



  const manageNumbers = (num) => {

    if(operator!=null){
      setNum2((pre) => pre==null ? num : pre+num )
    }else{

      setNum1((pre) => pre ==null ?num :pre+num)
    }


  }

  const handleOutput = () => {
    

      switch(operator){
        case "+":
          
          return setNum1(String((+num1)+(+num2))), setNum2(null), setoperator(null);
        case "-":
          return setNum1(String(+num1-(+num2)) , setNum2(null), setoperator(null));
        case "*":
          return setNum1(String(+num1*(+num2)) , setNum2(null), setoperator(null));
        case "/":
          return setNum1(String(+num1/(+num2)) , setNum2(null), setoperator(null));
      }
    

  }
  const handleDelete = () => {
    num2
      ? setNum2((pre) => pre.slice(0, -1)) && (num2.length === 0 ? setNum2(null) : null)
      : operator
      ? setoperator(null)
      : num1.length > 0
      ? setNum1((pre) => pre.slice(0, -1)) && (num1.length === 0 ? setNum1(null) : null)
      : (console.log("else"), console.log(typeof num1));
  };
  

  const manageOperation = (str) => {
    if(num1!=null){

      setoperator(str)
    }
  }
  const handleClear = () => {
    setNum1(null)
    setoperator(null)
    setNum2(null)
  }

  return (
    <div className='App'>
      <div className='main'>
        <div id='input'>
          {num1}
          {operator}
          {num2}

        </div>
        <div id='button'>
          < Button text={"1"} manageNumber={manageNumbers}/>
          < Button text={"2"} manageNumber={manageNumbers} />
          < Button text={"3"} manageNumber={manageNumbers}/>
          < Button text={"4"} manageNumber={manageNumbers}/>
          < Button text={"5"} manageNumber={manageNumbers}/>
          < Button text={"6"} manageNumber={manageNumbers}/>
          < Button text={"7"} manageNumber={manageNumbers}/>
          < Button text={"8"} manageNumber={manageNumbers}/>
          < Button text={"9"} manageNumber={manageNumbers}/>
          < Button text={"0"} manageNumber={manageNumbers}/>
          < Operation text={"+"} manageOperation={manageOperation}/>
          < Operation text={"-"} manageOperation={manageOperation}/>
          < Operation text={"*"} manageOperation={manageOperation}/>
          < Operation text={"/"} manageOperation={manageOperation}/>
          <button onClick={()=> handleOutput(operator)}>=</button>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={handleClear}>Clear</button>
        </div>

      </div>

    </div>
  )
}

export default App
