import {Grid, Paper} from "@mui/material";
import {agency} from "../../constants/dummyData";
import db from "../../firebaseAdmin";
import Head from "next/head"

export default function AllAgencies(props) {

    return (
        <>
        <Head>
            <title>Best PR agencies in Germany</title>
        </Head>
        <Grid
            container
            direction={"rows"}
        >
            {props.agency.map(el =>
                <Grid
                    key={agency.path}
                    container
                    direction={"column"}
                    gap={10}
                >
                    <Grid item>
                        <Paper elevation={4}>
                            <pre>
                            {JSON.stringify(el, null, 2)}
                            </pre>
                        </Paper>
                    </Grid>
                </Grid>
            )}
        </Grid>
        </>
    )
}


export async function getStaticProps() {
    const data = await db.collection('agency').get();
    const agency = data.docs.map(doc => doc.data());

    return {
        props: {
            agency
        },
        //revalidate: 60 // revalidate if there are requests
    };
}