import React, { Component } from "react";
import { IdolsContext } from "./_Context/IdolsContext";

export default class IdolsItem extends Component {
  render() {
    let { idol } = this.props;
    return (
      <IdolsContext.Consumer>
        {(value) => {
          return (
            <div className="card" style={{ width: "18rem" }}>
              <img src={idol.img} className="card-img-top" alt={idol.name} />
              <div className="card-body">
                <h4 className="text-title">Họ Tên: {idol.name}</h4>
                <p className="card-text">Tuổi: {idol.age} </p>
                <button
                className="btn btn-info"
                onClick={()=>{value.setActiveIdols(idol.id)}}
                >
                   {idol.like}
                  <i className="fa fa-heart text-danger"></i>
                </button>
              </div>
            </div>
          );
        }}
      </IdolsContext.Consumer>
    );
  }
}
