import MainPage from "./components/MainPage"
import Statistics from "./components/Statistics";
import Layout from "./layout/Layout"
import Ludo from "./components/Ludo";
import Contact from "./components/Contact";
import SnakeandLadder from "./components/SnakeandLadder";
import TicTacToe from "./components/TicTacToe";
import UserInfo from "./components/UserInfo";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { useState } from "react";
import './App.css';
import Signup from "./components/Signup";
import LoginPage from "./components/LoginPage";

function App() {
  const [active,setActive] = useState("Home")

  const placeHolder = () => {
    console.log("hello")
  }

  // const choosePage = (active) => {
  //   if(active==="Home"){
  //     return <MainPage placeHolder={placeHolder}/>
  //   }
  //   if(active==="Statistics"){
  //     return <Statistics/>
  //   }
  //   if(active==="Signup"){
  //     return <Signup/>
  //   }
  //   else if(active==="Login"){
  //     return <LoginPage/>
  //   }
  // }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout active={active} setActive={setActive}/>}>
            <Route index element={<MainPage placeHolder={placeHolder}/>}/>
            <Route path="join-us/user" element={<UserInfo/>}/>
            <Route path="contact-us" element={<Contact/>}/>
            <Route path="games/tic-tac-toe" element={<TicTacToe/>}/>
            <Route path="games/snake-ladder" element={<SnakeandLadder/>}/>
            <Route path="games/ludo" element={<Ludo/>}/>
            <Route path="statistics" element={<Statistics/>}/>
            <Route path="join-us/signup" element={<Signup/>}/>
            <Route path="join-us/login" element={<LoginPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>

      {/* {
        choosePage(active)
      } */}
    </div>
  );
}

export default App;