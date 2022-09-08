import Typography from "@mui/material/Typography";
import {useRouter} from 'next/router'

export default function AgencyInfo () {
    const router = useRouter();

    const {agencyId} = router.query;

    //todo find agencyId on cached server if not - show 404 error

    return (

        <Typography variant={'h1'}>This is agency: {agencyId} </Typography>

    )
}