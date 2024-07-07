import { useState } from 'react';
import './App.css';
function App() {
  const [number, changeNum]= useState("0");
  const [number2, changeNum2]= useState("0");
  const [operator, changeOperator]= useState("");
  const addNumber = (value)=>{
   if(value==="AC"){
    changeNum("0");
    changeNum2("0");
    changeOperator("");
   }
   else{
    if(operator===""){
      if(number==="0"){
        changeNum(value)
      }
      else{
        changeNum(number+value)
      }
    }
    else{
      if(number2==="0"){
        changeNum2(value)
      }
      else{
        changeNum2(number2+value)
      }
    }
   }
  }
  const percent = ()=>{
    changeNum(number/100)
  }
  const sign = ()=>{
    changeNum(number*-1)
  }
  const equal = ()=>{
    switch(operator){
      case "+":
        changeNum(parseFloat(number)+parseFloat(number2));
        break;
      case "-":
        changeNum(number-number2);
        break;
      case "x":
        changeNum(number*number2);
        break;
      case "/":
        changeNum(number/number2);
        break;
      
    }
    changeNum2("0")
    changeOperator("")
  }
  return (
    <div className="App">
      <div className='calculator'>
        <div className='container'>{number2!=="0"? number2:number}</div>
        <div className="row">
          <button onClick={(e)=>{addNumber(e.target.value)}} value="AC">AC</button>
          <button onClick={sign} value="+/-">+/-</button>
          <button onClick={percent} value="%">%</button>
          <button onClick={(e)=>{changeOperator(e.target.value)}} value="/">/</button>
          <button onClick={(e)=>{addNumber(e.target.value)}} value="7">7</button>
          <button onClick={(e)=>{addNumber(e.target.value)}} value="8">8</button>
          <button  onClick={(e)=>{addNumber(e.target.value)}} value="9">9</button>
          <button onClick={(e)=>{changeOperator(e.target.value)}} value="x">x</button>
          <button onClick={(e)=>{addNumber(e.target.value)}} value="4">4</button>
          <button onClick={(e)=>{addNumber(e.target.value)}} value="5">5</button>
          <button onClick={(e)=>{addNumber(e.target.value)}} value="6">6</button>
          <button onClick={(e)=>{changeOperator(e.target.value)}} value="-">-</button>
          <button onClick={(e)=>{addNumber(e.target.value)}} value="1">1</button>
          <button onClick={(e)=>{addNumber(e.target.value)}} value="2">2</button>
          <button onClick={(e)=>{addNumber(e.target.value)}} value="3">3</button>
          <button onClick={(e)=>{changeOperator(e.target.value)}} value="+">+</button>
          <button onClick={(e)=>{addNumber(e.target.value)}} value="0">0</button>
          <div></div>
          <button>.</button>
          <button onClick={equal}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
