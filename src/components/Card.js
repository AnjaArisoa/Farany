import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import test from '../assets/1.jpg';
import { IoMdHeartEmpty } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import {IoMdHeart } from 'react-icons/io';


export default function MediaControlCard() {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/details');
  };
  const [isFilled, setIsFilled] = useState(false);

  const handleClick = () => {
    setIsFilled((prevIsFilled) => !prevIsFilled);
  };

  return (
    <Card sx={{ display: 'flex', width: '90%', marginTop:'20px' }} >
      <CardMedia component="img"  image={test} alt="Live from space album cover"  onClick={handleCardClick} style={{ cursor: 'pointer' }}/>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto', maxHeight: '50px' }}>
          <Typography component="div" variant="h5" noWrap>
            Live From Space
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Mac Miller
          </Typography>
        </CardContent>
      </Box>

      <Box sx={{ display: 'flex-end',marginLeft:'400px',width:'100px' }}>
        <Box
        sx={{
          padding: '10px',
          marginRight: '50px',
          marginTop: '20px',
          height: '30px',
          cursor: 'pointer',
        }}
        onClick={handleClick}
      >
        {isFilled ? <IoMdHeart size='30px' color='red' /> : <IoMdHeartEmpty size='30px' />}
      </Box>
        <Typography variant="subtitle1" color="text.secondary" component="div" sx={{    marginRight: '50px', marginTop: '100px',height:'30px' }}>
            200$
        </Typography>
       
    </Box>
   
      
    </Card>
  );
}
