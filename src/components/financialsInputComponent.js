import styles from "./financialsInputComponent.module.css";
import {useState} from "react";

import SectionComponent from "./generalUI/sectionComponent";

const FinancialsInputComponent = ({onSubmitClicked, onResetClicked}) => {

    const [currentSavings, setCurrentSavings] = useState("0");
    const [yearlySavings, setYearlySavings] = useState("0");
    const [interestRate, setInterestRate] = useState("0");
    const [investmentDuration, setInvestmentDuration] = useState("0");

    const currentSavingsChangeHandler = (event) => {
        setCurrentSavings(event.target.value < 0? "0" : event.target.value);
    }

    const yearlySavingsChangeHandler = (event) => {
        setYearlySavings(event.target.value < 0? "0" : event.target.value);
    }
    
    const interestRateChangeHandler = (event) => {
        setInterestRate(event.target.value < 0? "0" : event.target.value);
    }
    
    const investmentDurationChangeHandler = (event) => {
        setInvestmentDuration(event.target.value < 0? "0" : event.target.value);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();//don't do default submit action

        //if any of the gathered financials parameters is somehow empty, escape the function
        if(currentSavings === "" || yearlySavings === "" ||
        interestRate === "" || investmentDuration === ""){
            return;
        }

        const financials = {
            currentSavings: parseFloat(currentSavings),
            yearlySavings: parseFloat(yearlySavings),
            interestRate: parseFloat(interestRate),
            investmentDuration: parseInt(investmentDuration)
        }

        onSubmitClicked(financials);
    }

    const onResetHandler = (event) => {
        setCurrentSavings("0");
        setYearlySavings("0");
        setInterestRate("0");
        setInvestmentDuration("0");

        onResetClicked();
    }

    return (
        <SectionComponent className={styles.formContainer}>
            <form onSubmit={onSubmitHandler} onReset={onResetHandler}>
                <div className={styles.allInputsWrapper}>
                    <div className={`${styles.inputContainer} ${currentSavings === ""? styles.invalidInput : ""}`}>{/*if the input value is empty highlight the component red*/}
                        <label htmlFor="currentSavingsInput">Current Savings (=N=)</label>
                        <input id="currentSavingsInput" name="currentSavings" type="number" min="0" step="0.01" value={currentSavings} onChange={currentSavingsChangeHandler} required/>
                    </div>
                    <div className={`${styles.inputContainer} ${yearlySavings === ""? styles.invalidInput : ""}`}>
                        <label htmlFor="yearlySavingsInput">Yearly Savings (=N=)</label>
                        <input id="yearlySavingsInput" name="yearlySavings" type="number" min="0.01" step="0.01" value={yearlySavings} onChange={yearlySavingsChangeHandler} required/>
                    </div>
                    <div className={`${styles.inputContainer} ${interestRate === ""? styles.invalidInput: ""}`}>
                        <label htmlFor="interestRateInput">Expected Interest (% per year)</label>
                        <input id="interestRateInput" name="interestRate" type="number" min="0.01" step="0.01" value={interestRate} onChange={interestRateChangeHandler} required/>
                    </div>
                    <div className={`${styles.inputContainer} ${investmentDuration === ""? styles.invalidInput : ""}`}>
                        <label htmlFor="investmentDurationInput">Investment Duration (Years)</label>
                        <input id="investmentDurationInput" name="investmentDuration" type="number" min="1" step="1" value={investmentDuration} onChange={investmentDurationChangeHandler} required/>
                    </div>
                </div>
                
                <div className={styles.buttonsContainer}>
                    <input type="reset" value="Reset" />
                    <input type="submit" value="Calculate" />
                </div>
            </form>
        </SectionComponent>
    );
}

export default FinancialsInputComponent