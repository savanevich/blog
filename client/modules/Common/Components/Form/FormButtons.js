import React from 'react';

import forms from './../../../../styles/forms.css';
import FlatButton from 'material-ui/FlatButton';

function FormButtons(props) {

  return (
    <div className={forms['form-buttons']}>
      <FlatButton
        label={props.labelCancel}
        primary={true}
        onTouchTap={props.actionCancel}
      />
      <FlatButton
        label={props.labelSubmit}
        primary={true}
        keyboardFocused={true}
        onTouchTap={props.actionSubmit}
      />
    </div>
  );
}

FormButtons.propTypes = {
  labelSubmit: React.PropTypes.string.isRequired,
  labelCancel: React.PropTypes.string.isRequired,
  actionSubmit: React.PropTypes.func.isRequired,
  actionCancel: React.PropTypes.func.isRequired
};

export default FormButtons;
