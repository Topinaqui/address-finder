import React, { Component, createElement } from "react";

class AddressMap extends Component {
  render() {
    const { image } = this.props;

    console.log("Map");
    console.log(image);

    return (
      <div className="address-map-container">
        <img id="imageMap" src={image} />
      </div>
    );
  }
}

export default AddressMap;
