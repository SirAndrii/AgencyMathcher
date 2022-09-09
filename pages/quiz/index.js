import React, {useEffect, useRef, useState} from 'react'
import data from '../../constants/quiz.json'
import useGenerator from "../../components/useGenerateForm";
import {Button, Grid, LinearProgress} from "@mui/material";
import {CSSTransition, SwitchTransition} from "react-transition-group";
import usePrev from "../../components/usePrev";

//onsubmit, onclick, onchange useref for inputs
export default function Quiz() {
    const [activeTab, setActiveTab] = useState(0);
    const [filter, setFilter] = useState({})
    const [valid, setValid] = useState(false)
    const ref = useRef(null);


    const handleClick = () => {
        ref.current =  activeTab;

        if (activeTab === tabs.length - 1) {

            //change boolean objects to arrays. multiselect returns array, checked - object
            for (const key in filter) {
                if (!Array.isArray(filter[key]) && typeof filter[key] === 'object') {
                    filter[key] = Object.keys(filter[key]).filter(property => filter[key][property]);

                    //if array contains only one element convert it to string
                    if (filter[key].length === 1) {
                        filter[key] = filter[key][0];
                    }
                }
            }

            console.log(filter)
//there are few options how to send state to agency matcher:
            //1. if state can be passed with query, then arrays should be transformed to [value]=1
            // 2. Use Redux
            // 3. show it on the same page


            //agency update - make fetch to firebase after preview page. here we need redux

            //so it's better to use redux i suppose
        } else {
            setActiveTab(activeTab + 1)
        }
    }


    const handleChange = (key) => (event) => {
        const {value, type, checked} = event.target;
        const isCheckbox = type === 'checkbox'

        setFilter(prev => ({
                ...prev,
                [key]: isCheckbox ? {...prev[key], [value]: checked} : value
            })
        )


    }

    useEffect(() => {

        //I can't do it in handlechange, because filter usestate async, here i don't have access to current 'key'.
        //Solve - use iterate filter object by current tab or save key in state.
        const currentFilter = Object.values(filter)[activeTab]
        console.log(currentFilter)
        if (currentFilter) {

            setValid(prev => {
                const validated = validation(currentFilter)
                console.log(validated)
                // if (prev !== validated)
                return validated;
            });
        } else {
            setValid(false)
        }
    }, [filter, activeTab])


    const tabs = useGenerator(data.quiz, {handleChange, filter})

    return (
        <Grid
            container
        >
            <Grid item xs={12}>
                <LinearProgress
                    // className={classes.bar}
                    variant="determinate"
                    value={(activeTab + 1) * 100 / tabs.length}/>
            </Grid>
            <SwitchTransition>
                <CSSTransition
                    key={activeTab}
                    addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
                    classNames={activeTab > ref.current  || ref.current==null ? 'fade' : 'fadeBack'}
                >
                    <Grid
                        container
                        direction={'column'}
                        alignItems={"center"}
                        justifyContent={'center'}
                        rowGap={4}
                        sx={{
                            minHeight: 'calc(100vh - 10px)'
                        }}
                    >

                        {tabs[activeTab]}

                        <Grid
                            container
                            direction={"row"}
                            justifyContent={"center"}
                            gap={2}
                        >
                            <Button
                                variant='outlined'
                                color='primary'
                                onClick={(activeTab !== 0) ? () => {
                                    setActiveTab(activeTab - 1)
                                } : null}
                            >
                                {activeTab === 0 ? 'cancel' : 'previous'}
                            </Button>
                            <Button
                                key={"next" + activeTab}
                                variant='contained'
                                color='secondary'
                                disabled={!valid}
                                onClick={() => handleClick(activeTab)}
                            >
                                {activeTab !== (tabs.length - 1) ? 'next' : 'finish'}
                            </Button>
                        </Grid>
                    </Grid>
                </CSSTransition>
            </SwitchTransition>
        </Grid>
    )
}

const validation = (data) => {
    // filter object can contains strings (radio), array (multiselect) and boolean object (check)
    console.log(data)
    switch (typeof data) {
        case "string":
            return Boolean(data)
        case "object":
            if (Array.isArray(data)) {
                return Boolean(data.length)
            } else {
                return Object.values(data).some(el => el);
            }
        default:
            return false;
    }

}