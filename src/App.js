import React, {useState, useEffect} from 'react'
import './App.css'

const App = () => {
  const [input, setInput] = useState(0);
  const [chess, setChess] = useState([]);

  const Chessboard = () => {
    let arr = [];
    for (let i=0;i<input;i++){
      let temp = [];
      for (let j=0;j<input;j++){
        if ((i+j)%2)
          temp.push(<div className='black'></div>);
        else  
          temp.push(<div className = 'white'></div>)
      }
      arr.push(temp);
    }
    setChess(arr);
  }

  useEffect(()=>{
    Chessboard();
  })

  return (
    <div className='chess'>
      
      <div>
        <h2> 
          ChessBoard
        </h2>
        <input type="number" placeholder='Enter the Number' onChange={(e)=>setInput(e.target.value)} />
      </div>

      <section className='chessBox' style={{width:100*input}}>
        {chess}
      </section>

    </div>
  )
}

export default App
