import React, { Component } from 'react';
import SetStepNav from 'payload/client/components/utilities/SetStepNav';

class CollectionEdit extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <article className="collection-edit">
        <SetStepNav nav={ [
          {
            url: `/collections/${this.props.collection}`,
            label: this.props.collection
          },
          {
            url: `/collections/${this.props.collection}/${this.props.id}`,
            label: this.props.id
          }
        ] } />
        {this.props.children}
      </article>
    );
  }
}

export default CollectionEdit;
