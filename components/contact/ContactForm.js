import {useState} from "react";
import {Button, CircularProgress, Grid, TextField} from "@mui/material";
import {MuiTelInput} from "mui-tel-input";
import SendIcon from '@mui/icons-material/Send';
import axios from "axios";
import useContactValue, {validateForm} from "./useContactValue";


export default function ContactForm({setOpenContact, setSnack, setOpenInfo}) {
    //setOpenInfo(false);

    //const {name, company, email, message } = useContactValue();
    const {nameRef, emailRef, messageRef, companyRef} = useContactValue();
    const {phone, setPhone, error, setError} = useContactValue();

    const [performing, setPerforming] = useState(false)

//alert(error)
    const handleSubmit = (event) => {
        event.preventDefault()
        const name = nameRef?.current?.value
        const company = companyRef?.current?.value
        const email = emailRef?.current?.value
        const message = messageRef?.current?.value

        const newError = validateForm(name, company, email, phone)

        if (Object.values(newError).some(el => el.state)) {
            setError(prev => ({...newError}))
            return null;
        }

        setPerforming(true)

        const dataPost = {name, company, email, message, phone}

        axios.post('/api/postContactData', dataPost).then(
            (res) => {
                if (res.status === 200) {
                    console.log(JSON.stringify(res.data))
                    setSnack({
                        open: true,
                        status: res.status,
                        message: 'message was sent'
                    });
                    setOpenContact(false)

                } else {
                    setSnack({
                        open: true,
                        status: res.status,
                        message: 'error'
                    });

                    setPerforming(false)
                }
            }
        )
    }


    const handleBlur = prop => event => {
        // setError({...error, [prop]: validate(prop)})
    };


    return (
        <form autoComplete="on">
            <Grid
                key={error}
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                columnGap={2}

                sx={{
                    maxWidth: '600px',
                    m: '0 auto',
                    '& .MuiGrid-item': {
                        flexBasis: {xs: '100%', sm: 'calc(50% - 16px)'},
                    },
                    '& .MuiOutlinedInput-root': {
                        pl: 0,
                    }
                }}

            >

                <Grid item
                >
                    <TextField

                        variant={"outlined"}
                        id="name"
                        name="name"
                        autoComplete="family-name"
                        label={'Name'}

                        fullWidth

                        inputRef={nameRef}

                        error={error.name.state}
                        helperText={error.name.helper}
                    />
                </Grid>

                <Grid item

                >
                    <TextField
                        variant={"outlined"}
                        id="company"
                        name="company"
                        autoComplete="organization"
                        label={'Company'}
                        fullWidth

                        inputRef={companyRef}

                        error={error.company.state}
                        helperText={error.company.helper}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        variant={"outlined"}
                        id="email"
                        autoComplete="email"
                        label={'e-mail'}
                        fullWidth

                        inputRef={emailRef}

                        error={error.email.state}
                        helperText={error.email.helper}
                    />
                </Grid>

                <Grid item

                >
                    <MuiTelInput
                        variant={"outlined"}
                        defaultCountry="DE"
                        continents={['EU']}

                        value={phone}
                        onChange={(val) => setPhone(val)}
                        fullWidth

                        error={error.phone.state}
                        helperText={error.phone.helper}

                    />
                </Grid>

                <Grid item
                      sx={{flexBasis: {sm: 'calc(100% - 16px) !important'}}}
                >
                    <TextField
                        id="outlined-multiline-static"
                        fullWidth
                        label="I'm looking for..."
                        multiline
                        rows={4}
                        variant={"outlined"}
                        inputRef={messageRef}
                        sx={{
                            mb: '30px' +
                                ''
                        }}
                    />
                </Grid>


                <Grid item>
                    <Button
                        aria-label={'send request'}
                        variant="contained"
                        color="secondary"
                        fullWidth

                        startIcon={
                            performing ? <CircularProgress size={20}/> : <SendIcon size={20}/>
                        }
                        onClick={handleSubmit}
                        type='submit'
                    >
                        Send request
                    </Button>
                </Grid>

            </Grid>
        </form>

    )
}

