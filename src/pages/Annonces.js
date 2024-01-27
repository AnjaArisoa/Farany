
import Filter from '../components/Filter';
import RentalCard from '../components/NewCard';
import Grid from '@mui/joy/Grid';
import Stack from '@mui/joy/Stack';
import { annonces } from '../services';
import { useEffect, useState } from 'react';
function Annonces(){
  const [data, setData] = useState([]);

    useEffect(() => {
      annonces().then((resp) => {
        setData(resp.data)    
      }).catch((error) => {
        console.log(error.data);
      })
    }, []);

    return(
      <Stack style={{ paddingX: { xs: 2, md: 4 }, paddingTop: 2, minHeight: 0 }}>
      <Filter />

<Grid container spacing={1}>
  {data != null
    ? data.map((e) => (
        <Grid key={e.id} item xs={12} sm={6} md={6} lg={6}>
          <RentalCard item={e} />
        </Grid>
      ))
    : ""}
</Grid>




    </Stack>
    );
}
export default Annonces