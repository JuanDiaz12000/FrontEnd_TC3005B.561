import * as React from 'react';
import "./Style/videoSelect.scss"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SortIcon from '@mui/icons-material/Sort';
import VideoCard from './videoCard';

function VideoSelect(){

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };

    return(
        <div className="mainVideoSelect">
            <div className="Selector">
                <FormControl sx={{ m: 1, minWidth: '10vw', backgroundColor:'#fafafa'}}>
                    <InputLabel id="demo-simple-select-helper-label" style={{display: 'flex', flexDirection: 'row', alignItems: 'center',flexWrap: 'wrap'}}> <SortIcon style={{fontSize: '2vh', marginRight: '0.5vw'}}/>Search By</InputLabel>
                    <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className='videos'>
                <VideoCard agent="9807" name="Annya Verduzco" date="22-02-22"/>
                <VideoCard agent="1050" name="Daniel Yamamoto" date="22-02-22"/>
                <VideoCard agent="1105" name="Leonardo Morales" date="22-02-22"/>
                <VideoCard agent="1105" name="Leonardo Morales" date="22-02-22"/>
            </div>
        </div>
    )

}

export default VideoSelect;