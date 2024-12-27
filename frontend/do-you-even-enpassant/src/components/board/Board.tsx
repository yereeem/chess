import { getCharacter } from "../../helper";
import Square from "../../pages/game-board-page/Square";


const Board = () => {

    const ranks = Array(8).fill(undefined).map((x, i) => 8-i);
    const files = Array(8).fill(undefined).map((x, i) => getCharacter(i));

    const getColour = (i, j) => {
        return (i + j) % 2 === 0 ? "bg-[var(--light-tile)]" : "bg-[var(--dark-tile)]";
    }

    return(
        // Board
        <div className="bg-transparent flex justify-center items-center">
            {/* Tiles */}
            <div className="grid grid-cols-[repeat(8,var(--tile-size))]">
            {ranks.map((rank, i) => (
                <div className="grid grid-rows-[repeat(8,var(--tile-size))]" key={`rank-${i}`}>
                {files.map((file, j) => (
                    <Square rank={rank} file={file} colour={getColour(i, j)} />
                ))}
                </div>
            ))}
            </div>
        </div>
    )
}

export default Board