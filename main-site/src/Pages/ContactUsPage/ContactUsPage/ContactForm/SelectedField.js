import React from 'react';

const SelectedField = (props) => {
    const { label, handleChange, name } = [props]
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <select onChange={handleChange}>

            </select>
        </div>
    );
};

export default SelectedField;