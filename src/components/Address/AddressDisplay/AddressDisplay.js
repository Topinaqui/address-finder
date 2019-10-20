import React, { Component } from "react";

import AddressCard from "./AddressCard";
import AddressMap from "./AddressMap";

class AddressDisplay extends Component {
  render() {
    const { address, image } = this.props;

    return (
      <div className="container address-display-container">
        <AddressCard address={address || {}} />
        <AddressMap image={image || ""} />
      </div>
    );
  }
}

export default AddressDisplay;
