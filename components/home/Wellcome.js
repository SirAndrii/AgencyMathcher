import { Typography, Box } from '@mui/material'
import CustomLink from "../CustomLink";

import {routes} from "../../constants/routes";


const Welcome = () => {
    const {guestNavBar} = routes;

    return (
        <Box id={guestNavBar.callToAction.label}
            sx={{
                mt: {sx:'40px',md:'50px'},
                minHeight: '400px',
                backgroundImage: 'radial-gradient(ellipse at top, rgba(230, 31, 92, 0.1), transparent 80%)'
            }}>
            <Box

            />
            <Typography >
               BLALBALLBLALB
            </Typography>

            <CustomLink
                href={"/"}
                type={"button"}
                variant='contained'
            >
               HEEEEE
            </CustomLink>
        </Box>
    )
}

export default Welcome
