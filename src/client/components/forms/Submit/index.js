import React, { Component } from 'react';
import { FormContext } from '../Form';
import Button from '../../controls/Button';

import './index.scss';

class FormSubmit extends Component {
  render() {
    return (
      <div className="form-submit">
        <Button disabled={this.props.context.processing ? 'disabled' : ''}>
          {this.props.children}
        </Button>
      </div>
    );
  }
}

const ContextFormSubmit = props => {
  return (
    <FormContext.Consumer>
      {context => <FormSubmit {...props} context={context} />}
    </FormContext.Consumer>
  );
};

export default ContextFormSubmit;
