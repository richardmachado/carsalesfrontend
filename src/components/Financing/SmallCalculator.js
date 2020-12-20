import { Component } from "react";
import InputRange from "react-input-range";
import Display from "./Display";

import "./Calculator.css";
import "react-input-range/lib/css/index.css";


class SmallCalculator extends Component {
  state = {
    amountValue: 5000,
    yearsValue: 1
  };

  handleAmountChange = value => {
    this.setState({ amountValue: value });
  };
  handleYearChange = value => {
    this.setState({ yearsValue: value });
  };

  render() {
    const { amountValue, yearsValue } = this.state;

      return (
          <div className="body">
              
            <div className="Calc">
                <h4>I want to borrow ${amountValue}</h4>
                <InputRange
                step={100}
                maxValue={20000}
                minValue={1000}
                value={amountValue}
                onChange={this.handleAmountChange}
                />
                <h4>
                Over {yearsValue} year{yearsValue > 1 && "s"}
                </h4>
                <InputRange
                step={0.5}
                maxValue={5}
                minValue={1}
                value={yearsValue}
                onChange={this.handleYearChange}
                />
                <Display years={yearsValue} amount={amountValue} />
              </div>
              
        </div>
    );
  }
}

export default SmallCalculator;