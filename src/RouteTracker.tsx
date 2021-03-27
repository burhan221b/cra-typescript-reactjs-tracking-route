import React from 'react';
import EndPlot from './EndPlot';
import Plot from './Plot';
import Plots from './Plots';
import StartPlot from './StartPlot';

const ROUTE = [
    { country: "US", state: "CA", city: "Sunnyvale" },
    { country: "US", state: "CA", city: "Sunnyvale" },
    { country: "US", state: "CA", city: "Sunnyvale" },
    { country: "US", state: "CA", city: "Sunnyvale" },
    { country: "US", state: "CA", city: "Sunnyvale" },
    { country: "US", state: "CA", city: "San Jose" },
    { country: "US", state: "CA", city: "Santa Clara" },
    { country: "US", state: "CA", city: "Sunnyvale" },
    { country: "US", state: "CA", city: "Santa Cruz" },
    { country: "US", state: "CA", city: "Santa Cruz" },
    { country: "US", state: "CA", city: "Santa Cruz" },
    { country: "US", state: "CA", city: "Santa Cruz" },
    { country: "US", state: "CA", city: "Santa Cruz" },
]

function RouteTracker() {
    return (
        <div className="container">
            <h1>Route Tracker</h1>
            <div className="track-container">
                <div className="plots"><Plots ROUTE={ROUTE} /></div>
                {/* <Plots ROUTE={ROUTE} /> */}
                {/* {ROUTE && ROUTE.map((location, index) => {
                    if (index === 0 && ROUTE.length - 1 === 0) return (
                        <><StartPlot key={index} index={index} location={location} />
                            <EndPlot key={index} index={index} location={location} />
                        </>
                    )
                    else if (index === 0) return (<><StartPlot key={index} index={index} location={location} /></>)
                    else if (ROUTE.length - 1 === index) return (<><EndPlot key={index} index={index} location={location} /></>)
                    else return (<Plot key={index} index={index} location={location} />)
                })} */}
            </div>
        </div >
    );
}

export default RouteTracker;
