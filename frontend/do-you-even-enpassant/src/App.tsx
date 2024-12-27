import { BrowserRouter, Routes, Route } from "react-router-dom"
import "../app/global.css"
import HomePage from "./pages/home-page/HomePage"
import GameBoardPage from "./pages/game-board-page/GameBoardPage"

export default function App() {

  return (
    <>
      {/* <HomePage /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="game" element={<GameBoardPage />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}