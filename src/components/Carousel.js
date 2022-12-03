import React from 'react'
import mainstyle from './MainPage.module.css'

const Carousel = ({game,text}) => {

    let gameimage,gameName;

    if(game==="tic"){
        gameName = "Tic-Tac-Toe"
        gameimage="./TicTacToe_pic.jpg";
    }
    if(game==="snake"){
        gameName = "Snake and Ladder";
        gameimage="./SnakeLadder_pic.jpg";
    }
    if(game==="ludo"){
        gameName = "Ludo";
        gameimage="./Ludo_pic.jpg";
    }

  return (
    <div className={`carousel-item ${game==="tic"?"active":""}`}>
        <img src={gameimage} className={`d-block w-100 ${mainstyle.imgChange}`} alt=""/>
        <div className="carousel-caption d-none d-md-block text-dark bg-light box-transparent">
            <h5>{gameName}</h5>
            <p className="d-none d-lg-block">{text}</p>
        </div>
    </div>
  )
}

export default Carousel
