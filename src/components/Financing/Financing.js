import { Component } from "react";


import "./Calculator.css";
import "react-input-range/lib/css/index.css";
import CalculatorForm from "./CalculatorForm";
import SmallCalculator from "./SmallCalculator";

class Financing extends Component {
  render() {
    return (
      <div className="styling">
        <SmallCalculator />
        <CalculatorForm />
      </div>
    );
  }
}

export default Financing;