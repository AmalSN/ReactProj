import React from 'react'
import './Ludo.css'
export default function Ludo() {
  return (
    <div>
      <div className="Page">
            {/* <!--page --> */}
            <div className="BOX1">
                {/* <!--ludo portion --> */}
                <div className="containerL">
                    <div className="container1">
                        <div className="r1c1 green">
                            <div className="r1c1c white">
                                <div className="green"><span className="pg1 spg0 pg"></span></div>
                                <div className="green"><span className="pg2 spg0 pg"></span></div>
                                <div className="green"><span className="pg3 spg0 pg"></span></div>
                                <div className="green"><span className="pg4 spg0 pg"></span></div>
                            </div>
                        </div>
                        <div className="r1c2 path">

                        </div>
                        <div className="r1c3 yellow">
                            <div className="r1c3c white">
                                <div className="yellow"><span className="py1 spy0 py"></span></div>
                                <div className="yellow"><span className="py2 spy0 py"></span></div>
                                <div className="yellow"><span className="py3 spy0 py"></span></div>
                                <div className="yellow"><span className="py4 spy0 py"></span></div>
                            </div>
                        </div>
                    </div>
                    <div className="container2">
                        <div className="r2c1 path"></div>
                        <div className="r2c2">
                            <div className="triangle home ">
                                <div className="triangle-g g57"></div>
                                <div className="triangle-r r57"></div>
                                <div className="triangle-b b57"></div>
                                <div className="triangle-y y57"></div>
                            </div>
                        </div>
                        <div className="r2c3 path"></div>
                    </div>
                    <div className="container3">
                        <div className="r3c1 red">
                            <div className="r3c1c white">
                                <div className="red"><span className="pr1 spr0 pr"></span></div>
                                <div className="red"><span className="pr2 spr0 pr"></span></div>
                                <div className="red"><span className="pr3 spr0 pr"></span></div>
                                <div className="red"><span className="pr4 spr0 pr"></span></div>
                            </div>
                        </div>
                        <div className="r3c2 path"></div>
                        <div className="r3c3 blue">
                            <div className="r3c3c white">
                                <div className="blue"><span className="pg1 spb0 pb"></span></div>
                                <div className="blue"><span className="pg2 spb0 pb"></span></div>
                                <div className="blue"><span className="pg3 spb0 pb"></span></div>
                                <div className="blue"><span className="pb4 spb0 pb"></span></div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <div className="BOX2">
                <div className="row">
                    <div className="col-4"></div>
                    <div id='roll' className="roll">
                        <button id="dice-btn" className="button-dice">Roll dice!</button>
                    </div>
                </div>
                {/* <!--Dice portion --> */}
                <div className="dice offset-md-3" id="dice1" style={{width: "100px",height: "100px"}}>
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


            </div>

            <span id="chance">
                Chance of - Green
            </span>

        </div>
    </div>
  )
}
