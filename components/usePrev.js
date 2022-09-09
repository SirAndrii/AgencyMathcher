import {useEffect, useRef} from "react";

export default function usePrev(value) {
    const ref = useRef(null);

    useEffect(() => {
        if (ref.current!==value)
          ref.current = value; //assign the value of ref to the argument
    },[value]); //this code will run when the value of 'value' changes

    return ref.current; //in the end, return the current ref value.
}
