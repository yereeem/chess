import { BrowserRouter, Routes, Route } from "react-router-dom"
import "../app/global.css"
import HomePage from "./pages/home-page/HomePage"
import GameboardPage from "./pages/game-board-page/GameboardPage"

export default function App() {

  return (
    <>
      {/* <HomePage /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="game" element={<GameboardPage />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}