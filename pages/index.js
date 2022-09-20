import {Grid} from "@mui/material";
import Welcome from "../components/home/Wellcome";
import WhoWeAre from "../components/home/WhoWeAre";
import HowItWorks from "../components/home/HowItWorks";
import CopyTextBlock from "../components/home/CopyTextBlock";

const style = {

    paper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 40,
        padding: 20,
        textAlign: 'center',
        backgroundColor: 'lightgrey',
        minHeight: '50vh',
        maxWidth: 1000
    }


}

export default function Home() {
    return (
        <Grid container
              direction={'column'}
              alignContent={'center'}
              alignItems={'center'}
        >


            <Welcome/>

            <HowItWorks/>

            <CopyTextBlock/>


            <WhoWeAre/>


        </Grid>

    );
}
