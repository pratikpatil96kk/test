import './App.css';
import React , {useState} from "react";


function App() {
  
  // const [value, setvalue] = useState({ });
  
  const Arr = [ 100, 500, 300, 200, 400 ];


  const inputData = {}

  function submitSuccessfully(e){
    e.preventDefault()
    console.log(inputData)
    alert("submit successfully")
  }

  function inputField(e) {
    inputData[e.target.name] = e.target.value
  }
   



  return (
    <div className="App">
     <form onSubmit={submitSuccessfully} >
      
      <input   onChange={inputField}  name="name"   placeholder="enter details" />
      <input   onChange={inputField}  name="email"   placeholder="enter details" />
      <input  onChange={inputField}  name="username"   placeholder="enter details" />
      <input  onChange={inputField}  name="password"   placeholder="enter details" />


      <button type="submit" >submit</button>
     </form>
       
       
         {/* mapping */}
         {/*
          arrayname.map((item , index) => (

         ))
          */}
          {
            Arr.map((item, index)=>(  
             item > 150 ? 
            <div key="index">
              <h1>{item}</h1> 
              <h2>{index}</h2>  
            </div> : "nko dakhu"
               ))
          }
         
    </div>
  );
}

export default App;
