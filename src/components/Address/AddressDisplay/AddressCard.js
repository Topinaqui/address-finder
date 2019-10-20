import React, { Component } from "react";

class AddressCard extends Component {
  render() {
    console.log(this.props);
    const { address } = this.props;

    return (
      <div>
        <p>{address.logradouro}</p>
      </div>
    );
  }
}

export default AddressCard;
