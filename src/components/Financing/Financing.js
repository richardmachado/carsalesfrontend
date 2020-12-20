import { Component } from "react";


import "./Calculator.css";
import "react-input-range/lib/css/index.css";
import CalculatorForm from "./CalculatorForm";
import SmallCalculator from "./SmallCalculator";

class Financing extends Component {
  render() {
    return (
      <div>
        <h1>Financial Calculators</h1>
        <div className="styling">
          <div>
            <SmallCalculator />
          </div>
          <div>
            <CalculatorForm />
            </div>
      </div>
      </div>
    );
  }
}

export default Financing;