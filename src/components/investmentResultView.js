import styles from "./investmentResultView.module.css";
import SectionComponent from "./generalUI/sectionComponent";
import { CommaNumberFormat } from "../utils/customFunctions.js";

const InvestmentResultViewer = ({investmentResultList}) => {
    
    return(
        <SectionComponent>
            <table>
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Total Savings</th>
                        <th>Interest (Year)</th>
                        <th>Total Interest</th>
                        <th>Invested Capital</th>
                    </tr>
                </thead>
                <tbody>
                    {investmentResultList.map((Data,id)=>(
                        <tr key={`inv${Math.random()*113}`}>
                            <td>{Data.year}</td>
                            <td>{`₦${CommaNumberFormat(Data.totalSavings.toFixed(2))}`}</td>
                            <td>{`₦${CommaNumberFormat(Data.interestValue.toFixed(2))}`}</td>
                            <td>{`₦${CommaNumberFormat(Data.totalInterest.toFixed(2))}`}</td>
                            <td>{`₦${CommaNumberFormat(Data.InvestedCapital.toFixed(2))}`}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </SectionComponent>
    );
}

export default InvestmentResultViewer;