import React from 'react';

interface PlotsProps {
    ROUTE: any
}

interface PlotProps {
    location: { city: string, state: string, country: string },
    index: number
}

function Plots(props: PlotsProps) {
    const { ROUTE } = props;
    return ROUTE.map((location: any, index: number) => {
        if (index === 0 && ROUTE.length - 1 === 0) return (
            <><StartPlot key={`start-${index}`} index={index} location={location} />
                <EndPlot key={`end-${index}`} index={index} location={location} />
            </>
        )
        else if (index === 0) return (<><StartPlot key={index} index={index} location={location} /></>)
        else if (ROUTE.length - 1 === index) return (<><EndPlot key={index} index={index} location={location} /></>)
        else return (<Plot key={index} index={index} location={location} />)
    })

}

export default Plots;


function StartPlot(props: PlotProps) {
    const { location: { city, state, country }, index } = props;
    return (
        <>
            {/* Plot */}
            <div className="plot first-plot" >
                <div className="name">
                    <p className="place">{index} {city}</p>
                    <div className="arrow-down"></div>
                </div>
            </div>
            <div className="path path-start"></div>
        </>
    );
}

function EndPlot(props: PlotProps) {
    const { location: { city, state, country }, index } = props;
    return (
        <>
            {/* Plot */}
            <div className="plot last-plot">
                <div className="name">
                    <p className="place">{index} {city}</p>
                    <div className="arrow-down"></div>
                </div>
            </div>
            <div className="path path-end"></div>
        </>
    );
}


function Plot(props: PlotProps) {
    const { location: { city, state, country }, index } = props;
    return (
        <>
            {/* Plot */}
            <div className="plot" >
                <div className="name">
                    <p className="place">{index} {city}</p>
                    <div className="arrow-down"></div>
                </div>
            </div>
            <div className="path path-mid"></div>
        </>
    );
}

export { StartPlot, EndPlot, Plot };



// import React from 'react';

// interface PlotsProps {
//     ROUTE: any
// }

// interface PlotProps {
//     location: { city: string, state: string, country: string },
//     index: number
// }

// function Plots(props: PlotsProps) {
//     const { ROUTE } = props;
//     return ROUTE.map((location: any, index: number) => {
//         if (index === 0 && ROUTE.length - 1 === 0) return (
//             <><StartPlot key={`start-${index}`} index={index} location={location} />
//                 <EndPlot key={`end-${index}`} index={index} location={location} />
//             </>
//         )
//         else if (index === 0) return (<><StartPlot key={index} index={index} location={location} /></>)
//         else if (ROUTE.length - 1 === index) return (<><EndPlot key={index} index={index} location={location} /></>)
//         else return (<Plot key={index} index={index} location={location} />)
//     })

// }

// export default Plots;


// function StartPlot(props: PlotProps) {
//     const { location: { city, state, country }, index } = props;
//     return (
//         <>
//             {/* Plot */}
//             <div className="plot" >
//                 <div className="name">
//                     <p>{index} START {city}</p>
//                 </div>
//                 <div className="path path-start"></div>
//             </div>
//         </>
//     );
// }

// function EndPlot(props: PlotProps) {
//     const { location: { city, state, country }, index } = props;
//     return (
//         <>
//             {/* Plot */}
//             <div className="plot">
//                 <div className="name">
//                     <p>{index} END {city}</p>
//                 </div>
//                 <div className="path path-end"></div>
//             </div>
//         </>
//     );
// }


// function Plot(props: PlotProps) {
//     const { location: { city, state, country }, index } = props;
//     return (
//         <>
//             {/* Plot */}
//             <div className="plot" >
//                 <div className="name">
//                     {/* <p>{index} {city}</p> */}
//                 </div>
//                 <div className="path path-mid"></div>
//             </div>
//         </>
//     );
// }

// export { StartPlot, EndPlot, Plot };

