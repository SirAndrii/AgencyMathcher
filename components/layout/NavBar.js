import {useState} from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'

import {Close, Menu} from '@mui/icons-material';

import {Grid} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";

import {routes} from '../../constants/routes'
import CustomLink from "../CustomLink";
import LogoIcon from "../icon/LogoIcon";
import {palette} from "../../styles/theme/aclippTheme";


const Navbar = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [navItems, setNavItems] = useState(Object.values(routes.guestNavBar))

    //in firebase we need to store role, after auth we check role and if is agency - change nav
    /*
        useEffect(() => {
            if (userRole === 'agency') setNavItems(Object.values(routes.agencyNavBar))
        }, [userRole])
    */

    const navList = navItems.map((item) =>
        <ListItem key={item.label} sx={{width:'auto'}}>
            <CustomLink
                type={'link'}
                href={item.route}
                scroll={false}
                sx={{
                    color: '#42425d',
                    fontSize: '16px',
                    lineHeight: '30px',
                    textDecoration: 'none',
                    '&:hover': {color: '#e61f5c'}
                }}
            >
                {item.label} {/*todo should be translate*/}
            </CustomLink>
        </ListItem>
    );


    return (
        <Grid
            container
            justifyContent={'space-between'}
            alignItems={'center'}
            alignSelf={'center'}
            sx={{
                padding: '0 20px',
                maxWidth: 1200,
                minHeight: 60,
                margin: {xs: '0', xl: 'auto'},
            }}
        >
            <CustomLink href="/" type="link">
                <LogoIcon height='30px' color={palette.primary.main}/>
            </CustomLink>

            <List sx={{
                display: {xs: 'none', md: 'flex'},
                alignItems: 'center',
                '& .MuiListItem-root': {
                    fontSize: '20px'
                }
            }}>
                {navList}
            </List>

            <CustomLink
                href="#"
                type="button"
                variant="outlined"
                color={'secondary'}
                sx={{
                    display: {xs: 'none', md: 'block'},
                    height: '30px',
                    lineHeight:'18px'
                }}>
                For Agency
            </CustomLink>

            <IconButton onClick={() => setIsSidebarOpen(prev => !prev)}
                        sx={{
                            display: {md: 'none'},
                        }}
            >
                {isSidebarOpen ? <Close color='primary'/> : <Menu color='primary'/>}
            </IconButton>

            <Drawer anchor='right' open={isSidebarOpen}
                    sx={{
                        zIndex:1000,
                        mt: {xs: '60px', md: '60px'},
                        '& .MuiBackdrop-root, & .MuiModal-root, & .MuiPaper-root': {mt: {xs: '60px', md: '60px'}},
                        '& .MuiPaper-root': {
                            width: '100vw'
                        },
                    }}>
                <List sx={{
                    '& .MuiListItem-root': {
                        justifyContent: 'center',
                        padding: '20px 10px',
                        fontSize: '20px'
                    }
                }}
                      onClick={() => setIsSidebarOpen(prev => !prev)}
                >
                    {navList}
                </List>
            </Drawer>


        </Grid>
    )
}

export default Navbar
