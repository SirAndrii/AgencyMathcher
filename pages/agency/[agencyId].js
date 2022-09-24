import Typography from "@mui/material/Typography";
import {agency} from '../../constants/dummyData'
import {Paper} from "@mui/material";
import Head from 'next/head'

export default function AgencyInfo({agencyData}) {

    return (
        <>
            <Head>
                <title>{agencyData.name} ({agencyData.location})</title>
            </Head>

            <Paper>
                <Typography variant={'h1'}>This is agency: {agencyData.name} </Typography>
                <Typography subtitle={2}>
                    {JSON.stringify(agencyData, null, 2)}
                </Typography>
            </Paper>
        </>
    )
}

//fetch data for prerender (Static Generation) or SSR.

//it will look firstly for this function then for component
export async function getStaticProps(context) {
    const agencyUrl = context.params.agencyId

    //req, res
    //here we can fetch data from firebase (API)

    const agencyData = agency.find(item => item.path === agencyUrl)

    //we need to return object with props
    return {
        props: {
            agencyData
        },
        //revalidate: 60 // revalidate if there are requests
    };
}

export async function getStaticPaths() {
    const urlArr = agency.map(item => item.path)
        .map(path => (
            {
                params: {
                    agencyId: path
                }
            }))

    return {
        paths: urlArr,
        fallback: false
    }
}

/* dynamically for every incoming reques
export async function getServerSideProps() {
    return {
    props: some data
}

 */