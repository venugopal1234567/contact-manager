import React, {Component} from 'react';
import PropTypes from 'prop-types'
import classnames from 'classnames'

const  TextInputGroup = ({
    label,
    name,
    value,
    placeholder,
    type,
    onchange,
                             error
                         })=>{
    return (
        <div className="form-group">
            <label htmlFor={name}> {label}</label>
            <input
                name={name}
                type = {type}
                className= {classnames('form-control form-control-lg',{
                    'is-invalid': error
                })}
                placeholder={placeholder}
                value={
                    value
                }
                onChange={onchange}

            />

            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
}

TextInputGroup.propTypes = {
    name : PropTypes.string.isRequired,
    type : PropTypes.string.isRequired,
    placeholder : PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onchange : PropTypes.func.isRequired,

}

TextInputGroup.defaultProps ={
    type:'text'
}

export default TextInputGroup;