import React from "react";
import { FaRegClock, FaChevronRight } from "react-icons/fa";

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

class VendorProfile extends React.Component<AppProps2, StateVars> {
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
      <div className="subsCardsWrapper">
        <h3>Suscripciones</h3>
        <div className="cardsWrapper">
          <button className="businessCard">
            <div className="topLine">
              <span className="leftTop">
                <span style={{ marginRight: "5px", display: "flex" }}>
                  <FaRegClock />
                </span>
                <span>2 dias a la semana • 10 AM</span>
              </span>
              <span className="rTop">A domicilio</span>
            </div>
            <div className="midLine">
              <div className="cardLeftItems">
                <div className="boxIconLeft">logo</div>
                <div className="cardDetails">
                  <div>Auto-lavado Makro</div>
                  <div className="cardDetails2">Lavado de carro, basico</div>
                  <div className="cardDetailsPrice">$40,000/mes</div>
                </div>
              </div>
              <div className="right">
                <FaChevronRight />
              </div>
            </div>
            <div className="bottomLine"></div>
            {/* <div className="boxIcon">logo</div>
          <div className="boxTitle">
            <span className="dotStatus"></span>
            <span>Lavanderia</span>
          </div> */}
          </button>
        </div>

        <div className="cardsWrapper">
          <button className="businessCard">
            <div className="topLine">
              <span className="leftTop">
                <span style={{ marginRight: "5px", display: "flex" }}>
                  <FaRegClock />
                </span>
                <span>1 ano</span>
              </span>
              <span className="rTopMore">Ver Detalles</span>
            </div>
            <div className="midLine">
              <div className="cardLeftItems">
                <div className="boxIconLeft">logo</div>
                <div className="cardDetails">
                  <div>Suramericana</div>
                  <div className="cardDetails2">Seguro de lavadora</div>
                  <div className="cardDetailsPrice">$40,000/mes</div>
                </div>
              </div>
              <div className="right">
                <FaChevronRight />
              </div>
            </div>
            <div className="bottomLine"></div>
            {/* <div className="boxIcon">logo</div>
          <div className="boxTitle">
            <span className="dotStatus"></span>
            <span>Lavanderia</span>
          </div> */}
          </button>
        </div>
      </div>
    );
  }
}

export default VendorProfile;
