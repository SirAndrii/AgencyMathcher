import React, {useEffect, useRef, useState} from 'react'
import dataJson from '../../constants/quiz.json'
import useGenerator from "../../components/useGenerateForm";
import {Button, Grid, LinearProgress} from "@mui/material";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {useRouter} from "next/router";
import Head from 'next/head'

export default function Quiz() {
    const [activeTab, setActiveTab] = useState(0);
    const [filter, setFilter] = useState({})
    const [valid, setValid] = useState(false)

    const ref = useRef(true); //for sliding direction
    const router = useRouter();


    console.log({filter})
    const handleClickNext = () => {
        ref.current = true;

        if (activeTab === tabs.length - 1) {

            //change boolean objects to arrays. multiselect returns array, checked - object
            for (const key in filter) {
                if (!Array.isArray(filter[key]) && typeof filter[key] === 'object') {
                    filter[key] = Object.keys(filter[key]).filter(property => filter[key][property]);
                }
                //if array contains only one element convert it to string (because multi select returns string in case of one selection)
                if (filter[key].length === 1) {
                    filter[key] = filter[key][0];
                }
            }
            console.log({filter})
            router.push({
                pathname: '/matched',
                query: {filter: JSON.stringify(filter)}
                //  }, '/matched')
            })

        } else {
            setActiveTab(activeTab + 1)
        }
    }

    const handleClickPrev = () => {
        if (activeTab !== 0) {
            ref.current = false;

            setActiveTab(prev => prev - 1);
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

        if (currentFilter) {
            setValid(prev => {
                const validated = validation(currentFilter)
                // if (prev !== validated)
                return validated;
            });
        } else {
            setValid(false)
        }
    }, [filter, activeTab])

    const tabs = useGenerator(dataJson, {handleChange, filter})

    return (
        <Grid
            container
            justifyContent={'center'}
        >
            <Head>
                <title>Best agency matcher</title>
                <meta name="robots" content="noindex" />
            </Head>

            <Grid item xs={12}>
                <LinearProgress
                    // className={classes.bar}
                    variant="determinate"
                    value={(activeTab + 1) * 100 / tabs.length}/>
            </Grid>

            <TransitionGroup childFactory={(child) =>
                React.cloneElement(
                    child, {classNames: ref.current ? "right" : "left", timeout: 1000}
                )}
            >
                <CSSTransition key={activeTab}>
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
                                sx={{
                                    padding: '10px 20px',
                                    width: '100px',
                                    borderRadius: '50px',
                                }}
                                onClick={(e) => handleClickPrev(activeTab, e)}
                            >
                                {activeTab === 0 ? 'cancel' : 'previous'}
                            </Button>
                            <Button
                                key={"next" + activeTab}
                                variant='contained'
                                color='secondary'
                                disabled={!valid}
                                sx={{
                                    padding: '10px 20px',
                                    width: '100px',
                                }}
                                onClick={(e) => handleClickNext(activeTab, e)}
                            >
                                {activeTab !== (tabs.length - 1) ? 'next' : 'finish'}
                            </Button>
                        </Grid>
                    </Grid>
                </CSSTransition>
            </TransitionGroup>
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