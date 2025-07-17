import { useState } from "react";

function App() {
  var [a, setA]: any = useState(0);
  var [b, setB]: any = useState(0);
  var [c, setC]: any = useState(0);
  let random: any = () => {
    setA(Math.floor(Math.random() * 10 + 1))
    setB(Math.floor(Math.random() * 10 + 1))
    setC(Math.floor(Math.random() * 10 + 1))
  }
  Number(a)
  Number(b)
  Number(c)
  var kq: string = ""
  if (a + b + c > 10) {
    kq = "Tài"
  }
  else if (a + b + c < 10) {
    kq = "Xỉu"
  }
  else if(a+b+c == 0){
    kq=""
  }
  return (
    <>
      <center>
        <h1 className="title">
          Tài xỉu
        </h1>
      </center>
      <div className="box1">
        <h1 className="rand">{a}</h1>
        <h1 className="rand">{b}</h1>
        <h1 className="rand">{c}</h1>
      </div>
      <div className="box2">
        <button className="btn" onClick={() => random()}>
          <b>Quay</b>
        </button>
      </div>
      <div className="box3">
        <h1 className="kq">
          Kết quả:{kq}
        </h1>
      </div>
    </>
  )
}
export default App;
