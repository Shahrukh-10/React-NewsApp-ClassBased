import React, { Component } from "react";

export class Spnner extends Component {
  render() {
    return (
      <div>
        <div className="d-flex my-3 justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Spnner;
