import React from 'react';
import Plots from './Plots';

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
            </div>
        </div >
    );
}

export default RouteTracker;
