import React from "react";

interface FilesProps {
    files: string[];
}

const Files: React.FC<FilesProps> = ({files}) => {
    return (
        <div className="flex col-[2] items-center justify-around h-[calc(0.25*var(--tile-size))]">{files.map((file) => <span key={`file-${file}`}>{file}</span>)}</div>
    )
}
export default Files;