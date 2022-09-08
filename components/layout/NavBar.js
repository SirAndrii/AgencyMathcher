import Link from 'next/link'
import {useRouter} from "next/router";
import {useState} from 'react'
//import { useTranslation } from 'react-i18next'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'



import {Close, Menu} from '@mui/icons-material';

import {Grid, Tooltip} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";

import {routes} from '../../constants/routes'



const Navbar = () => {
    const router = useRouter();
    if (router.pathname === routes.QUIZ.route) return null;


    //const { t } = useTranslation()
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [navItems, setNavItems] = useState(Object.values(routes.guestNavBar))

    //in firebase we need to store role, after auth we check role and if is agency - change nav
    /*
        useEffect(() => {
            if (userRole === 'agency') setNavItems(Object.values(routes.agencyNavBar))
        }, [userRole])
    */
    const navList = navItems.map((item) =>
        <ListItem>
            <Link key={item.label} href={item.route} scroll={false}>
                <a>{item.label} {/*todo should be translate*/}</a>
            </Link>
        </ListItem>
    );


    return (
        <Grid
            container
            justifyContent={'space-between'}

            sx={{
                padding: '0px',
                margin: {xs: '0', xl: 'auto'},
                maxWidth: 'xl',
                width: {xl: '100%'}
            }}>
            <Link href={'/'}>
                <a>
                    <img src={"https://innoloft.com/en/institutions/single/315321/aclippGmbH76653"} height={"40px"}/>
                </a>
            </Link>

            <List sx={{
                display: {xs: 'none', md: 'flex'},
                alignItems: 'center'
            }}>
                {navList}
            </List>


                <IconButton onClick={ () => setIsSidebarOpen(true) }
                            sx={ {
                                display: { md: 'none' },
                                backgroundColor:'red'}}
                >
                    <Menu color='primary' />
                </IconButton>

            <Drawer anchor='right' onClose={() => setIsSidebarOpen(false)} open={isSidebarOpen}>
                <IconButton onClick={() => setIsSidebarOpen(false)} sx={{
                    position: 'absolute',
                    right: '14px',
                    top: '14px',
                    backgroundColor:'red'
                }}>
                    <Close color='primary'/>
                </IconButton>

                <List sx={{
                    mt: '54px',
                    p: 0,
                    width: '311px'
                }}>
                    {navList}
                </List>
            </Drawer>


        </Grid>
    )
}

export default Navbar
