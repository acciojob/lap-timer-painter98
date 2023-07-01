
import React from "react";
import './../styles/App.css';
import Time from "./Time";

const App = () => {
  
  let initialTime = new Date();

  return (
    <div>
        {/* Do not remove the main div */}
        <Time initialTime={initialTime}/>
    </div>
  )
}

export default App
