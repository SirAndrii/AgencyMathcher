import {Grid, Typography} from '@mui/material'
import CustomLink from "../CustomLink";

export default function Wellcome () {

    return (
        <Grid container
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"space-evenly"}

              sx={{
                  pt: '70px',
                  //mt: {sx: '40px', md: '50px'},
                  minHeight: '100vh',
                  //backgroundImage: 'radial-gradient(ellipse at top, rgba(230, 31, 92, 0.1), transparent 80%)'
              }}>
            <Grid item>
                <Typography variant={'hero'} component={'h1'}
                            color={'primary'}
                          >
                    Find your best agency <br/> that will rocks the market
                </Typography>

                <Typography variant={'subtitle2'} paragraph>
                    Aclipp is an innovative company dedicated to digitizing the work of public relations agencies.
                    Try our new product that will help you to find the most appropriate public relations agency in your case.
                </Typography>
            </Grid>
            <Grid item>
                <CustomLink
                    href={"/"}
                    type={"button"}
                    variant={'contained'}
                    color={'secondary'}
                >
                    Start Search
                </CustomLink>
            </Grid>
        </Grid>
    )
};
