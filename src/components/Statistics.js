import React from 'react'
// import statss from './Statistics.module.css'

export default function Statistics() {
  return (
    <div>
      
    <div class="accordion-body">
        <div class="accordion">
            <h1>Statistics</h1>
            <hr/>
            <div class="container">
                <div class="label">Tic Tac Toe</div>
                <div class="content">

                    <div class="card ">
                        <ul class="list-group">
                            <li class="list-group-item">Number of game played: <span class="tic"
                                    id="tic-played"></span></li>
                            <li class="list-group-item">Number of wins: <span class="tic" id="tic-win"></span> </li>
                            <li class="list-group-item">Number of losses: <span class="tic" id="tic-loss"></span>
                            </li>
                            <li class="list-group-item">Wins Percentages: <span class="tic"
                                    id="tic-Percentages">44.4%</span></li>
                        </ul>
                    </div>

                </div>
            </div>
            <hr/>
            <div class="container">
                <div class="label">Ludo</div>
                <div class="content">

                    <div class="card">
                        <ul class="list-group">
                            <li class="list-group-item">Number of game played: <span class="ludo" id="ludo-played"></span></li>
                            <li class="list-group-item">Number of wins: <span class="ludo" id="ludo-win"></span> </li>
                            <li class="list-group-item">Number of losses: <span class="ludo" id="ludo-loss"></span> </li>
                            <li class="list-group-item">Wins Percentages: <span class="ludo" id="ludo-percentages">44.4%</span></li>
                        </ul>
                    </div>

                </div>
            </div>
            <hr/>
            <div class="container">
                <div class="label">Snakes and Ladders</div>
                <div class="content">

                    <div class="card">
                        <ul class="list-group">
                            <li class="list-group-item">Number of game played: <span class="snakes" id="snake-played"></span></li>
                            <li class="list-group-item">Number of wins: <span class="snakes" id="snake-win"></span></li>
                            <li class="list-group-item">Number of losses: <span class="snakes" id="snake-loss"></span> </li>
                            <li class="list-group-item">Wins Percentages: <span class="snakes" id="snake-percentages">44.4%</span></li>
                        </ul>
                    </div>

                </div>
            </div>
            <hr/>
        </div>
    </div>

    </div>
  )
}