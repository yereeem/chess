import React from "react";

interface RanksProps {
    ranks: number[];
}

const Ranks: React.FC<RanksProps> = ({ranks}) => {
    return (
        <div className="flex flex-col justify-around">
            {ranks.map((rank) => (
                <span key={`rank-${rank}`}>{rank}</span>
            ))}
        </div>
    )
}

export default Ranks