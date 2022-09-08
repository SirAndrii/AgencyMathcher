import Typography from "@mui/material/Typography";
import {useRouter} from 'next/router'
import {useEffect} from "react";
import {agency} from '../../constants/dummyData'

export default function AgencyInfo () {
    const router = useRouter();

    const {agencyId} = router.query;
useEffect(()=>{
    //todo find agencyId on cached server if not - show 404 error
    //look for id in DataBase with fetch or firebase connection


},[])


    return (

        <Typography variant={'h1'}>This is agency: {agencyId} </Typography>

    )
}