import React from 'react';
import styles from './../../../../styles/forms.css';

function FormTextArea(props) {

  return (
    <div>
      <textarea
        className={props.className}
        type={props.type}
        placeholder={props.placeholder}
        { ...props.input }
      />
      { props.meta.touched && props.meta.error && <div className={ styles['error'] }>{ props.meta.error }</div>}
    </div>
  );
}

export default FormTextArea;
