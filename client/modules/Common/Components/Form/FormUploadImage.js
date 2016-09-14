import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';

const Dropzone = require('react-dropzone');

import forms from './../../../../styles/forms.css';

// avoiding bug 'unknown prop `onTouchTap`'
// of material-ui
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class FormUpload extends Component {

  render() {
    const files = this.props.input.value;

    if (!files.length) {
      return (
        <div>
          <Dropzone
            { ...this.props.input }
            name={ this.props.name }
            className={ this.props.className }
            multiple={ false }
            onDrop={( filesToUpload, e ) => this.props.input.onChange(filesToUpload)}
          >
            <div>{ this.props.label }</div>
          </Dropzone>
          { this.props.meta.touched && this.props.meta.error && <div className={ forms['error'] }>{ this.props.meta.error }</div>}
        </div>
      );
    } else {
      return (
        <div className={ this.props.className }>
          <img className={ forms['preview-image'] } src={ files[0].preview } />
        </div>
      );
    }
  }
}

FormUpload.propTypes = {
  input: React.PropTypes.object.isRequired
};

export default FormUpload;
