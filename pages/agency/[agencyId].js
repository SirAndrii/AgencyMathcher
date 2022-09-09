import Typography from "@mui/material/Typography";
import {useRouter} from 'next/router'
import {useEffect} from "react";
import {agency} from '../../constants/dummyData'

export default function AgencyInfo () {
    const router = useRouter();

    const {agencyId} = router.query;
    /*
    //we DON't need it with StaticProps
useEffect(()=>{
    //todo find agencyId on cached server if not - show 404 error
    //look for id in DataBase with fetch or firebase connection


},[])
*/

    return (

        <Typography variant={'h1'}>This is agency: {agencyId} </Typography>

    )
}

//fetch data for prerender (Static Generation) or SSR.

//it will look firstly for this function then for component
export async function getStaticProps(context){
    console.log({context})
    //req, res
    //here we can fetch data from firebase (API)

    //we need to return object with props
    return {
        props:{
            //
        },
        //revalidate: 60 // revalidate if there are requests
    };
}

/* dynamically for every incoming reques
export async function getServerSideProps() {
    return {
    props: some data
}

 */