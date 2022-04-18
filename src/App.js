import React from "react";
import NavBar from "./Components/navBar";
import SideBar from "./Components/sideBar";
import SearchBar from "./Components/searchVideoBar";
import VideoSelect from "./Components/videoSelect";
import "./index.scss"

function App() {
  return (
    <div>
      <NavBar userName="Agustín Callejas" userType="Agent"/>
      <div className="centerScreen">
        <SideBar/>
        <div className="centerPart">
        <h2>Search</h2>
        <SearchBar/>
        <VideoSelect/>
        </div>
      </div>
    </div>
  );
}

export default App;
