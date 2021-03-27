import React from 'react';

interface PlotProps {
    location: { city: string, state: string, country: string },
    index: number
}

function Plot(props: PlotProps) {
    const { location: { city, state, country }, index } = props;
    return (
        <>
            {/* Plot */}
            <div className="plot" >
                <div className="name">
                    <p>{index} {city}</p>
                </div>
                <div className="path"></div>
            </div>
        </>
    );
}

export default Plot;
