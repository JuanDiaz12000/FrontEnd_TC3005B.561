import "./Style/searchVideoBar.scss"
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import FormControl from '@mui/material/FormControl';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import Select from '@mui/material/Select';



function SearchBar() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="searchBar">
        <div className="filters">
            <FormControl sx={{ m: 1, minWidth: '10vw' }}>
            <InputLabel id="demo-simple-select-helper-label"style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>Search By</InputLabel>
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
            <FormControl sx={{ m: 1, minWidth: '10vw' }}>
            <InputLabel id="demo-simple-select-helper-label"style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>Value</InputLabel>
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
            <FormControl sx={{ m: 1, minWidth: '10vw'}}>
            <InputLabel id="demo-simple-select-helper-label" style={{display: 'flex', flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap'}}> <LocalOfferIcon style={{fontSize: '2vh', marginRight: '0.5vw'}}/> Tags </InputLabel>
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
        <div className="searchButton">
            <a href="">
                <SearchIcon style={{marginRight: '0.5vw', fontWeight: 'large'}}/> SEARCH
            </a>
        </div>
    </div>
  );
}

export default  SearchBar;