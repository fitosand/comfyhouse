import React from "react";
import Cards from "./Cards";
import { FaRegClock, FaChevronRight } from "react-icons/fa";
import { FaTshirt, FaBroom, FaRecycle } from "react-icons/fa";
import { MdLocalCarWash, MdLocalLaundryService } from "react-icons/md";
import { BsTools } from "react-icons/bs";

interface AppProps2 {
  // value: any,
  // bldgsList:string[]
  // userID:string,
  // superUser:boolean,
  showCateg: boolean;
  showLa: boolean;
}

type StateVars = {
  // showB:boolean,
  // showM:boolean,
  // showS:boolean,
  // showR:boolean,
  // showDropMenu:boolean
};

class Categories extends React.Component<AppProps2, StateVars> {
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
      <div>
        {/* <div className="screenTitle">
          <button className="filter active">Categorias</button>
          <button className="filter">todas</button>
        </div> */}
        <div className="lowerBoard">
          <button className="CategoryCard">
            <div className="boxIcon Col6">
              <FaRecycle />
            </div>
            <div className="boxTitle">
              <span className="dotStatus"></span>
              <span>Reciclaje</span>
            </div>
          </button>
          <button
            onClick={() => {
              this.setState({ showLa: true }), console.log(this.props.showLa);
            }}
            className="CategoryCard"
          >
            <div className="boxIcon Col1">
              <FaTshirt />
            </div>
            <div className="boxTitle">
              <span className="dotStatus"></span>
              <span>Lavanderia</span>
            </div>
          </button>
          <button className="CategoryCard">
            <div className="boxIcon Col2">
              <MdLocalCarWash />
            </div>
            <div className="boxTitle">
              <span className="dotStatus"></span>
              <span>Auto-lavado</span>
            </div>
          </button>

          <button className="CategoryCard">
            <div className="boxIcon Col4">
              <FaBroom />
            </div>
            <div className="boxTitle">
              <span className="dotStatus"></span>
              <span>Limpieza</span>
            </div>
          </button>
          <button className="CategoryCard">
            <div className="boxIcon Col3">
              <MdLocalLaundryService />
            </div>
            <div className="boxTitle">
              <span className="dotStatus"></span>
              <span>Electrodomesticos</span>
            </div>
          </button>
          <button className="CategoryCard">
            <div className="boxIcon Col5">
              <BsTools />
            </div>
            <div className="boxTitle">
              <span className="dotStatus"></span>
              <span>Mantenimiento</span>
            </div>
          </button>
        </div>
      </div>
    );
  }
}

export default Categories;
