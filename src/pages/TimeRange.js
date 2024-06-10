import React, { useState } from 'react';

const TimeRange = () => {
    const [start, setStart] = useState(5);
    const [end, setEnd] = useState(22);
    const excluded = ["13-14", "17"];

    const handleStartChange = (e) => {
        const newStart = e.target.value;
        if (newStart <= end) {
            setStart(newStart);
            console.log(  "startTime=" + start +" " + "endTime" +end  +" " + "excludedTime"+excluded)
        }
    };

    const handleEndChange = (e) => {
        const newEnd = e.target.value;
        if (newEnd >= start) {
            setEnd(newEnd);
            console.log("startTime=" + start +" " + "endTime" +end  +" " + "excludedTime"+excluded );
        }
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center' }}>
            <label>
                Start Time:
                <input type="number" min="0"max="24"value={start} onChange={handleStartChange} />
            </label>
            <label>
                End Time:
                <input type="number" min="0"max="24"value={end} onChange={handleEndChange} />
            </label>
            <div>
                Selected Time Range: {start}:00 - {end}:00
            </div>
            <div>Excluded   : {excluded.join(',')}</div>
        </div>
    );
};

export default TimeRange;