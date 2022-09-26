import {useRef, useState} from "react";

export default function useContactValue () {
    const {useRef} = require("react");

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const messageRef = useRef(null);
    const companyRef = useRef(null);

    const [phone, setPhone] = useState("");

    const [error, setError] = useState(initErrorState);

    return ({
            nameRef,
            emailRef,
            messageRef,
            companyRef,
            name: nameRef?.current?.value, // with this i will always get initial value
            company: companyRef?.current?.value,
            email: emailRef?.current?.value,
            message: messageRef?.current?.value,
            phone,
            setPhone,
            error,
            setError
        }
    )
}

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


export function validateForm(name, company, email, phone) {
console.log(name, company, email, phone,2)
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
        error.company = {
            state: true,
            helper: 'Company\'s name must be 3-50 letters'
        }
    }

    if (!emailRegex.test(email)) {
        console.log(email,!emailRegex.test(email) )
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