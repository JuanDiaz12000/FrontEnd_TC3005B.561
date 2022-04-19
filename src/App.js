import { ImportantDevices } from "@mui/icons-material";
import React from "react";
import NavBar from "./Components/navBar";
import SideBar from "./Components/sideBar";
import SearchBar from "./Components/searchVideoBar";
import VideoSelect from "./Components/videoSelect";
import RecordingScreenDialog from "./Components/recordingScreen";
import AmazonConnectWindow from "./Components/amazonConnectWindow";
import Login from "./Components/login";
import "./index.scss"

//import VideoSearchScreen from "./Components/VideoSearchScreen";
function App() {
  return (
    <div>
      <div>
        <Login/>
      </div>
      <NavBar userName="Juan Díaz" userType="Manager"/>
      <div className="centerScreen">
        <SideBar/>
        <div className='centerPart' style={{flexDirection:'row', justifyContent:'space-between', alignContent:'center'}}>
          <AmazonConnectWindow/>
          <RecordingScreenDialog/>
        </div>
      </div>
        <NavBar userName="Juan Díaz" userType="Manager"/>
        <div className="centerScreen">
          <SideBar/>
          <div className='centerPart'>
              <h2>Search</h2>
              <SearchBar/>
              <VideoSelect/>
          </div>
        </div>
      </div>
  );
}

export default App;
