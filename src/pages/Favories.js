import Card from '../components/Card';
import { Grid } from '@mui/material';
function Favories(){
    return(
        <Grid container spacing={2} >
            <Grid item xs={9}>
            <Card></Card>
            </Grid>
              
        </Grid>
          
        
    );
}
export default Favories