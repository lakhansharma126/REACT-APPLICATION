import { CircularProgressbar } from "react-circular-progressbar";
import React from 'react'


const ProgressBar = () => {
const points = 30000 //only of testing
const percentage = (points / 10000) * 100; //calculate the percentage
 return (
        <div>
            <CircularProgressbar value={percentage} text={points} />
        </div>
    );
}
export default ProgressBar;