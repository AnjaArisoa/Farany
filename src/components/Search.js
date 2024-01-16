import * as React from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/joy/Button';
import { Container } from '@mui/material';
import { GoChevronRight } from "react-icons/go";
import  "../assets/style.css";

function Search(){
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
    return(
        <Container className='container'>
        <Button
          endDecorator={<GoChevronRight />}
          className='button-favorite'
        >
          Favorites
        </Button>
        <div className="container-divider">
        
        <Typography variant="subtitle2" gutterBottom>MARQUE & MODELE</Typography>
        
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <Typography variant="caption" display="flex" gutterBottom>Marque</Typography>
                <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
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
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <Typography variant="caption" display="flex" gutterBottom>Modele</Typography>
                <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
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
        <div className="container-divider">
        <Typography variant="subtitle2" gutterBottom>PRIX</Typography>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <Typography variant="caption" display="flex" gutterBottom>de</Typography>
                <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
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
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <Typography variant="caption" display="flex" gutterBottom>à</Typography>
                <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
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
        <div className="container-divider">
        <Typography variant="subtitle2" gutterBottom>DATE</Typography>
            
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <Typography variant="caption" display="flex" gutterBottom>à partir de</Typography>
                <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
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
            
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
           
            <Typography variant="caption" display="flex" gutterBottom>jusqu'à</Typography>
                <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
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

        <div className="container-divider">
        <Typography variant="subtitle2" gutterBottom>CATEGORIE</Typography>
           
            <FormControl sx={{ m: 2, width: 250, mt: 0 }} size='small'>
           
                <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
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
        <div className="container-divider">
        <Typography variant="subtitle2" gutterBottom>CARBURANT</Typography>
           
            <FormControl sx={{ m: 2, width: 250, mt: 0 }} size='small'>
           
                <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
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
       
        </Container>
    );
}
export default Search
