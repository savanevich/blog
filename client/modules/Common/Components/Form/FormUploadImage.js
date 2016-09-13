import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import ActionAndroid from '../../../../../node_modules/material-ui/svg-icons/action/android';

import forms from './../../../../styles/forms.css';

// avoiding bug 'unknown prop `onTouchTap`'
// of material-ui
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

function FormUpload(props) {

  return (
    <div>
      <FlatButton
        label={ props.label }
        primary={true}
        labelPosition="before">
        <input type="file" className={ forms['upload-button'] } />
      </FlatButton>
    </div>
  );
}

FormUpload.propTypes = {
  input: React.PropTypes.object.isRequired
};

export default FormUpload;
