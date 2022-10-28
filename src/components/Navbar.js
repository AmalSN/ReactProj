import React from 'react'

const Navbar = ({active, setActive}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid offset-md-4">
        <a className="navbar-brand text-warning" href="/">Board Nights</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className={active==="Home"?"nav-link active":"nav-link"} aria-current="page" href="/" onClick={() => {setActive(active = "Home")}}>Home</a>
                    {/* <span className={active==="Home"?"nav-link active":"nav-link"} onClick={() => {setActive(active = "Home")}}>Home</span> */}
                </li>
                <li className="nav-item dropdown">
                    <span className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        Games
                    </span>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li>
                            <a className="dropdown-item" href="/games/tic-tac-toe" onClick={() => {setActive(active = "TicTacToeLeaderboard")}}>Tic-Tac-Toe</a>
                            {/* <span className="dropdown-item" onClick={() => {setActive(active = "TicTacToeLeaderboard")}}>Tic-Tac-Toe</span> */}
                        </li>
                        <li>
                            <a className="dropdown-item" href="/games/snake-ladder" onClick={() => {setActive(active = "SnakeLadderLeaderboard")}}>Snake and Ladder</a>
                            {/* <span className="dropdown-item" onClick={() => {setActive(active = "SnakeLadderLeaderboard")}}>Snake and Ladder</span> */}
                        </li>
                        <li>
                            <a className="dropdown-item" href="/games/ludo" onClick={() => {setActive(active = "LudoLeaderboard")}}>Ludo</a> 
                            {/* <span className="dropdown-item" onClick={() => {setActive(active = "LudoLeaderboard")}}>Ludo</span> */}
                        </li>
                    </ul>
                </li>
                <li className="nav-item">
                    <a className={active==="Statistics"?"nav-link active":"nav-link"} aria-current="page" href="/statistics" onClick={() => {setActive(active = "Statistics")}}>Statistics</a>
                    {/* <span className={active==="Statistics"?"nav-link active":"nav-link"} onClick={() => {setActive(active = "Statistics")}}>Statistics</span> */}
                </li>
            </ul>
            <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className={active==="Signup"?"nav-link active":"nav-link"} aria-current="page" href="/join-us/signup" onClick={() => {setActive(active = "Signup")}}>Sign-Up</a>
                    {/* <span className={active==="Signup"?"nav-link active":"nav-link"} onClick={() => {setActive(active = "Signup")}}>Sign-Up</span> */}
                </li>
                <li className="nav-item">
                <a className={active==="Login"?"nav-link active":"nav-link"} aria-current="page" href="/join-us/login" onClick={() => {setActive(active = "Login")}}>Login</a>
                    {/* <% if(loggedUser == undefined){ %>
                        <a className={active==="Login"?"nav-link active":"nav-link"} aria-current="page" href="/join-us/login">Login</a>
                    <% }else{ %>
                        <a className="nav-link" aria-current="page" href="/join-us/logout">Logout</a>
                    <% } %> */}
                    {/* <span className={active==="Login"?"nav-link active":"nav-link"} onClick={() => {setActive(active = "Login")}}>Login</span> */}
                </li>
                <li className="nav-item">
                    {/* <a className="nav-link disabled" id="loggedUser" aria-current="page">
                        <%= loggedUser %>
                    </a> */}
                </li>
            </ul>
        </div>
    </div>
    </nav>
  )
}

export default Navbar