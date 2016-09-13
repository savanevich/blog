import React from 'react';
import styles from './../../../../styles/forms.css';

function FormTextarea(props) {

  return (
    <div>
      <textarea
        className={props.className}
        rows={props.rows}
        type={props.type}
        placeholder={props.placeholder}
        { ...props.input }
      />
      { props.meta.touched && props.meta.error && <div className={ styles['error'] }>{ props.meta.error }</div>}
    </div>
  );
}

FormTextarea.propTypes = {
  type: React.PropTypes.string.isRequired,
  placeholder: React.PropTypes.string.isRequired,
  input: React.PropTypes.object.isRequired,
  meta: React.PropTypes.object.isRequired
};

export default FormTextarea;
