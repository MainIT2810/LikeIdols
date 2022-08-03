import React, { Component } from "react";
import { IdolsContext } from "./_Context/IdolsContext";

export default class IdolsProfile extends Component {
  render() {
    return (
      <div className="mt-3">
        <h3 className="text-success">Thông Tin Idols</h3>
        <IdolsContext.Consumer>
          {(value) => {
            let setActiveIdols = value.idolState.find(idol => idol.active);
            return (
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={setActiveIdols.img}
                  className="card-img-top"
                  alt={setActiveIdols.name}
                />
                <div className="card-body">
                  <h4 className="text-title">Họ Tên: {setActiveIdols.name}</h4>
                  <p className="card-text">Tuổi: {setActiveIdols.age}</p>
                  <p className="card-text">
                    Lượt thích: {setActiveIdols.like}<i className="fa fa-heart text-danger"></i>
                  </p>
                </div>
              </div>
            );
          }}
        </IdolsContext.Consumer>
      </div>
    );
  }
}
