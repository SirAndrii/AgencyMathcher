import {Box, Grid, Typography} from "@mui/material";
import CustomLink from "../CustomLink";

export default function WhoWeAre() {

    return (

        <Grid
            container id="whoWeAre"
            alignContent={"center"}
            flexDirection={"row"}
            justifyContent={"center"}
            alignItems={'center'}
            sx={{
                m: "40px 0",
                width: '100%',
                padding: '40px 0px',
                gap: '20px',
                background: 'linear-gradient(90deg, rgba(67, 66, 93, 1) 0%, rgba(0, 22, 50, 1) 100%)',
            }}>

            <Grid item
                  sx={{

                      p: {xs: '10px', md: "20px"},
                      maxWidth: {xs: '100%', md: '590px'},
                  }}
            >
                <Box sx={{textAlign: 'left', mb: '50px'}}>
                    <Typography variant="h2" color={'white'}>
                        Who we Are
                    </Typography>

                    <Typography variant={"subtitle1"} paragraph color={'white'}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Accusamus aliquam at blanditiis
                        doloribus est ex expedita facere fugit laborum molestias non perspiciatis quos,
                        reprehenderit sint ullam veritatis vitae voluptas voluptate.
                    </Typography>
                </Box>

                <CustomLink
                    type={'button'}
                    href={'https://www.aclipp.com/team'}
                    variant={'contained'}
                    color={'secondary'}
                >
                    About aclipp
                </CustomLink>

            </Grid>

            <Grid item
                  sx={{
                      position: 'relative',
                      width: {xs: '100%', md: '800px'},
                      pt: {xs: '56.25%', md: '450px'},
                  }}
            >

                <iframe style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    borderRadius: '10px'
                }} src="https://www.youtube.com/embed/qq2E4z1m_uQ"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>

            </Grid>

        </Grid>

    )
}
