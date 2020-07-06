import React, {Component} from 'react';

class FileInput extends Component {

  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
  }

  render() {
    return (
      <form>
        <label>
          Upload file:
          <input type='file' ref={this.fileInput}/>
        </label>
        <br/>
        <button type='submit'>Submit</button>
      </form>
    );
  }
}

FileInput.propTypes = {};

export default FileInput;
