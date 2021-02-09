import React from "react";
import avatar from "../Assets/avatar.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiMenuAlt1 } from "react-icons/hi";

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

class NavBar extends React.Component<AppProps2, StateVars> {
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
      <div className="dashNavBar">
        <div className="burgerMenu">
          <HiMenuAlt1 />
        </div>
        <div className="searchBox" style={{ color: "lightgray" }}>
          search
        </div>
        <div className="container">
          <div className="left ">Mis subscripciones</div>
          <div className="right active">Disponibles</div>
        </div>
        {/* <div className="bothBtns">
          <button className="topBtn navBarBtnAct">activos</button>
          <button className="topBtn navBarBtn">inactivos</button>
        </div> */}
        <div className="userOptions">
          <img className="avatarPhoto" alt="user" src={avatar} />
          <button
            onClick={
              () => alert("test")
              // this.setState({ showDropMenu: !this.state.showDropMenu })
            }
            /*onClick={this.state.showDrop}*/ className="dropDownIcon"
          >
            <MdKeyboardArrowDown />
          </button>
          {/* {!this.state.showDropMenu ? "" : <Submenu />} */}
        </div>
      </div>
    );
  }
}

export default NavBar;
