
import Filter from '../components/Filter';
import RentalCard from '../components/NewCard';
import Stack from '@mui/joy/Stack';
import { annonces } from '../services';
import { useEffect, useState } from 'react';
function Annonces(){
  const [data, setData] = useState([]);

    useEffect(() => {
      annonces().then((resp) => {
        console.log(resp.data);
        setData(resp.data)
    
      }).catch((error) => {
        console.log("kfdkjkfdjkfdjkfj");
        console.log(error.data);
      })
    }, []);

    return(
      <Stack style={{ paddingX: { xs: 2, md: 4 }, paddingTop: 2, minHeight: 0 }}>
      <Filter />
      <Stack style={{ overflow: 'auto', spacing: 2 }}>
      {
  data != null ? data.map((e) => {
    return(
      <RentalCard item={e}></RentalCard>
    )
  }) : ""
}
        
      </Stack>
    </Stack>
    );
}
export default Annonces