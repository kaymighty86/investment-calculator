import './App.css';
import {useState} from "react";
import SectionComponent from './components/generalUI/sectionComponent';
import appIcon from "./assets/icons/investment-icon.png";
import FinancialsInputComponent from './components/financialsInputComponent';
import InvestmentResultViewer from "./components/investmentResultView";

function App() {

  const [investmentResult, saveInvestmentResult] = useState([])

  const getFinancialsData = (data) => {
    let totalSavings = data.currentSavings;//at the begining of the year the total savings is the passed current savings value
    let interestValue = 0;
    let totalInterest = 0;
    let InvestedCapital = 0;

    let allYearlyData = [];//all yearly data will be saved here

    //calculate the data of all the year-end investmenents results
    for(let c = 0; c < data.investmentDuration; c++){
      interestValue = totalSavings * data.interestRate / 100;
      totalSavings += interestValue + data.yearlySavings;
      totalInterest += interestValue;
      InvestedCapital = totalSavings - totalInterest;

      allYearlyData.push({
        year: c + 1,
        interestValue,
        totalSavings,
        totalInterest,
        InvestedCapital
      });
    }

    saveInvestmentResult([...allYearlyData]);
  }

  const resetInvestmentResults = () => {
    saveInvestmentResult([]);
  }

  return (
    <div className="App">
      <SectionComponent className='appHeader'>
        <img src={appIcon} alt="investment calculator app icon" width={64}/>
        <h1>Investment Calculator</h1>
      </SectionComponent>
      <FinancialsInputComponent onSubmitClicked={getFinancialsData} onResetClicked={resetInvestmentResults}/>
      {investmentResult.length > 0? <InvestmentResultViewer investmentResultList={investmentResult}/> 
          : <SectionComponent>
              <div style={{color: 'white', fontSize: 'small'}}>No investment data calculated.</div>
            </SectionComponent>
      }
    </div>
  );
}

export default App;
