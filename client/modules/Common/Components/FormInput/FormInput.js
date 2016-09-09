import React from 'react';
import styles from './FormInput.css';

function FormField(props) {

  return (
    <div>
      <input
        className={props.className}
        type={props.type}
        placeholder={props.placeholder}
        { ...props.input }
      />
      { props.meta.touched && props.meta.error && <div className={ styles['error'] }>{ props.meta.error }</div>}
    </div>
  );
}

export default FormField;
