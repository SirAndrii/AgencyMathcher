import Head from "next/head";
import {useState} from "react";
import {Stack, Typography} from "@mui/material";

import {getFilteredData} from "../api/filterAgency";
import DialogInfo from "../../components/matched/DialogInfo";
import AgencyCard from "../../components/matched/AgencyCard";


export default function AgencyMatch(props) {
    const [selectedAgency, setSelectedAgency] = useState(null);
    const [openInfo, setOpenInfo] = useState(false);

    return (
        <>
            <Head>
                <title>Matched by algorithm agencies</title>
            </Head>

            <DialogInfo {...{openInfo, setOpenInfo, selectedAgency}}/>

            <Stack sx={{
                pt: '60px',
            }}>
                <Typography variant={'h2'}>Best agencies by your criteria</Typography>

                {props.agencyMatch.map(agency =>
                    <AgencyCard {...{setSelectedAgency, setOpenInfo, agency}} />
                )}
            </Stack>
        </>
    )
}


export async function getServerSideProps(context) {
    const {query, params, req, res} = context;
    const data = await getFilteredData(query.filter)

    return {
        props: {
            agencyMatch: data
        },
    };

}