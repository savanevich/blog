import React from 'react';
import forms from './../../../../styles/forms.css';

function FormHeading(props) {

  return (
    <h2
      className={forms['form-title']}>
      { props.label }
    </h2>
  );
}

FormHeading.propTypes = {
  label: React.PropTypes.string.isRequired
};

export default FormHeading;
