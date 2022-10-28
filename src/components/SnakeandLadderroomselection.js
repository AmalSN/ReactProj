import React from 'react'
import './SnakeandLadderroomselection.css'

export default function SnakeandLadderroomselection() {
  return (
 
      <form action="/games/snake-ladder-room" method="GET">
        <div class="col-sm-12 mx-auto" style={{width: "150px;"}}>
            <label for="room"><b><br/>Enter Room</b></label>
        <input type="text" id="room" name="room" required/>
    </div>
    <div class="mx-auto" style={{width: "100px;"}}>
         <button type="submit">Enter</button>
         </div>
    </form>
   
  )
}
