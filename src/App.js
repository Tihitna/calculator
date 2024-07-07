import { useState } from 'react';
import './App.css';
function App() {
  const [number, changeNum]= useState("0");
  const [number2, changeNum2]= useState("");
  const [operator, changeOperator]= useState("");
  const addNumber = (value)=>{
   if(value==="AC"){
    changeNum("0");
    changeNum2("");
    changeOperator("");
   }
   else{
    if(operator===""){
      if(number==="0"){
        if(value==="."){
          changeNum(number+value)
        }else{
          changeNum(value)
        }
      }
      else{
        changeNum(number+value)
      }
    }
    else{
      if(number2==="0"){
        if(value==="."){
          changeNum2("0"+value)
        }else{
          changeNum2(value)
        }
      }
      else{
        changeNum2(number2+value)
      }
    }
   }
  }
  
  const sign = ()=>{
    changeNum(number*-1)
  }
  const toFixedNumber = (number, digits, base) => {
    var pow = Math.pow(base || 10, digits);
    return Math.round(number * pow) / pow;
  };
  const limitDecimal = (result) => {
    const [integer, decimal]=result.toString().split(".");
    if(!decimal || decimal.length <= 5){
      return result.toString()
    }
    const cut = decimal.slice(0, 12);
    return `${integer}.${cut}`
  }
  const percent = ()=>{
    let res = parseFloat(number) / 100;
    changeNum(res)
  }
  const equal = ()=>{
    let result;
    switch(operator){
      case "+":
        result= toFixedNumber(parseFloat(number) + parseFloat(number2), 10);
       
        break;
      case "-":
        result= parseFloat(number) - parseFloat(number2);
        break;
      case "x":
        result= parseFloat(number) * parseFloat(number2);
        break;
      case "/":
        result= parseFloat(number) / parseFloat(number2);
        break;
      case "":
        result=number;
        break;
      
    }
    const limitedResult = limitDecimal(result);
    changeNum(limitedResult)
    changeNum2("")
    changeOperator("")
  }
  return (
    <div className="App">
      <div className='calculator'>
        <div className='container'>{number2!==""? number2:number}</div>
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
          <button onClick={(e)=>{addNumber(e.target.value)}} value=".">.</button>
          <button onClick={equal}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
