/**
 * Created by dinhquangtrung on 10/4/15.
 */

import React from 'react';

export default class FriendlyLoader extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      failed: this.props.failed || false,
    };
    this.lastSay = '';
    this.says = [
      'Be patient, your data is coming...',
      'Getting data, just for you. Hang tight...',
      'Please wait...',
      'Loading your data...',
    ];
    window.addEventListener('error', () => {
      this.setState({
        failed: true,
      });
    });
  }
  render() {
    if (this.state.failed) {
      return (
        <div>
          <i className="fa fa-frown-o"></i>
          <h5>Oops! Something went wrong, please contact admin.</h5>
        </div>
      );
    }
    let say = this.says[Math.floor(Math.random() * this.says.length)];
    while (say === this.lastSay) {
      say = this.says[Math.floor(Math.random() * this.says.length)];
    }
    this.lastSay = say;
    return (
      <div>
        <i className="fa fa-refresh fa-spin"></i>
        <h5 className="delay-showing">{this.props.message || say}</h5>
      </div>
    );
  }
}
