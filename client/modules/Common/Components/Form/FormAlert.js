import React from 'react';
import forms from './../../../../styles/forms.css';

function FormAlert(props) {

  if (props.errorMessage) {
    return (
      <div className={ forms['error'] }>
        <strong>Ooops!</strong> { props.errorMessage }
      </div>
    );
  }

  return null;
}

export default FormAlert;
