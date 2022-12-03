import React from 'react'
import snk from './SnakeandLadder.module.css'

const SnakeBlock = ({cnt}) => {

  return (
    
        
        <div className={`${snk.block} block${cnt}`}>
            {cnt}
            <span className= {`${snk.piece} ${snk.redpiececolor}`}>{cnt===1&&<img src='/redPawn.png' alt=""></img>}</span>
            <span className= {`${snk.piece} ${snk.bluepiececolor}`}>{cnt===1&&<img src='/bluePawn.png' alt=""></img>}</span>
            <span className= {`${snk.piece} ${snk.yellowpiececolor}`}>{cnt===1&&<img src='/yellowPawn.png' alt=""></img>}</span>
            <span className= {`${snk.piece} ${snk.greenpiececolor}`}>{cnt===1&&<img src='/greenPawn.png' alt=""></img>}</span>
        </div>


  )
}

export default SnakeBlock
