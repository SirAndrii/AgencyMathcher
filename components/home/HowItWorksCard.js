import {Box, Grid, Stack, Typography} from '@mui/material'
import Transition from 'react-transition-group/Transition'
import KeyboardDoubleArrowDownTwoToneIcon from '@mui/icons-material/KeyboardDoubleArrowDownTwoTone';
import CustomLink from "../CustomLink";
import {maxWidth} from "../../styles/theme/aclippTheme";
import {transition} from "../../styles/transition";
import DotsIcon from "../icon/DotsIcon";


const CardsWithButton = ({array, isAgency}) => {

    const card = (array.map((item, index) => {

            const isOdd = index % 2 === 0;
            const boxSide = isOdd ? 'right' : 'left'

            return (

                <Transition in={isAgency} key={index} timeout={1000}>
                    {(state) => (
                        <Grid
                            id={'howItWorks'}
                            container
                            sx={[
                                 state === 'exiting' && transition[boxSide].slideIn,
                                 state === 'entering' && transition[boxSide].slideIn,
                                {
                                    //...transition[boxSide][state],
                                    //transition: `all 1000ms ease-in-out`,
                                    maxWidth: {
                                        xs: '100%',
                                        md: maxWidth,
                                    },
                                    flexDirection: {
                                        xs: 'row',
                                        md: isOdd ? 'row' : 'row-reverse',
                                    }

                                }]}
                        >
                            <Grid item
                                  flexGrow={10}
                                  flexBasis={0}
                                  sx={{
                                      display: {
                                          xs: 'none',
                                          md: 'block'
                                      }
                                  }}
                            > </Grid>

                            <Grid container
                                  flexGrow={1}
                                  flexBasis={0}

                                  justifyContent='center'
                                  alignItems='center'
                                  flexDirection='column'

                                  sx={{
                                      m: {xs: '0px 20px', md: '5px 60px',},
                                  }}
                            >
                                <Stack
                                    alignItems={"center"}
                                >
                                    <Box
                                        sx={{
                                            borderRadius: '50%',
                                            background: '#e61f5c59',
                                            p: '10px'
                                        }}>
                                        <Box
                                            sx={(theme) => ({
                                                p: '6px',
                                                borderRadius: '10px',
                                                border: '1px solid ' + theme.palette.secondary.main,
                                                background: 'lightgoldenrodyellow',
                                                '& .MuiSvgIcon-root': {
                                                    color: theme.palette.secondary.main,
                                                    fontSize: '30px',
                                                }
                                            })}>
                                            {item.icon}
                                        </Box>
                                    </Box>


                                    <Stack
                                        alignItems={"center"}
                                        className={'arrow'}
                                    >
                                        <DotsIcon />
                                        {/*<KeyboardDoubleArrowDownTwoToneIcon*/}
                                        {/*    sx={{*/}
                                        {/*        pt: '10px',*/}
                                        {/*    }}*/}
                                        {/*/>*/}
                                        {/*<KeyboardDoubleArrowDownTwoToneIcon*/}
                                        {/*    sx={{*/}
                                        {/*        pb: '10px',*/}
                                        {/*    }}*/}
                                        {/*/>*/}
                                    </Stack>

                                </Stack>
                            </Grid>

                            <Grid item
                                  flexGrow={10}
                                  flexBasis={0}
                            >
                                <Stack>

                                    <Typography variant={'h5'}
                                                sx={{
                                                    mb: '8px',
                                                    textAlign: {
                                                        xs: 'start',
                                                        md: isOdd ? 'start' : 'end',
                                                    },

                                                }}>
                                        {item.title}
                                    </Typography>
                                    <Typography variant={'subtitle2'}
                                                sx={{
                                                    textAlign: {
                                                        xs: 'start',
                                                        md: isOdd ? 'start' : 'end',
                                                    },
                                                }}>
                                        {item.description}
                                    </Typography>
                                </Stack>
                            </Grid>
                        </Grid>
                    )}
                </Transition>
            )
        })
    );

    return (
        <Grid container
              direction='column'
              alignItems='center'
              sx={{
                  '&> .MuiBox-root:last .arrow': {
                      display: {xs: 'none', md: 'block'}
                  }
              }}
        >
            {card}

            <CustomLink
                href={isAgency ? '/#' : '/quiz'}
                type='button'
                variant='contained'
                color={'secondary'}
                sx={{
                    mt: '24px',
                    minWidth: '210px',
                }}
            >
                {isAgency ? 'Add Agency' : 'Search'}
            </CustomLink>

        </Grid>
    )
}

export default CardsWithButton;
