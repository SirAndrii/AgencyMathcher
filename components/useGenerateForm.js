import React, {useState} from "react";
import {
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormLabel,
    InputLabel, MenuItem, OutlinedInput,
    Radio,
    RadioGroup, Select
} from "@mui/material";

export default function useGenerator(data, props) {

    const [components,] = useState(data.reduce((acc, item) => {
            switch (item.type) {
                case 'check':
                    switch (item.multiple) {
                        case false:
                            acc.push(
                                <FormControl onChange={props.handleChange(item.key)}>
                                    <FormLabel>{item.title}</FormLabel>
                                    <RadioGroup>
                                        {Object.keys(item.option).map(key =>
                                            <FormControlLabel
                                                control={<Radio/>}
                                                key={key}
                                                value={key}
                                                label={item.option[key]}/>
                                        )}
                                    </RadioGroup>
                                </FormControl>
                            )
                            break;

                        case true:
                            acc.push(
                                <FormControl onChange={props.handleChange(item.key)}>
                                    <FormLabel>{item.title}</FormLabel>
                                    <FormGroup>
                                        {Object.keys(item.option).map(key =>
                                            <FormControlLabel
                                                control={<Checkbox/>}
                                                key={key}
                                                value={key}
                                                label={item.option[key]}/>
                                        )}
                                    </FormGroup>
                                </FormControl>
                            )
                            break;
                    }
                    break;

                case 'select':
                    acc.push(
                        <FormControl>
                            <FormLabel>{item.title}</FormLabel>
                            <InputLabel>Select</InputLabel>
                            <Select
                                onChange={props.handleChange(item.key)}
                                multiple={item.multiple}
                                value={Object.keys(item.option)}
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
                        </FormControl>
                    )
                    break;
            }
            return acc;
        }, [])
    );

    return components;
}