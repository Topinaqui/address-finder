import React, { Component } from "react";

import AddressSearcher from "./AddressSearcher.js";
import AddressDisplay from "./AddressDisplay.js";

class Address extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <AddressSearcher></AddressSearcher>
        <AddressDisplay></AddressDisplay>
      </div>
    );
  }
}

export default Address;
