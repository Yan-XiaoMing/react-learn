import React, {Component} from 'react';
import 'rmc-picker/assets/index.css';
import 'rmc-date-picker/assets/index.css';
import 'rmc-picker/assets/popup.css';
import './style.css'
import DatePicker from "rmc-date-picker";
import PopPicker from 'rmc-date-picker'

class Index extends Component {
  static defaultProps = {
    mode: 'datetime',
  };

  constructor(props) {
    super(props);
    this.state = {
      date: null,
    };
  }

  onChange = (date) => {
    this.setState({
      date,
    });
  }

  onDismiss = () => {
    console.log('onDismiss');
  }

  show = () => {
    console.log('my click');
  }

  render() {
    const props = this.props;
    const { date } = this.state;
    const datePicker = (
      <DatePicker
        rootNativeProps={{'data-xx': 'yy'}}
        minDate={new Date(2015, 8, 15, 10, 30, 0)}
        maxDate={new Date(2019, 8, 15, 10, 30, 0)}
        defaultDate={new Date()}
        mode={'date'}
      />
    );
    return (<div style={{ margin: '10px 30px' }}>
      <div>
        <PopPicker
          datePicker={datePicker}
          transitionName="rmc-picker-popup-slide-fade"
          maskTransitionName="rmc-picker-popup-fade"
          title="Date picker"
          date={date}
          onDismiss={this.onDismiss}
          onChange={this.onChange}
        >
          <button onClick={this.show}>{'open'}</button>
        </PopPicker>
      </div>
    </div>);
  }
}

export default Index;