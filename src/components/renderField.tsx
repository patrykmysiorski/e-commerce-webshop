import React from "react";

interface fieldProps {
    input: any,
    label: any,
    type: any,
    placeholder: any,
    children: any,
    meta: {
        touched: boolean,
        error: any,
        warning: any
    }
}

const renderField = (props: fieldProps): any => {
    return (
        <div>
            <label>{props.label}</label>
            <div>
                <input {...props.input} placeholder={props.placeholder} type={props.type} />
                {props.meta.touched &&
                ((props.meta.error && <div style={{ color: "red" }}>{props.meta.error}</div>) ||
                    (props.meta.warning && <span>{props.meta.warning}</span>))}
            </div>
        </div>
    );
}

export default renderField;
