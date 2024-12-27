import React from "react";

interface SquareProps {
    rank: number;
    file: string;
    colour: string;
}

const Square: React.FC<SquareProps> = ({rank, file, colour}) => {
    return (
        <div className={`${colour} text-zinc-500`} key={`file-${+file}`}>
            {rank}{file}
        </div>
    )
}

export default Square;