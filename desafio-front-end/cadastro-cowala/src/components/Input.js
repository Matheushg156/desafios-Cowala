import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

function Input({ id, name, value, label, placeholder, onChange, className }) {
  return (
    <div className="container-input">
      <label htmlFor={ id }>
        { label }
      </label>
      <input
        type="text"
        id={ id }
        placeholder={ placeholder }
        name={ name }
        className={ className }
        value={ value }
        onChange={ onChange }
      />
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
};

Input.defaultProps = {
  label: '',
  id: '',
  name: '',
  placeholder: '',
  value: '',
  onChange: null,
  className: '',
};

export default Input;