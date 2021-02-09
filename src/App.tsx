import React from "react";
import "./styles.css";
import DashBoard from "./components/DashBoard";

interface LogStates {}

class App extends React.Component<{}, LogStates> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <DashBoard />
      </div>
    );
  }
}

export default App;
