import React, { Component } from "react";

import { getMap } from "../../../services/AddressFinder";
import axios from "axios";

class AddressSearcher extends Component {
  state = {
    cep: "04351050"
  };

  validateCEP(cep) {
    return true;
  }

  loadImage(file) {
    console.log("Load image");

    // let imageMap = document.querySelector("#imageMap");
    // console.log(imageMap);

    // if (!imageMap) return;

    // let imageMap = document.createElement("IMG");

    let imageSRC = null;
  }

  async getMapImage(address = { isEmpty: true }, onSearch = () => {}) {
    let imageSRC = null;

    if (!address.isEmpty) {
      let image = await getMap(address);

      onSearch({ address, imageSRC: image });

      // let reader = new FileReader();

      // reader.onload = function({ target }) {
      //   imageSRC = target.result;

      //   onSearch({ address, imageSRC });
      // };

      // var file = new Blob([image], { type: "image/*" });

      // reader.readAsDataURL(file);
    }

    return imageSRC;
  }

  buscarCEP() {
    const { cep } = this.state;
    const { onSearch } = this.props;

    if (!this.validateCEP(cep)) {
      console.log("CEP inválido");

      return;
    }

    const URL = `https://viacep.com.br/ws/${cep}/json/`;

    axios
      .get(URL)
      .then(({ data }) => {
        if (typeof onSearch === "function") {
          let address = data;

          console.log(address);

          this.getMapImage(address, onSearch);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  setCEP(cep = "") {
    this.setState({ cep });
  }

  render() {
    return (
      <div className="container address-searcher-container">
        <div className="row">
          <div className="col">
            <h4>
              <span className="address-searcher-title">Consultar</span>
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label htmlFor="cep_address">CEP</label>
            {"  "}
            <input
              id="cep_address"
              name="cep_address"
              type="text"
              value={this.state.cep}
              placeholder="CEP"
              onChange={({ target }) => this.setCEP(target.value)}
            />{" "}
            <button
              className="btn btn-primary"
              onClick={() => this.buscarCEP()}
            >
              Buscar
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default AddressSearcher;
