import React from 'react'

export default function TicTacToeroomselection() {
  return (
    
      <form action="/games/tic-tac-toe-room" method="GET">
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
