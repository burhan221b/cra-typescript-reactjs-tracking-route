import React from 'react';

interface PlotProps {
    location: { city: string, state: string, country: string },
    index: number
}

function StartPlot(props: PlotProps) {
    const { location: { city, state, country }, index } = props;
    return (
        <>
            {/* Plot */}
            <div>
                <div className="name">
                    <p>{index} START {city}</p>
                </div>
                {/* <div className="path"></div> */}
            </div>
        </>
    );
}

export default StartPlot;
