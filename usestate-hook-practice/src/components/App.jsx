import React, { useState } from "react";

function App() {
    let time = new Date().toLocaleTimeString();
    console.log(time);
    const [currentTime, latestTime] = useState(time);
    function refresh() {
        latestTime(new Date().toLocaleTimeString());
    }

    setInterval(refresh, 1000);

    return (
        <div className="container">
            <h2>{time}</h2>
            <button onClick={refresh}>Get Time</button>
        </div>
    );
}

export default App;
