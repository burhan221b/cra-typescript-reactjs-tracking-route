import React from 'react';

interface PlotProps {
    location: { city: string, state: string, country: string },
    index: number
}

function EndPlot(props: PlotProps) {
    const { location: { city, state, country }, index } = props;
    return (
        <>
            {/* Plot */}
            <div >
                <div className="name">
                    <p>{index} END {city}</p>
                </div>
            </div>
        </>
    );
}

export default EndPlot;
