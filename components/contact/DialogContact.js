import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import Grid from "@mui/system/Unstable_Grid";
import {maxWidth} from "../../styles/theme/aclippTheme";
import ContactForm from "./ContactForm";
import {Alert, Box, Button, Snackbar} from "@mui/material";
import * as React from "react";
import {useState} from "react";
import Typography from "@mui/material/Typography";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogContact({agency}) {
    const [openContact, setOpenContact] = useState(false)
    const [snack, setSnack] = useState({open: false})

    const handleClose = () => {
        setOpenContact(false);
    };

    return (
        <div>
            <Button
                onClick={() => setOpenContact(true)}
                type={'button'}
                variant={'contained'}
                color={'secondary'}
                sx={{height: '24px'}}
            >
                Contact
            </Button>

            <Snackbar
                open={snack.open}
                autoHideDuration={5000}
                onClose={() => {

                    setSnack(prev => ({...prev, open: false}))
                }}
            >
                <Alert
                    variant="filled"
                    elevation={6}
                    severity={snack?.status === 200 ? 'success' : 'alert'}
                    onClose={() => {

                        setSnack(prev => ({...prev, open: false}))
                    }}
                    sx={{width: '100%', borderRadius: '5px'}}>
                    {snack?.message}
                </Alert>
            </Snackbar>

            <Dialog
                fullScreen
                open={openContact}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{position: 'relative'}}>
                    <Toolbar
                        sx={{justifyContent:'space-between'}}
                    >
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <CloseIcon/>
                        </IconButton>

                        <Typography variant={'h4'}> Contact Form </Typography>
                    </Toolbar>
                </AppBar>

                <Grid
                    sx={{
                        m: 'auto',
                        maxWidth: maxWidth,
                        p: {xs: '10px', sm: '30px'}
                    }}>
                    <Typography variant={'h2'} textAlign={"center"}>
                        Contact
                        <Box sx={{display:{xs:'block',sm:'inline'}}}> </Box>
                        {agency}
                    </Typography>

                    <ContactForm {...{setOpenContact, setSnack}} />

                </Grid>
            </Dialog>

        </div>
    );
}
