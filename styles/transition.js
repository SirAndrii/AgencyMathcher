import {keyframes} from "@emotion/react";


const slidesRight = keyframes`
  from {
    transform: translateX(-10%);
    opacity: 0;
  }
  to {
    transform: translateX(0px);
    opacity: 1;
  }
`

const slidesLeft = keyframes`
  from {
    transform: translateX(10%);
    opacity: 0;
  }
  to {
    transform: translateX(0px);
    opacity: 1;
  }
`

export const transition = {
        'right': {
            // entering: {
            //     opacity: 0,
            //     transform: 'translateX(-10%)',
            // },
            // entered: {
            //     opacity: 1,
            //     transform: 'translateX(0)'
            // },
            // exiting: {
            //     opacity: 0,
            //     transform: 'translateX(-10%)'
            // },
            // exited: {
            //     opacity: 1,
            //     transform: 'translateX(0%)'
            // },
            slideIn: {
                animation: `${slidesRight} 1s ease-in-out`
            }
        },

        'left': {
            // entering: {
            //     opacity: 0,
            //     transform: 'translateX(10%)',
            // },
            // entered: {
            //     opacity: 1,
            //     transform: 'translateX(0)'
            // },
            // exiting: {
            //     opacity: 0,
            //     transform: 'translateX(10%)'
            // },
            // exited: {
            //     opacity: 1,
            //     transform: 'translateX(0)'
            // },
            slideIn: {
                animation: `${slidesLeft} 1s ease-in-out`
            }
        }
    }
;