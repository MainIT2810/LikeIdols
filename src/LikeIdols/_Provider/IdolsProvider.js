import React, { Component } from "react";
import { IdolsContext } from "../_Context/IdolsContext";

export default class IdolsProvider extends Component {
  state = {
    idolState: [
      {
        id: 1,
        name: "Tào Tháo",
        age: 65,
        img: "./models/model1.png",
        like: 0,
        active: true,
      },
      {
        id: 2,
        name: "Gia Cát Lượng",
        age: 54,
        img: "./models/model2.png",
        like: 0,
        active: false,
      },
      {
        id: 3,
        name: "Joker",
        age: 35,
        img: "./models/model3.png",
        like: 0,
        active: false,
      },
      {
        id: 4,
        name: "Trâm Anh",
        age: 18,
        img: "./models/model4.png",
        like: 0,
        active: false,
      },
    ],
  };
  setActiveIdols = (id) => {
    let idolListState = this.state.idolState.map((idol, index)=>{
        if (idol.id === id) {
            idol.like += 1;
            idol.active = true
        }
        else {
            idol.active = false
        }
        return {...idol};
    });

    this.setState({
        idolState: idolListState,
    });

  }
  render() {
    return(
        <IdolsContext.Provider value={{idolState: this.state.idolState,setActiveIdols: this.setActiveIdols }}>
            {this.props.children}
        </IdolsContext.Provider>
    );
  }
}
