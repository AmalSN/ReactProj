import React from 'react'
import mainstyle from "./MainPage.module.css"
import Carousel from "./Carousel.js"
import $ from 'jquery';
import {Link} from "react-router-dom";
import { useState } from "react";

const MainPage = () => {

    let [gameLink,setGameLink]=useState("/games/tic-tac-toe");

    function playGame(){
        let game = $(".carousel-inner .active h5").text();
        if(game === "Tic-Tac-Toe") game = "tic-tac-toe";
        else if(game === "Snake and Ladder") game = "snake-ladder";
        else game = "ludo"; 
        setGameLink(gameLink = "/games/" + game);
    }
    function userSettings(){
        return "/join-us/user";
    }
    function contactUs(){
        return "/contact-us";
    }

  return (
    <div className={mainstyle.brownColor}>
    <div className="container-fluid">
        <div className="row">
            <div className="col-6">
                <div id="carouselExampleCaptions" className={`carousel slide carousel-fade mx-auto my-2 ${mainstyle.carouselmain}`} data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0"
                            className="active bg-dark" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                            className="bg-dark" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                            className="bg-dark" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <Carousel game="tic" text="Show us if you can get 3 in a row"/>
                        <Carousel game="snake" text="Climb Ladders and get bitten by snakes"/>
                        <Carousel game="ludo" text="Race to your home with all four pieces"/>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon bg-warning" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon bg-warning" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className="col-2 my-auto">
                <h1 className={`text-center my-auto d-none d-sm-none d-md-none d-lg-block ${mainstyle.fontSpecial}`}>Board Nights</h1>
            </div>
            <div className="col-4">
                {/* <div className="card bg-warning my-4 mx-auto" style={{width: 18 + "rem"}}>
                    <div className="card-body">
                        <h5 className="card-title">LeaderBoards</h5>
                        <p className="card-text">Compete with best and try to come in the top 100.</p>
                        <a href="/leaderboard/tic-tac-toe" className="btn d-block" style="background-color: brown;">Go to Leaderboard</a>
                    </div>
                </div> */}
                <div className="card bg-warning my-4 mx-auto" style={{width: 18 + "rem"}}>
                    <div className="card-body">
                        <h5 name="card-title">Statistics</h5>
                        <p className="card-text">See your progress and try to improve your game.</p>
                        {/* <a href="/statistics" className="btn brown-color d-block" style="background-color: brown;">Go to Statistics</a> */}
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-6">
                <Link to={gameLink} onMouseOver={playGame} style={{textDecoration:"none"}}>
                    <button type="button" className="btn btn-warning btn-lg mx-auto d-block">Play</button>
                </Link>
                  {/* playGame() */}
            </div>
            {/* <div className="col-2"></div> */}
            <div className="col-2">
                <Link to={userSettings()}>
                    <button type="button" className="btn btn-warning btn-lg offset-md-4" >
                    {/* userSettings() */}
                    <img src="/profile.png" style={{width: 50+"px", height: 50+"px"}} alt=""/>
                    </button>
                </Link>
            </div>
            <div className="col-2">
                <Link to={contactUs()}>
                    <button type="button" className="btn btn-warning btn-lg">Contact-Us</button>
                </Link>
                {/* contactUs() */}
            </div>
        </div>
    </div>
    </div>
  )
}

export default MainPage
