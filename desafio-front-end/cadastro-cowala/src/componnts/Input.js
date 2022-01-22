import React from 'react';
import PropTypes from 'prop-types';

function Input({ id, name, value, label, onChange, className }) {
  return (
    <div>
      <label htmlFor={ id }>
        { label }
        <input
          type="text"
          id={ id }
          name={ name }
          className={ className }
          value={ value }
          onChange={ onChange }
        />
      </label>
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
};

Input.defaultProps = {
  label: '',
  id: '',
  name: '',
  value: '',
  onChange: '',
  className: '',
};

export default Input;