import React, { Component } from "react";
import IdolsItem from "./IdolsItem";
import { IdolsContext } from "./_Context/IdolsContext";

export default class IdolsList extends Component {
  render() {
    return (
      <div className="container mt-4">
        <h3 className="text-success">Danh Sách Idols</h3>
        <IdolsContext.Consumer>
          {(value) => {
            return (
              <div className="row">
                {value.idolState.map((idol, index) => {
                  return (
                    <div className="col-3" key={index}>
                      <IdolsItem idol={idol} />
                    </div>
                  );
                })}
              </div>
            );
          }}
        </IdolsContext.Consumer>
      </div>
    );
  }
}
