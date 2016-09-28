import React from 'react';
import styles from './../../../../styles/forms.css';
import TextField from 'material-ui/TextField';

function FormField(props) {

  const multiLine = !!(props.rows);
  const rowsNumber = props.rows ? +props.rows : 1;

  return (
    <div>
      <TextField
        className={props.className}
        type={props.type}
        hintText={props.placeholder}
        floatingLabelText={props.placeholder}
        errorText={props.meta.touched && props.meta.error}
        fullWidth={true}
        multiLine={multiLine}
        rows={rowsNumber}
        { ...props.input }
      />
    </div>
  );
}

FormField.propTypes = {
  type: React.PropTypes.string.isRequired,
  placeholder: React.PropTypes.string.isRequired,
  input: React.PropTypes.object.isRequired,
  meta: React.PropTypes.object.isRequired
};

export default FormField;
