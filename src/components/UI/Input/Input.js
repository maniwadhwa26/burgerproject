import React from 'react';
import classes from './Input.css';
const input =(props) => {


    let inputElement = null;


    switch(props.elementType){
        case ('input'):
            inputElement = <input onChange={props.changed} className={classes.Input} {...props.elementConfig} value={props.value}/>;
            break;
        case ('textarea'):
            inputElement = <textarea onChange={props.changed} className={classes.Input} {...props.elementConfig} value={props.value} />;
            break;
        case ('select'):
            inputElement = 
            <select 
            onChange={props.changed}
                className={classes.Input}
                value={props.value} 

            >
                {props.elementConfig.options.map(optionOb => (
                        <option key={optionOb.value} value={optionOb.value}>{optionOb.displayValue}</option>
                ))}

            </select>;
            break;
        default:
            inputElement = <input onChange={props.changed} className={classes.Input} {...props.elementConfig} value={props.value} />;
            break;
    }
    
    return(
    <div className={classes.Input}>
        <label className={classes.Label}>{props.lable}</label>
        {inputElement}
    </div>
    );

};

export default input;