import { useState, useEffect } from "react";

function ProgressBar({text, maxValue}) {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        if (progress < maxValue){
            setProgress(progress + 10)
        }
    }, [progress, maxValue])

    return (
        <div className="ProgressBar progress w-100 mb-4">
            <div className="progress-bar" role="progressbar" aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100" style={{width: progress + '%', transition: 'width 1s ease-in-out'}}>{text}</div>
        </div>
    );
}

export default ProgressBar;
