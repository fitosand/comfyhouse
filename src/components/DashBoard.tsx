import React from "react";
import NavBar from "../components/NavBar";
import LowerBoard from "../components/LowerBoard";

interface AppProps2 {
  // value: any,
  // bldgsList:string[]
  // userID:string,
  // superUser:boolean,
}

type StateVars = {
  // showB:boolean,
  // showM:boolean,
  // showS:boolean,
  // showR:boolean,
  // showDropMenu:boolean
};

class DashBoard extends React.Component<AppProps2, StateVars> {
  constructor(props: AppProps2) {
    super(props);
    this.state = {
      // showB: false,
      // showM:false,
      // showS:false,
      // showR:false,
      // showDropMenu: false,
    };
    // console.log(this.state.showB);
  }
  render() {
    return (
      <div className="mainBoard">
        <NavBar />
        <LowerBoard />
      </div>
    );
  }
}

export default DashBoard;
