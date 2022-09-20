import {useRouter} from "next/router";

import {AppBar} from '@mui/material'
import NavBar from './NavBar'

import {routes} from "../../constants/routes";

const AppHeader = () => {
    const router = useRouter();

    if (router.pathname === routes.QUIZ.route) return null;

    return (
        <AppBar
            elevation={0}
            position={'absolute'}
            sx={{
                top: 0,
                minHeight: 60
            }}
        >
            <NavBar/>
        </AppBar>
    )
}

export default AppHeader
