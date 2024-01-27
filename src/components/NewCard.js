import React, { useState } from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import { Link } from 'react-router-dom';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import { IoMdHeart } from 'react-icons/io';
import IconButton from '@mui/joy/IconButton';

const RentalCard = ({item}) => {
  const [isFilled, setIsFilled] = useState(false);
  function format(num){
    return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }
  

  return (
    <Link to="/details" style={{textDecoration: 'none'}}>
    <Card
      orientation="horizontal"
      sx={{
        bgcolor: 'neutral.softBg',
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        '&:hover': {
          boxShadow: 'lg',
          borderColor: 'var(--joy-palette-neutral-outlinedDisabledBorder)',
        },
        width:'94%',
        margin:'5px 2px'
      }}
    >
      <CardOverflow
        sx={{
          mr: { xs: 'var(--CardOverflow-offset)', sm: 0 },
          mb: { xs: 0, sm: 'var(--CardOverflow-offset)' },
          '--AspectRatio-radius': {
            xs: 'calc(var(--CardOverflow-radius) - var(--variant-borderWidth, 0px)) calc(var(--CardOverflow-radius) - var(--variant-borderWidth, 0px)) 0 0',
            sm: 'calc(var(--CardOverflow-radius) - var(--variant-borderWidth, 0px)) 0 0 calc(var(--CardOverflow-radius) - var(--variant-borderWidth, 0px))',
          },
        }}
      >
        <AspectRatio
          ratio="1"
          flex
          sx={{
            minWidth: { sm: 150, md: 190 },
            '--AspectRatio-maxHeight': { xs: '190px', sm: '9999px' },
          }}
        >
          <img  src={"https://rest-production-e2d3.up.railway.app/images/" + item.detailAnnonce.images[0]} alt="Live from space album cover" />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Stack
          spacing={1}
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <div>
            <Typography level="title-md">
              
                {item.detailAnnonce.titre_voiture}
            </Typography>
            <Typography level="body-sm">{item.detailAnnonce.categorie}</Typography>
          </div>
          <IconButton
            variant="plain"
            size="sm"
            color={isFilled ? 'danger' : 'neutral'}
            onClick={() => setIsFilled((prev) => !prev)}
            sx={{
              display: { xs: 'none', sm: 'flex' },
              borderRadius: '50%',
            }}
          >
            <IoMdHeart size={30} />
          </IconButton>
        </Stack>
        
        <Stack
          spacing="0.25rem 1rem"
          direction="row"
          useFlexGap
          flexWrap="wrap"
          sx={{ my: 0.25 }}
        >
          <Typography level="body-xs">Collingwood VIC</Typography>
          <Typography level="body-xs">1 bed</Typography>
          <Typography level="body-xs">Wi-Fi</Typography>
        </Stack>
        <Stack direction="row" sx={{ mt: 'auto' }}>
          <Typography level="title-lg" sx={{ flexGrow: 1, textAlign: 'right' }}>
         <Typography level="body-md">{format(item.voiture.prix)} MGA</Typography>
          </Typography>
        </Stack>
      </CardContent>
    </Card>
      </Link>
  );
};

export default RentalCard;
