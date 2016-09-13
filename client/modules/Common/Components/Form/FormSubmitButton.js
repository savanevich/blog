import React from 'react';

import forms from './../../../../styles/forms.css';


function FormSubmitButton(props) {

  return (
    <div className={forms['form-buttons']}>
      <a
        className={forms['submit-button']}
        href="#"
        onClick={ props.actionSubmit }>
        {props.label}
      </a>
    </div>
  );
}

FormSubmitButton.propTypes = {
  label: React.PropTypes.string.isRequired,
  actionSubmit: React.PropTypes.func.isRequired
};

export default FormSubmitButton;
