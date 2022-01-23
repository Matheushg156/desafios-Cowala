import React from 'react';
import PropTypes from 'prop-types';

function Button({ label, onClick, className }) {
  return (
    <div>
      <button
          type="button"
          onClick={ onClick }
          className={ className }
        >
          {label}
        </button>
    </div>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

Button.defaultProps = {
  label: '',
  onClick: null,
  className: '',
};

export default Button;
