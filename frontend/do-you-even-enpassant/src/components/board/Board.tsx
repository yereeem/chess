import { getCharacter } from "../../helper";
import Files from "../../pages/game-board-page/bits/Files";
import Ranks from "../../pages/game-board-page/bits/Ranks";
import Square from "../../pages/game-board-page/Square";


const Board = () => {

    const ranks = Array(8).fill(undefined).map((x, i) => 8-i);
    const files = Array(8).fill(undefined).map((x, i) => getCharacter(i));

    const getColour = (i, j) => {
        return (i + j) % 2 === 0 ? "bg-[var(--light-tile)]" : "bg-[var(--dark-tile)]";
    }

    return(
        // Board
        <div className="bg-transparent flex justify-center items-center grid">
            {/* Tiles */}
            <div className="grid grid-cols-[calc(.25*var(--tile-size))_calc(8*var(--tile-size))]">
                <Ranks ranks={ranks}/>

                <div className="grid grid-cols-[repeat(8,var(--tile-size))]">
                {ranks.map((rank, i) => (
                    // Added a key here row-i to get rid of react error, but idk if i like it. 
                    <div className="grid grid-rows-[repeat(8,var(--tile-size))]" key={`row-${i}`}> 
                    {files.map((file, j) => (
                        <Square rank={rank} file={file} colour={getColour(i, j)} key={`square-${rank}${file}`}/>
                    ))}
                    </div>
                ))}
                </div>

                <Files files={files}/>
            </div>
        </div>
    )
}

export default Board