import React from 'react'
import './TicTacToe.css'

export default function TicTacToe() {


  
  return (
    <div>
      <div class="" id="freezeScreen"></div>
    <div class="overlay" onclick="off()">
        <div class="display-winner"><span class="winner-text"></span></div>
        <div class="restart-message"><span class="restart-text">Click anywhere on the screen to play again</span></div>
    </div>
    
    {/* <%- include('partial/navbar', {active: ""}); %> */}

    <div class="container-tic">
        <h1 class="heading">Tic-Tac-Toe</h1>
        <div class="board">
            <div id="block-top-left" class="block top-row left-column"></div>
            <div id="block-top-middle" class="block top-row"></div>
            <div id="block-top-right" class="block top-row right-column"></div>
            <div id="block-centre-left" class="block left-column"></div>
            <div id="block-centre-middle" class="block"></div>
            <div id="block-centre-right" class="block right-column"></div>
            <div id="block-bottom-left" class="block bottom-row left-column"></div>
            <div id="block-bottom-middle" class="block bottom-row"></div>
            <div id="block-bottom-right" class="block bottom-row right-column"></div>
        </div>
        <span class="winner"/>
        <button class="btn1" onclick="resetBoard()">Reset Board</button>
    </div>
    </div>
  )
}
