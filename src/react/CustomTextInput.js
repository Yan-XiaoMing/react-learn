import React, {Component} from 'react';
import {element} from 'prop-types';

class CustomTextInput extends Component {

  constructor(props) {
    super(props);

    this.textInput = null;
    this.setTextInputRef = element => {
      this.textInput = element;
    };
    this.focusTextInput = () => {
      if (this.textInput) {
        this.textInput.focus();
      }
    };

  }

  componentDidMount() {
    this.focusTextInput();

  }

  render() {
    return (
      <div>

      </div>
    );
  }
}

export default CustomTextInput;
