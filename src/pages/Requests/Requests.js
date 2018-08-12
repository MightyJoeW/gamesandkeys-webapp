import React, { Component } from 'react';

import RequestForm from './RequestForm';

class Requests extends Component {
  submit = values => {
    // print the form values to the console
    console.log(values)
  }
  render() {
    return (
      <div>
        <RequestForm onSubmit={this.submit} />
      </div>
    )
  }
}

export default Requests;