import { useState } from 'react'
import './App.css'

function App() {
  const [calresult, setCalresult] = useState("")
  const [calculated, setCalculated] = useState(false)

  const display = (value) => {
    if(calculated){
      setCalresult(value)
      setCalculated(false)
    }else{
      setCalresult(calresult => calresult === "ERROR!" ? value : calresult + value)
    }
  }

  const clearAll = () => {
    setCalresult("")
    setCalculated(false)
  }

  const backSpace = () => {
    setCalresult(calresult => calresult.slice(0, -1))
  }

  const evalExpr = () =>{
    try{
      setCalresult(eval(calresult).toString())
      setCalculated(true)
    }catch(erorr){
      setCalresult("ERROR!")
      setCalculated(true)
    }
  }


  return (
    <>

      <div className=" d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <div className="row rounded-4 p-3 shadow" style={{ width: "500px", background: "linear-gradient(to left, rgb(100,82,82),rgb(57,57,65))" }}>
          <div className="text-center justify-content-center mt-3" style={{ backgroundColor: "rosybrown" }}>
            <h1>CANON</h1>
          </div>
          <div className="col-12 d-flex justify-content-around align-items-center mt-3">
            <input value={calresult} type="text" className='form-control shadow' placeholder='0' style={{ textAlign: "right", height: "50px", backgroundColor: "rgb(193,218,235)" }} readOnly />
          </div>
          <div className="col-12 d-flex justify-content-evenly align-items-center mt-4">
            <div onClick={() => display("7")} className='btn btn-lg btn-secondary shadow text-dark fw-bold' style={{ width: "60px" }}>7</div>
            <div onClick={() => display("8")} className='btn btn-lg btn-secondary shadow text-dark fw-bold' style={{ width: "60px" }}>8</div>
            <div onClick={() => display("9")} className='btn btn-lg btn-secondary shadow text-dark fw-bold' style={{ width: "60px" }}>9</div>
            <div onClick={() => display("/")} className='btn btn-lg btn-secondary shadow text-dark fw-bold ms-4' style={{ width: "80px" }}>÷</div>
          </div>
          <div className="col-12 d-flex justify-content-evenly align-items-center mt-4">
            <div onClick={() => display("4")} className='btn btn-lg btn-secondary shadow text-dark fw-bold' style={{ width: "60px" }}>4</div>
            <div onClick={() => display("5")} className='btn btn-lg btn-secondary shadow text-dark fw-bold' style={{ width: "60px" }}>5</div>
            <div onClick={() => display("6")} className='btn btn-lg btn-secondary shadow text-dark fw-bold' style={{ width: "60px" }}>6</div>
            <div onClick={() => display("*")} className='btn btn-lg btn-secondary shadow text-dark fw-bold ms-4' style={{ width: "80px" }}>×</div>
          </div>
          <div className="col-12 d-flex justify-content-evenly align-items-center mt-4">
            <div onClick={() => display("1")} className='btn btn-lg btn-secondary shadow text-dark fw-bold' style={{ width: "60px" }}>1</div>
            <div onClick={() => display("2")} className='btn btn-lg btn-secondary shadow text-dark fw-bold' style={{ width: "60px" }}>2</div>
            <div onClick={() => display("3")} className='btn btn-lg btn-secondary shadow text-dark fw-bold' style={{ width: "60px" }}>3</div>
            <div onClick={() => display("-")} className='btn btn-lg btn-secondary shadow text-dark fw-bold ms-4' style={{ width: "80px" }}>-</div>
          </div>
          <div className="row d-flex justify-content-evenly  align-items-center mt-4">
            <div className="col-9">
              <div className="col-12 d-flex justify-content-evenly align-items-center">
                <div onClick={clearAll} className='btn btn-lg btn-secondary text-dark fw-bold shadow' style={{ width: "60px" }}>AC</div>
                <div onClick={() => display("0")} className="btn btn-lg btn-secondary shadow text-dark fw-bold" style={{ width: '60px' }}>0</div>
                <div onClick={() => display(".")} className="btn btn-lg btn-secondary shadow text-dark fw-bold" style={{ width: "60px" }}>.</div>
              </div>
              <div className="col-12 d-flex justify-content-evenly align-items-center mt-4">
                <div onClick={backSpace} className="btn btn-lg btn-secondary text-dark fw-bold shadow text-center d-flex justify-content-center align-items-center" style={{ width: "100px", height: "60px" }}>Clear</div>
                <div onClick={evalExpr} className="btn btn-lg btn-secondary text-dark fw-bold shadow ms-4 d-flex justify-content-center align-items-center" style={{width: "100px", height: "60px"}}>=</div>
              </div>
            </div>
            <div className='col-3'>
              <div onClick={()=>display("+")} className="btn btn-lg btn-secondary text-dark fw-bold d-flex justify-content-center align-items-center shadow me-5" style={{ width: "80px", height: "150px" }}>+</div>
            </div>
          </div>
        </div>



      </div>
    </>
  )
  }

  export default App
