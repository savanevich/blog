import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import ActionAndroid from 'material-ui/svg-icons/action/android';

import styles from './../../../../styles/forms.css';

function FormUpload(props) {

  return (
    <div>
      <FlatButton
        label={ props.label }
        backgroundColor="#a4c639"
        hoverColor="#8AA62F"
        labelPosition="before">
        <input type="file" className={ forms['submit-button'] } />
      </FlatButton>
    </div>
  );
}

export default FormUpload;
