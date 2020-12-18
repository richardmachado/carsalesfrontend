import { useState } from 'react'

import {Container, Header, Labels, Inputs, Results, Button} from './styles';

export default function CalculatorForm() {

    const [error, setError] = useState('');

    const [userValues, setUserValues] = useState({
        amount: '',
        interest: '',
        years: '',
    });

    const [results, setResults] = useState({
        monthlyPayment: '',
        totalPayment: '',
        totalInterest: '',
        isResult: false,
    });

    const isValid = () => {
        const { amount, interest, years } = userValues;
        let actualError = '';
        // Validate if there are values
        if (!amount || !interest || !years) {
          actualError = 'All the values are required ';
        }
        // Validade if the values are numbers
        if (isNaN(amount) || isNaN(interest) || isNaN(years)) {
          actualError = 'All the values must be a valid number ';
        }
        // Validade if the values are positive numbers
        if (
          Number(amount) <= 0 ||
          Number(interest) <= 0 ||
          Number(years) <= 0
        ) {
          actualError = 'All the values must be a positive number ';
        }
        if (actualError) {
          setError(actualError);
          return false;
        }
        return true;
      };
    
    const handleInputsChange = (event) =>
   setUserValues({ ...userValues, [event.target.name]: event.target.value });
    
   const calculateResults = ({ amount, interest, years }) => {
    const userAmount = Number(amount);
    const calculatedInterest = Number(interest) / 100 / 12;
    const calculatedPayments = Number(years) * 12;
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (userAmount * x * calculatedInterest) / (x - 1);
 
    if (isFinite(monthly)) {
      const monthlyPaymentCalculated = monthly.toFixed(2);
      const totalPaymentCalculated = (monthly * calculatedPayments).toFixed(2);
      const totalInterestCalculated = (monthly * calculatedPayments - userAmount).toFixed(2);
 
      // Set up results to the state to be displayed to the user
      setResults({
        monthlyPayment: monthlyPaymentCalculated,
        totalPayment: totalPaymentCalculated,
        totalInterest: totalInterestCalculated,
        isResult: true,
      });
       }
       
       
    return;
    };
    
   const handleSubmitValues = (e) => {
    e.preventDefault();
       if (isValid()) {
           setError('');
           calculateResults(userValues);
       }
    };

    const clearFields = () => {
        setUserValues({
          amount: '',
          interest: '',
          years: '',
        });
     
        setResults({
          monthlyPayment: '',
          totalPayment: '',
          totalInterest: '',
          isResult: false,
        });
      };
    
    return (
        <Container>
            <Header>How much is my payment?</Header>
            <p style={{color:"red"}}>{error}</p>

            {!results.isResult ? (
    <form onSubmit={handleSubmitValues}>
    <div>
      <div>
        <Labels>Amount:</Labels>
        <Inputs
        type='text'
        name='amount'
        placeholder='Loan amount'
        value={userValues.amount}
        onChange={handleInputsChange}
        />
      </div>
      <div>
        <Labels>Interest:</Labels>
        <Inputs
          type='text'
          name='interest'
          placeholder='Interest'
          value={userValues.interest}
          onChange={handleInputsChange}
        />
                      </div>
                      <div>
        <Labels>Years:</Labels>
        <Inputs
          type='text'
          name='years'
          placeholder='Years'
          value={userValues.years}
          onChange={handleInputsChange}
        />
        </div>
        <Button type='submit'/>
        </div>
              </form>
                 
  ) : (
    <div>
  <Results>
    Loan amount: ${userValues.amount} <br /> 
    Interest:{userValues.interest}% <br /> 
    Years to repay: {userValues.years}
  </Results>
  <div>
    <Labels>Monthly Payment:</Labels>
    <Inputs type='text' value={results.monthlyPayment} disabled />
  </div>
  <div>
    <Labels>Total Payment: </Labels>
    <Inputs type='text' value={results.totalPayment} disabled 
    />
  </div>
  <div>
    <Labels>Total Interest:</Labels>
    <Inputs type='text' value={results.totalInterest} disabled 
    />
                        </div>
                        <Button
  value='Calculate again'
  type='button'
  onClick={clearFields}
/>
</div>
                )}
            
        </Container>
    )
}
