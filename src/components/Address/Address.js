import React, { Component } from "react";

import AddressSearcher from "./AddressSearcher/AddressSearcher";
import AddressDisplay from "./AddressDisplay/AddressDisplay";

class Address extends Component {
  state = {
    address: {},
    image: ""
  };

  handleSearchResult({ address, imageSRC }) {
    this.setState({ address, image: imageSRC });
  }

  render() {
    const { address, image } = this.state;

    return (
      <div>
        <AddressSearcher onSearch={result => this.handleSearchResult(result)} />
        <AddressDisplay address={address} image={image} />
      </div>
    );
  }
}

export default Address;
