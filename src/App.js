import React from "react";
import './App.css';
import Sidebar from "./Sidebar";
import Feed from "./Feed";
// import Widgets from "./Widgets"

function App() {
  return (
    // BEM
    <div className="App">

        <Sidebar/>


    {/*Feed*/}
        <Feed/>


    {/* Widget */}

    </div>
  );
}

export default App;
