import {useEffect, useRef, useState} from "react";
import {Button, CircularProgress, Grid, TextField} from "@mui/material";
import {MuiTelInput} from "mui-tel-input";
import SendIcon from '@mui/icons-material/Send';
import axios from "axios";

const initErrorState = {
    name: {
        state: false,
        helper: " "
    },
    company: {
        state: false,
        helper: " "
    },
    email: {
        state: false,
        helper: " "
    },
    phone: {
        state: false,
        helper: " "
    },
}


export default function ContactForm({setOpenContact, setSnack,setOpenInfo}) {
    //setOpenInfo(false);

    const {useRef} = require("react");

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const messageRef = useRef(null);
    const companyRef = useRef(null);

    const [phone, setPhone] = useState("");

    const [error, setError] = useState(initErrorState);


//alert(error)
    const handleSubmit = (event) => {
        event.preventDefault()

        const newError = validate(
            nameRef.current.value,
            companyRef.current.value,
            emailRef.current.value,
            phone)

        if (Object.values(newError).some(el => el.state)) {
            setError(prev=>({...newError}))
            return null;
        }

        const data = {
            name: nameRef?.current?.value,
            company: companyRef?.current?.value,
            email: emailRef?.current?.value,
            message: messageRef?.current?.value,
            phone
        }

        axios.post('/api/postContactData', data).then(
            (res) => {
                if (res.status === 200) {
                    alert (JSON.stringify(res.data))
                    setSnack({
                        open: true,
                        status: res.status,
                        message: 'message was sent'
                    });
                    setOpenContact(false)

                }else{
                    setSnack({
                        open: true,
                        status: res.status,
                        message: 'error'
                    });
                }
            }
        )
    }



    const [, setErrorMessage] = useState('');
    const [performing, isPerforming] = useState(false)


    const handleBlur = prop => event => {
        // setError({...error, [prop]: !agency.validate(prop)})
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
                        sx={{
                            mb:'30px' +
                                ''}}
                    />
                </Grid>


                <Grid item>
                    <Button
                        // key={'button-' + agency.validate()}
                        variant="contained"
                        color="secondary"
                        fullWidth

                        startIcon={
                            performing ? <CircularProgress size={20}/> : <SendIcon size={20}/>
                        }
                        onClick={handleSubmit}
                        type='submit'
                        // disabled={!agency.validate() || performing}
                    >
                        Send request
                    </Button>
                </Grid>

            </Grid>
        </form>

    )
}



function validate(name, company, email, phone) {

    const error = {...initErrorState}

    const nameRegex = /[\p{L}\d\s'-]{2,50}/gu;
    const companyRegex = /[\p{L}\d\s'-]{3,50}/gu;
    const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/g;


    if (!(nameRegex.test(name))) {
        error.name = {
            state: true,
            helper: 'Name must be 3-50 letters'
        }
    }

    if ( !(companyRegex.test(company)) ) {
        console.log(company,nameRegex.test(company))
        error.company = {
            state: true,
            helper: 'Company\'s name must be 3-50 letters'
        }
    }

    if (!emailRegex.test(email)) {
        error.email = {
            state: true,
            helper: 'Correct your email'
        }
    }
    if (phone.length < 9) {
        error.phone = {
            state: true,
            helper: 'Your phone number is to short'
        }
    }


    // if (!emailRegex.test(emailRef.current.value) && phone.length < 6) {
    //     Object.assign(error,
    //         {
    //             email: {
    //                 state: true,
    //                 helper: 'Fill at least email or phone'
    //             },
    //             phone: {
    //                 state: true,
    //                 helper: 'Fill at least email or phone'
    //             },
    //         });
    // } else {


    // if (name.length < 3 && company.length < 3) {
    //     Object.assign(error,
    //         {
    //             name: {
    //                 state: true,
    //                 helper: 'Name shouldn\'t be empty'
    //             },
    //             company: {
    //                 state: true,
    //                 helper: 'Company\'s name shouldn\'t be empty'
    //             }
    //         }
    //     );
    // }

    return error;
}