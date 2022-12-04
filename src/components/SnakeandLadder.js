import React from 'react'
import snk from './SnakeandLadder.module.css'
import SnakeBlock from './SnakeBlock.js'
import {useDispatch} from 'react-redux';
import snakeWin from './../store/actions/snakeWin';
import snakeLoss from './../store/actions/snakeLoss';
import $ from 'jquery'
import Dice from './Dice.js'

export default function SnakeandLadder() {

    const dispatch = useDispatch();


    let pieceColorList = [snk.redpiececolor,snk.bluepiececolor,snk.yellowpiececolor,snk.greenpiececolor];
    let turnOrder = 0;
    let snakeList = [
      [17, 6],
      [34, 24],
      [54, 37],
      [62, 19],
      [70, 65],
      [87, 29],
      [94, 90],
      [99, 38]
    ]
    let ladderList = [
      [2, 38],
      [4, 14],
      [27, 50],
      [30, 71],
      [55, 95],
      [64, 84]
    ]
    let currentColor = "red";
    let colorNumbering = {
      "red": 0,
      "blue": 1,
      "yellow": 2,
      "green": 3
    };
    let playerPosition = [1, 1, 1, 1];

    let on = () => {
        $(`${snk.overlay}`).css("display","flex");
        currentColor = "red";
        turnOrder = 0;
        
        for(let i=0;i<4;i++){
          $(`.block${playerPosition[i]} .${pieceColorList[i]}`).html("");
        }
        
        playerPosition = [1, 1, 1, 1];
        let pieceColor = ["red","blue","yellow","green"];

        for(let i=0;i<4;i++){
          $(`.block${playerPosition[i]} .${pieceColorList[i]}`).html(`<img src='/${pieceColor[i].toLowerCase()}Pawn.png'>`);
        }  
      }

    let off = () => {
        $(`${snk.overlay}`).css("display","on");
    }

    function changeColor(){
        if(currentColor === "red"){
          $(`#${snk['turnindicator']}`).removeClass(`${snk.redpiececolor}`);
          $(`#${snk['turnindicator']}`).addClass(`${snk.bluepiececolor}`);
          $(`#${snk['turnindicator']}`).text("Blue Player's Turn");
          currentColor = "blue";
        }
        else if(currentColor === "blue"){
          $(`#${snk['turnindicator']}`).removeClass(`${snk.bluepiececolor}`);
          $(`#${snk['turnindicator']}`).addClass(`${snk.yellowpiececolor}`);
          $(`#${snk['turnindicator']}`).text("Yellow Player's Turn");
          currentColor = "yellow";
        }
        else if(currentColor === "yellow"){
          $(`#${snk['turnindicator']}`).removeClass(`${snk.yellowpiececolor}`);
          $(`#${snk['turnindicator']}`).addClass(`${snk.greenpiececolor}`);
          $(`#${snk['turnindicator']}`).text("Green Player's Turn");
          currentColor = "green";
        }
        else{
          $(`#${snk['turnindicator']}`).removeClass(`${snk.greenpiececolor}`);
          $(`#${snk['turnindicator']}`).addClass(`${snk.redpiececolor}`);
          $(`#${snk['turnindicator']}`).text("Red Player's Turn");
          currentColor = "red";
        }
      }

    function pieceMovement(pieceColor, spotsMoved){
        let pos = colorNumbering[pieceColor];
        if(playerPosition[pos] + spotsMoved <= 100){
          $(`.block${playerPosition[pos]} .${pieceColorList[pos]}`).html("");
          playerPosition[pos] += spotsMoved;
          $(`.block${playerPosition[pos]} .${pieceColorList[pos]}`).html(`<img src='/${pieceColor.toLowerCase()}Pawn.png'>`);
          
          for(let i = 0; i < snakeList.length; i++){
            if(playerPosition[pos] === snakeList[i][0]){
              $(`.block${playerPosition[pos]} .${pieceColorList[pos]}`).html("");
              playerPosition[pos] = snakeList[i][1];
              $(`.block${playerPosition[pos]} .${pieceColorList[pos]}`).html(`<img src='/${pieceColor.toLowerCase()}Pawn.png'>`);
              break;
            }      
          }
          for(let i = 0; i < ladderList.length; i++){
            if(playerPosition[pos] === ladderList[i][0]){
              $(`.block${playerPosition[pos]} .${pieceColorList[pos]}`).html("");
              playerPosition[pos] = ladderList[i][1];
              $(`.block${playerPosition[pos]} .${pieceColorList[pos]}`).html(`<img src='/${pieceColor.toLowerCase()}Pawn.png'>`);
              break;
            }      
          }
          if(playerPosition[pos] === 100){
            $(".winner-text").text(currentColor[0].toUpperCase()+currentColor.slice(1)+" wins!!");
            if(pos === 0){
              dispatch(snakeWin());
            }
            else{
              dispatch(snakeLoss());
            }
            // socket.emit("winS", {x: currentColor, y: $("#loggedUser").text().slice(25,-21)});
            on();
          }
          else{
            console.log(turnOrder);
            // socket.emit("moveS", {x: playerPosition, y: turnOrder});
          }
        }
        changeColor();
        console.log(playerPosition);
      }

    function rollDice() {

        let elDiceOne = document.querySelector('.dce1');
        let diceOne   = Math.floor((Math.random() * 6) + 1);
       
        console.log(diceOne);
      
        let faceClassList = [snk.show1,snk.show2,snk.show3,snk.show4,snk.show5,snk.show6];
        for (let i = 1; i <= 6; i++) {
          elDiceOne.classList.remove(faceClassList[i-1]);
          if (diceOne === i) {
            elDiceOne.classList.add(faceClassList[i-1]);
          }
        }
      
        pieceMovement(currentColor, diceOne);
      }

    let generateBoard = () => {
        let blocksInBoard = []
        let cnt = 101;
        for(let y = 0; y < 5; y++){
            for(let x = 0; x < 10; x++){
              cnt--;
              blocksInBoard.push(<SnakeBlock key={cnt} cnt={cnt}/>)
            }
            cnt -= 10;
            for(let x = 0; x < 10; x++){
                blocksInBoard.push(<SnakeBlock key={cnt} cnt={cnt}/>)
                cnt++;
            }
            cnt -= 10
        }
        return blocksInBoard;
    }



  return (
      <div style={{backgroundColor: "burlywood"}}>

<div className="" id="freezeScreen"></div>
<div className={`${snk.overlay}`} onClick={off()}>
    <div className={`${snk.displaywinner}`}><span className="winner-text"></span></div>
    <div className={`${snk.restartmessage}`}><span className="restart-text">Click anywhere on the screen to play again</span>
    </div>
</div>

<div className={`${snk.allclasses} main-container container-fluid py-4`}>
    <div className="row">
        <div className={`${snk.boardcontainer} col-6`}>
            <div className={`${snk.board} ${snk.relativecontainer}`}>
                <img alt="" src="/snake.png" className={snk.snakePic} id={snk.snake1}/>
                <img alt="" src="/snake.png" className={snk.snakePic} id={snk.snake2}/>
                <img alt="" src="/snake.png" className={snk.snakePic} id={snk.snake3}/>
                <img alt="" src="/snake.png" className={snk.snakePic} id={snk.snake4}/>
                <img alt="" src="/snake.png" className={snk.snakePic} id={snk.snake5}/>
                <img alt="" src="/snake.png" className={snk.snakePic} id={snk.snake6}/>
                <img alt="" src="/snake.png" className={snk.snakePic} id={snk.snake7}/>
                <img alt="" src="/snake.png" className={snk.snakePic} id={snk.snake8}/>
                <img alt="" src="/ladder.png" className={snk.ladderPic} id={snk.ladder1}/>
                <img alt="" src="/ladder.png" className={snk.ladderPic} id={snk.ladder2}/>
                <img alt="" src="/ladder.png" className={snk.ladderPic} id={snk.ladder3}/>
                <img alt="" src="/ladder.png" className={snk.ladderPic} id={snk.ladder4}/>
                <img alt="" src="/ladder.png" className={snk.ladderPic} id={snk.ladder5}/>
                <img alt="" src="/ladder.png" className={snk.ladderPic} id={snk.ladder6}/>
                
                
                {generateBoard()}
                {/* {initialBoardState()} */}

                
            </div>
        </div>
        <div className={`${snk.dicecontainer} col-6`}>
            <div className="container">
                <div className="row">
                    <Dice num={1}/>
                </div>
                <div className="row">
                    <div id='roll' className="roll-button"><button className={`${snk.btn} d-block mx-auto`} onClick={rollDice}>Roll dice!</button></div>
                </div>
                <div className="row my-4">
                    <div className="col-4 my-auto">
                        <p id={snk.turnindicator} className={`text-center ${snk.redpiececolor}`}>Red Player's Turn</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</div>
</div>
    
  )
}
