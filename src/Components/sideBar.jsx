import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import InsightsIcon from '@mui/icons-material/Insights';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import "./Style/sideBar.scss"

function SideBar(){
    return(
        <div className="sideBar">
            <div className="accesses">
                <div className="icons">
                    <a href="#">
                    <SearchIcon  sx={{fontSize: 40}}/>
                    <p>Search</p>
                    </a>
                </div>
                <div className="icons">
                    <RadioButtonCheckedIcon  sx={{fontSize: 40}}/>
                    <p>Record</p>
                </div>
                <div className="icons">
                    <PersonIcon  sx={{fontSize: 40}}/>
                    <p>Users</p>
                </div>
                <div className="icons">
                    <LocalOfferIcon  sx={{fontSize: 40}}/>
                    <p>Tags</p>
                </div>
                <div className="icons">
                    <InsightsIcon  sx={{fontSize: 40}}/>
                    <p>Statistics</p>
                </div>
                <div className="icons">
                    <SettingsIcon  sx={{fontSize: 40}}/>
                    <p>Settings</p>
                </div>
            </div>
            <div className="icons">
                <HelpIcon  sx={{fontSize: 40}}/>
                <p>Help</p>
            </div>
        </div>
    )

}

export default SideBar;