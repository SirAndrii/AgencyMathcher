import {Grid, Paper} from "@mui/material";
import axios from "axios";
import {getFilteredData} from "../api/filterAgency";

export default function AgencyMatch(props) {

    return (
        <Grid
            container
            direction={"rows"}
        >
            {props.agencyMatch.map(el =>
                <Grid
                    container
                    direction={"column"}>
                    key={el.id}
                    <Grid item>
                        <Paper>
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


export async function getServerSideProps(context) {

    const {query, params, req, res} = context;

//    const filter = JSON.parse(query.filter);
//console.log({1: filter})
    // const {data} = await axios.post(
    //     '/api/filterAgency',
    //     query.filter,// query is JSON
    //     {
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     })

    const data = await getFilteredData(query.filter)


    return {
        props: {
            agencyMatch: data
        },
    };

}