import React from 'react'

export default function SnakeandLadder() {
  return (
      <body style={{backgroundcolor: "burlywood;"}}>

<div className="" id="freezeScreen"></div>
<div className="overlay" onclick="off()">
    <div className="display-winner"><span className="winner-text"></span></div>
    <div className="restart-message"><span className="restart-text">Click anywhere on the screen to play again</span>
    </div>
</div>
{/* <%- include('partial/navbar', {active: ""}); %> */}

<div className="main-container container-fluid py-4">
    <div className="row">
        <div className="board-container col-6">
            <div className="board relative-container">
                <img alt="" src="../../public/snake.png" className="snakePic" id="snake1"/>
                <img alt="" src="../../public/snake.png" className="snakePic" id="snake2"/>
                <img alt="" src="../../public/snake.png" className="snakePic" id="snake3"/>
                <img alt="" src="../../public/snake.png" className="snakePic" id="snake4"/>
                <img alt="" src="../../public/snake.png" className="snakePic" id="snake5"/>
                <img alt="" src="../../public/snake.png" className="snakePic" id="snake6"/>
                <img alt="" src="../../public/snake.png" className="snakePic" id="snake7"/>
                <img alt="" src="../../public/snake.png" className="snakePic" id="snake8"/>
                <img alt="" src="../../public/ladder.png" className="ladderPic" id="ladder1"/>
                <img alt="" src="../../public/ladder.png" className="ladderPic" id="ladder2"/>
                <img alt="" src="../../public/ladder.png" className="ladderPic" id="ladder3"/>
                <img alt="" src="../../public/ladder.png" className="ladderPic" id="ladder4"/>
                <img alt="" src="../../public/ladder.png" className="ladderPic" id="ladder5"/>
                <img alt="" src="../../public/ladder.png" className="ladderPic" id="ladder6"/>
            </div>
        </div>
        <div className="dice-container col-6">
            <div className="container">
                <div className="row">
                    <div className="dice mx-auto" id="dice1" style={{width: "100px",height: "100px;"}}>
                        <div id="dice-one-side-one" className='side one'>
                            <div className="dot one-1"></div>
                        </div>
                        <div id="dice-one-side-two" className='side two'>
                            <div className="dot two-1"></div>
                            <div className="dot two-2"></div>
                        </div>
                        <div id="dice-one-side-three" className='side three'>
                            <div className="dot three-1"></div>
                            <div className="dot three-2"></div>
                            <div className="dot three-3"></div>
                        </div>
                        <div id="dice-one-side-four" className='side four'>
                            <div className="dot four-1"></div>
                            <div className="dot four-2"></div>
                            <div className="dot four-3"></div>
                            <div className="dot four-4"></div>
                        </div>
                        <div id="dice-one-side-five" className='side five'>
                            <div className="dot five-1"></div>
                            <div className="dot five-2"></div>
                            <div className="dot five-3"></div>
                            <div className="dot five-4"></div>
                            <div className="dot five-5"></div>
                        </div>
                        <div id="dice-one-side-six" className='side six'>
                            <div className="dot six-1"></div>
                            <div className="dot six-2"></div>
                            <div className="dot six-3"></div>
                            <div className="dot six-4"></div>
                            <div className="dot six-5"></div>
                            <div className="dot six-6"></div>
                        </div>
                    </div>

                     <div className="dice" id="dice2" style={{width: "100px",height: "100px"}}>
                        <div id="dice-two-side-one" className='side one'>
                            <div className="dot one-1"></div>
                        </div>
                        <div id="dice-two-side-two" className='side two'>
                            <div className="dot two-1"></div>
                            <div className="dot two-2"></div>
                        </div>
                        <div id="dice-two-side-three" className='side three'>
                            <div className="dot three-1"></div>
                            <div className="dot three-2"></div>
                            <div className="dot three-3"></div>
                        </div>
                        <div id="dice-two-side-four" className='side four'>
                            <div className="dot four-1"></div>
                            <div className="dot four-2"></div>
                            <div className="dot four-3"></div>
                            <div className="dot four-4"></div>
                        </div>
                        <div id="dice-two-side-five" className='side five'>
                            <div className="dot five-1"></div>
                            <div className="dot five-2"></div>
                            <div className="dot five-3"></div>
                            <div className="dot five-4"></div>
                            <div className="dot five-5"></div>
                        </div>
                        <div id="dice-two-side-six" className='side six'>
                            <div className="dot six-1"></div>
                            <div className="dot six-2"></div>
                            <div className="dot six-3"></div>
                            <div className="dot six-4"></div>
                            <div className="dot six-5"></div>
                            <div className="dot six-6"></div>
                        </div>
                    </div> 
                </div>
                <div className="row">
                    <div id='roll' className="roll-button"><button className="d-block mx-auto">Roll dice!</button></div>
                </div>
                <div className="row my-4">
                    <div className="col-4 my-auto">
                        <p id="turn-indicator" className="text-center red-piece-color">Red Player's Turn</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</div>
</body>
    
  )
}
