import Card from '../components/Card';
import { Grid } from '@mui/material';
import Search from '../components/Search';
function Annonces(){
    return(
    <Grid container spacing={2} >
    <Grid item xs={3}>
      <Search></Search>
    </Grid>
    <Grid item xs={9}>
      <Card></Card>
    </Grid>
  </Grid>
    );
  
}
export default Annonces