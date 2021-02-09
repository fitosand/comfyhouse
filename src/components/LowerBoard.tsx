import React from "react";
import Cards from "./Cards";
import Categories from "./Categories";
import VendorProfile from "./VendorProfile";

interface AppProps2 {
  // value: any,
  // bldgsList:string[]
  // userID:string,
  // superUser:boolean,
}

type StateVars = {
  showLa: boolean;
  showCateg: boolean;
  // showM:boolean,
  // showS:boolean,
  // showR:boolean,
  // showDropMenu:boolean
};

class LowerBoard extends React.Component<AppProps2, StateVars> {
  constructor(props: AppProps2) {
    super(props);
    this.state = {
      showLa: true,
      showCateg: true
      // showM:false,
      // showS:false,
      // showR:false,
      // showDropMenu: false,
    };
    // console.log(this.state.showB);
  }
  render() {
    return (
      <div>
        <Categories
          showLa={this.state.showLa}
          showCateg={this.state.showCateg}
        />
        <Cards />

        {/* <VendorProfile /> */}
      </div>
    );
  }
}

export default LowerBoard;
