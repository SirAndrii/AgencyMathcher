import React, {useState} from "react";
import {
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    InputLabel, MenuItem,
    OutlinedInput,
    RadioGroup,
    Select,
    Radio
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

    const [components,] = useState(data.reduce((acc, item, index) => {
            switch (item.type) {
                case 'check':
                    switch (item.multiple) {
                        case false:
                            acc.push(
                                <FormWrapper title={item.title}>
                                    <RadioGroup onChange={props.handleChange(item.key)}>
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
                                    <FormGroup onChange={props.handleChange(item.key)}>
                                        {Object.keys(item.option).map(key =>
                                            <FormControlLabel
                                                control={<Checkbox/>}
                                                key={key}
                                                value={key}
                                                label={item.option[key]}/>
                                        )}
                                    </FormGroup>
                                </FormWrapper>
                            )
                            break;
                    }
                    break;

                case 'select':
                    acc.push(
                        <FormWrapper title={item.title}>
                            <InputLabel>Select</InputLabel>
                            <Select
                                onChange={props.handleChange(item.key)}
                                multiple={item.multiple}
                                value={item.multiple ? Object.keys(item.option) : ""}
                                input={<OutlinedInput label="Tag"/>}
                                renderValue={(selected) => selected.join(', ')}
                                // MenuProps={MenuProps}
                            >
                                {Object.keys(item.option).map(key =>
                                    <MenuItem
                                        key={key}
                                        value={key}
                                    >
                                        {item.option[key]}
                                    </MenuItem>
                                )}
                            </Select>
                        </FormWrapper>
                    )
                    break;
            }

            //wrap components on last step

            return acc;
        }, [])

    );

    return components;
}