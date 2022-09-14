import {Grid, Paper} from "@mui/material";
import {agency} from "../../constants/dummyData";
import db from "../../firebaseAdmin"

export default function AllAgencies(props) {

    return (
        <Grid
            container
            direction={"rows"}
        >
            {props.agency.map(el =>
                <Grid
                    container
                    direction={"column"}
                    gap={10}
                >
                    <Grid item >
                        <Paper elevation={4}>
                            <pre>
                            {JSON.stringify(el, null, 2)}
                            </pre>
                        </Paper>
                    </Grid>
                </Grid>
            )}
        </Grid>
    )
}


export async function getStaticProps() {


    const observer = await db.collection('agency').onSnapshot(docSnapshot => {
        console.log(`Received doc snapshot: ${docSnapshot}`);
        docSnapshot.docChanges()
    }, err => {
        console.log(`Encountered error: ${err}`);
    });

    return {
        props: {
            agency
        },
        //revalidate: 60 // revalidate if there are requests
    };
}