import Board from "../../components/board/Board"
import { Button } from "../../dyee-component-design-system/ui/button"
import { useNavigate } from "react-router-dom"

const GameBoardPage = () => {

    const navigate = useNavigate();

    const handleNavigate = (path: string) => {
        navigate(path);
    }

    return (
        <>
        <div className="bg-zinc-500">
            <div>This is the gameboard page...</div>
            <div>
                TODO:
                <li>Pause</li>
                <li>Timer</li>
                <li>Back to Home</li>
                <li>Save and Quit</li>
            </div>
            <Board />

            <Button onClick={ () => handleNavigate("/") }>Quick Home</Button>
        </div>
        </>
    )
}

export default GameBoardPage