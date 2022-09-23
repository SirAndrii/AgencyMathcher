import React, {useState,useRef} from "react";
import {
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Radio,
    RadioGroup,
    Select
} from "@mui/material";
import Typography from "@mui/material/Typography";


const styles = {
    maxWidth: 800,
    minWidth: 320,
}

function FormWrapper(props) {
    return (
        <>
            <Typography variant={"h1"}>{props.title}</Typography>
            <FormControl sx={styles}>
                {props.children}
            </FormControl>
        </>
    )
};

export default function useGenerator(data, props) {
    const inputRef = useRef()

    const defaultValue = (key,option) => {
        const _filter = props.filter[key]

        if (typeof _filter === "object" && !Array.isArray(_filter)) {
            return _filter[option] === undefined ? false : _filter[option];
        }
        else {
            return _filter;
        }
    }

   // const [components,] = useState(data.reduce((acc, item) => {
    //todo create separate components
    const components= (data.reduce((acc, item) => {
            switch (item.type) {
                case 'check':
                    switch (item.multiple) {
                        case false:
                            acc.push(
                                <FormWrapper title={item.title}>
                                    <RadioGroup
                                        ref={inputRef}
                                        onChange={props.handleChange(item.key)}
                                        value={defaultValue(item.key) || false}
                                    >
                                        {Object.keys(item.option).map(key =>
                                            <FormControlLabel
                                                control={<Radio/>}
                                                key={key}
                                                value={key}
                                                label={item.option[key]}/>
                                        )}
                                    </RadioGroup>
                                </FormWrapper>
                            )
                            break;

                        case true:
                            acc.push(
                                <FormWrapper title={item.title}>
                                    <FormGroup onChange={props.handleChange(item.key)} ref={inputRef}>
                                        {Object.keys(item.option).map(option =>
                                            <FormControlLabel
                                                control={<Checkbox
                                                    checked={defaultValue(item.key, option) || false}
                                                />}
                                                key={option}
                                                value={option}
                                                label={item.option[option]}/>
                                        )}
                                    </FormGroup>
                                </FormWrapper>
                            )
                            break;
                    }
                    break;

                case 'select':
                    const {key, multiple, title, option} = item
                    const selectValue =  defaultValue(key) || (multiple ? [] : "" );

                    const optionArr = Object.keys(option);

                    acc.push(
                        <FormWrapper title={title}>
                            <InputLabel>Select</InputLabel>
                            <Select
                                ref={inputRef}
                                onChange={props.handleChange(key)}
                                multiple={multiple}
                                value={ selectValue }
                                input={<OutlinedInput label="Select"/>}
                                renderValue={(selected) =>  multiple ? selected.join(', ') : selected}
                                sx={{maxWidth:'320px',textOverflow:'ellipsis'}}
                                // MenuProps={MenuProps}
                            >
                                {optionArr.map( opt =>
                                    <MenuItem
                                        key={opt}
                                        value={opt}
                                    >
                                        { multiple && <Checkbox checked={selectValue.includes( opt )} />}

                                        {option[opt]}
                                    </MenuItem>
                                )}
                            </Select>
                        </FormWrapper>
                    )
                    break;
            }

            return acc;
        }, [])
    );

    return components;
}