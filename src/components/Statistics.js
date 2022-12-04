import React from 'react'
import stats from './Statistics.module.css'
import {useSelector} from 'react-redux';

export default function Statistics() {

    const accordion = document.getElementsByClassName('container');

    for (let i=0; i<accordion.length; i++) {
      accordion[i].addEventListener('click', function () {
        this.classList.toggle('active')
      })
    }

    const valTic = useSelector(state => state.ticStat)
    const valSnake = useSelector(state => state.snakeStat)
    const valLudo = useSelector(state => state.ludoStat)

  return (
    <div className={stats.statbody}> 
      
    <div className="accordion-body">
        <div className={`accordion ${stats.stataccordion}`}>
            <h1 className={stats.stath1}>Statistics</h1>
            <hr className={stats.stathr}/>
            <div className={stats.statcontainer}>
                <div className={stats.statlabel}>Tic Tac Toe</div>
                <div className={stats.statcontent}>

                    <div className="card ">
                        <ul className="list-group">
                            <li className={stats.statlistgroupitem}>Number of game played: <span className="tic"
                                    id="tic-played">{valTic.played}</span></li>
                            <li className={stats.statlistgroupitem}>Number of wins: <span className="tic" id="tic-win">{valTic.wins}</span> </li>
                            <li className={stats.statlistgroupitem}>Number of losses: <span className="tic" id="tic-loss">{valTic.losses}</span>
                            </li>
                            <li className={stats.statlistgroupitem}>Wins Percentages: <span className="tic"
                                    id="tic-Percentages">{valTic.perc}%</span></li>
                        </ul>
                    </div>

                </div>
            </div>
            <hr/>
            <div className={stats.statcontainer}>
                <div className={stats.statlabel}>Snakes and Ladders</div>
                <div className={stats.statcontent}>

                    <div className="card">
                        <ul className="list-group">
                            <li className={stats.statlistgroupitem}>Number of game played: <span className="snakes" id="snake-played">{valSnake.played}</span></li>
                            <li className={stats.statlistgroupitem}>Number of wins: <span className="snakes" id="snake-win"></span>{valSnake.wins}</li>
                            <li className={stats.statlistgroupitem}>Number of losses: <span className="snakes" id="snake-loss">{valSnake.losses}</span> </li>
                            <li className={stats.statlistgroupitem}>Wins Percentages: <span className="snakes" id="snake-percentages">{valSnake.perc}%</span></li>
                        </ul>
                    </div>

                </div>
            </div>
            
            <hr/>
            <div className={stats.statcontainer}>
                <div className={stats.statlabel}>Ludo</div>
                <div className={stats.statcontent}>

                    <div className="card">
                        <ul className="list-group">
                            <li className={stats.statlistgroupitem}>Number of game played: <span className="ludo" id="ludo-played">{valLudo.played}</span></li>
                            <li className={stats.statlistgroupitem}>Number of wins: <span className="ludo" id="ludo-win">{valLudo.wins}</span> </li>
                            <li className={stats.statlistgroupitem}>Number of losses: <span className="ludo" id="ludo-loss">{valLudo.losses}</span> </li>
                            <li className={stats.statlistgroupitem}>Wins Percentages: <span className="ludo" id="ludo-percentages">{valLudo.perc}%</span></li>
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