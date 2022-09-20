import {Grid, Switch, Typography} from '@mui/material'
import { keyframes } from '@mui/system'
import {useEffect, useState} from 'react'

import Stack from '@mui/material/Stack'
import HowItWorksCard from "./HowItWorksCard";
import {agencyCardArray, userCardArray} from '../../constants/cardsWithIcons';
import {AclippSwitch} from "../utils/AclippSwitch";

export default function HowItWorks() {

    const [isAgency, setIsAgency] = useState(false)
    const [cardWithButton, setCardWithButton] = useState();

    useEffect(() => {
        setCardWithButton(isAgency ?
            <HowItWorksCard
                array={agencyCardArray} isAgency={isAgency}
            />
            :
            <HowItWorksCard
                array={userCardArray}
                isAgency={isAgency}

            />
        )
    }, [isAgency])


    return (
        <Grid container
              id={'howItWorks'}
              alignItems='center'
              justifyContent='center'
              flexDirection='column'
        >
            <Typography variant={'h2'}
                        sx={{
                            mb: '32px',
                            mt: '10px'
                        }}
            >
                How It works
            </Typography>

            <Stack direction="row" alignItems='center'
                   sx={{mb: '32px', gap: '20px'}}
            >

                <Typography color={isAgency ? 'primary.light' : 'primary.main'} variant={'h6'}>
                    Client
                </Typography>

                <Switch checked={isAgency} onChange={() => setIsAgency(prev => !prev)}/>

                <Typography color={isAgency ? 'primary.main' : 'primary.light'} variant={'h6'}>
                    Agency
                </Typography>

            </Stack>


            {cardWithButton}

        </Grid>
    )
}


