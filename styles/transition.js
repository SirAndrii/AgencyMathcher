import {keyframes} from "@emotion/react";


const slidesRight = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`

const slidesLeft = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`

export const transition = {
        'right': {
            slideIn: {
                animation: `${slidesRight} 1s ease-in-out`
            }
        },

        'left': {
            slideIn: {
                animation: `${slidesLeft} 1s ease-in-out`
            }
        }
    }
;