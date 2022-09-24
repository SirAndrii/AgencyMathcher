import {useRouter} from "next/router";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

import {Box, Grid, Stack} from '@mui/material'

import {routes} from "../../constants/routes";
import {maxWidth, palette} from "../../styles/theme/aclippTheme";
import LogoIcon from "../icon/LogoIcon";
import CustomLink from "../CustomLink";

const footerLinks = Object.values(routes.footerNavBar)

export default function Footer() {
    const router = useRouter();
    if (router.pathname === routes.QUIZ.route) return null;

    return (
        <Grid item
              sx={{
                  width: '100%',
                  m: '0 auto',
                  p: '10px',
                  backgroundColor: 'white',
              }}
        >
            <Stack
                justifyContent={"space-around"}
                alignItems={"center"}
                alignContent={"center"}
                sx={{
                    maxWidth: maxWidth,
                    minHeight: 60,
                    p: '0 20px',
                    flexDirection: {xs: 'column', sm: 'row'},
                    order: 1,
                    m: '0 auto',

                }}
            >
                <Box>
                    <LogoIcon height='40px' color={palette.primary.dark}/>
                </Box>

                <Stack
                    sx={{
                        justifyContent: "space-around",
                        flexDirection: {sm: 'column', md: 'row'},
                        order: {xs: 3, sm: 2},
                        flexWrap: 'wrap',
                        gap: {xs: '5px', md: '20px'}
                    }}
                >
                    {footerLinks.map(item =>
                        <CustomLink type={"link"} href={item.route}
                                    sx={{
                                        color: '#42425d',
                                        fontSize: '16px',
                                        lineHeight: '30px',
                                        textDecoration: 'none',
                                        '&:hover': {color: '#e61f5c'}
                                    }}
                        >{item.label}
                        </CustomLink>
                    )}
                </Stack>

                <Stack
                    direction={"row"}
                    sx={{order: {xs: 2, sm: 3}}}
                >
                    <CustomLink type={"link"} href={'https://www.linkedin.com/company/26265335/'}>
                        <LinkedInIcon sx={{fontSize: '40px'}}/>
                    </CustomLink>
                    <CustomLink type={"link"} href={'https://www.instagram.com/aclipp.reporting/'}>
                        <InstagramIcon sx={{fontSize: '40px'}}/>
                    </CustomLink>
                </Stack>
            </Stack>
        </Grid>
    )
}

