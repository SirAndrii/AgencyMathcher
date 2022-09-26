import {Grid} from "@mui/material";
import Welcome from "../components/home/Wellcome";
import WhoWeAre from "../components/home/WhoWeAre";
import HowItWorks from "../components/home/HowItWorks";
import CopyTextBlock from "../components/home/CopyTextBlock";
import Head from 'next/head'

export default function Home() {
    return (
        <Grid container
              direction={'column'}
              alignContent={'center'}
              alignItems={'center'}
        >
            <Head>
                <title>Best PR agency finder for your business!</title>
            </Head>

            <Welcome/>

            <HowItWorks/>

            <CopyTextBlock/>

            <WhoWeAre/>

        </Grid>
    );
}
