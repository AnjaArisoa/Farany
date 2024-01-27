import React, { useState } from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Drawer from '@mui/joy/Drawer';
import DialogTitle from '@mui/joy/DialogTitle';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import ModalClose from '@mui/joy/ModalClose';
import Stack from '@mui/joy/Stack';
import Slider, { sliderClasses } from '@mui/joy/Slider';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/joy/Checkbox';
import { FiFilter,FiSearch } from "react-icons/fi";



function valueText(value) {
  return `${value.toLocaleString('en-US')} MGA`;
}

export default function Filters() {
  const [open, setOpen] = useState(false);

  return (
    <Stack
      useFlexGap
      direction="row"
      spacing={{ xs: 0, sm: 2 }}
      justifyContent={{ xs: 'space-between' }}
      flexWrap="wrap"
      sx={{ minWidth: 0 }}
      >
      <Stack direction="row" alignItems="center" gap={2} sx={{
        padding: '8px'
      }}>
        <Button
          variant="outlined"
          color="neutral"
          onClick={() => setOpen(true)}
          sx={{width:"120px"}}
          >
          <FiFilter size={15} style={{margin: '0 10px'}}/>
          Filtrer
        </Button>
        <Input placeholder='Rechercher ici ...'/>
        <Button><FiSearch size={20}/></Button>
      </Stack>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <Stack useFlexGap spacing={3} sx={{ p: 2 }}>
          <DialogTitle>Recherche</DialogTitle>
          <ModalClose />
        
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: '1fr auto 1fr',
              gridTemplateRows: 'auto auto',
              gap: 1,
            }}
          >
            <FormLabel htmlFor="filters-start-date">Marque </FormLabel>
            <div />
            <FormLabel htmlFor="filters-end-date">Modele</FormLabel>

            <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value="1"
                    label="Age"
                    sx={{height:'35px'}}
                   
                >
                    <MenuItem value="">
                    <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            <Box sx={{ alignSelf: 'center' }}>-</Box>
            <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value="1"
                    label="Age"
                    sx={{height:'35px'}}
                   
                >
                    <MenuItem value="">
                    <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: '1fr auto 1fr',
              gridTemplateRows: 'auto auto',
              gap: 1,
            }}
          >
            <FormLabel htmlFor="filters-start-date">Debut date </FormLabel>
            <div />
            <FormLabel htmlFor="filters-end-date">Fin date</FormLabel>

            <Input
              id="filters-start-date"
              type="date"
              placeholder="Jan 6 - Jan 13"
              aria-label="Date"
            />
            <Box sx={{ alignSelf: 'center' }}>-</Box>
            <Input
              id="filters-end-date"
              type="date"
              placeholder="Jan 6 - Jan 13"
              aria-label="Date"
            />
          </Box>



          <FormControl>
            <FormLabel>Tranche de prix</FormLabel>
            <Slider
              defaultValue={[2000, 4900]}
              step={100}
              min={0}
              max={10000}
              getAriaValueText={valueText}
              valueLabelDisplay="auto"
              valueLabelFormat={valueText}
              marks={[
                { value: 0, label: '$0' },
                { value: 5000, label: '$5,000' },
                { value: 10000, label: '$10,000' },
              ]}
              sx={{
                [`& .${sliderClasses.markLabel}[data-index="0"]`]: {
                  transform: 'none',
                },
                [`& .${sliderClasses.markLabel}[data-index="2"]`]: {
                  transform: 'translateX(-100%)',
                },
              }}
            />
          </FormControl>
              
          <Box
          >
            <FormLabel htmlFor="filters-start-date">Categorie </FormLabel>
            <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value="1"
                    label="Age"
                    sx={{height:'35px',width:'200px',marginTop:'10px'}}
                >
                    <MenuItem value="">
                    <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
          </Box>

          <Box

          >
            <FormLabel htmlFor="filters-start-date">Carburant </FormLabel>
            <Checkbox color="primary"  label="optioneeee" sx={{marginTop:'10px'}}/>
          </Box>

        </Stack>
      </Drawer>
    </Stack>
  );
}
