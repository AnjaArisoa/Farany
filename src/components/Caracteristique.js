import { Typography  } from "@mui/joy";
import { Card  } from "@mui/joy";
import { CardContent } from "@mui/joy";
import { Grid } from "@mui/joy";
import '../assets/caracteristique.css';
import { BiCalendarWeek } from "react-icons/bi";
import { BiMaleFemale } from "react-icons/bi";
import { IoMdConstruct } from "react-icons/io";
import { MdElectricCar } from "react-icons/md";
import { GiCarKey } from "react-icons/gi";
import { TbCarTurbine } from "react-icons/tb";
function Caracteristique(){
    return(
        <div className="container">
            <Typography level="h3" >Details</Typography>
            <hr className="texte"></hr>
            <Grid container spacing={6} sx={{ flexGrow: 1 }}>
                <Grid xs  >
                    <Card variant="soft" className="card">
                    <center><BiCalendarWeek  size="30px"/></center>
                        <CardContent>
                            <Typography level="title-lg">Nombre d'anciens propriétaires</Typography>
                            <Typography>Description of the card.</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid xs >
                    <Card variant="soft" className="card">
                    <center><BiMaleFemale size="30px"/></center>
                        <CardContent>
                            <Typography level="title-lg">Première immatriculation</Typography>
                            <Typography>Description of the card.</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid xs >
                    <Card variant="soft" className="card">
                    <center><IoMdConstruct size="30px" /></center>
                        <CardContent>
                            <Typography level="title-lg">Kilométrage</Typography>
                            <Typography>Description of the card.</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid xs >
                    <Card variant="soft" className="card">
                    <center><MdElectricCar size="30px"  /></center>
                        <CardContent>
                            <Typography level="title-lg">Carburant</Typography>
                            <Typography>Description of the card.</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid xs >
                    <Card variant="soft" className="card">
                    <center><GiCarKey size="30px" /></center>
                   
                        <CardContent>
                            <Typography level="title-lg">Transmission</Typography>
                            <Typography>Description of the card.</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid xs >
                    <Card variant="soft" className="card">
                        <center><TbCarTurbine  size="30px" /></center>
                        <CardContent>
                            <Typography level="title-lg">Puissance</Typography>
                            <Typography>Description of the card.</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Typography level="h3" >Equipement</Typography>
            <hr className="texte"></hr>
           
        </div>
    );
}
export default Caracteristique