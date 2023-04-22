
import ExpansePageInputs from "./PageInputs";
import styled from "styled-components";


export default function Expense (){

    return (

        <ExpensePageContainer>

            <MainTitle><p>Nova saída</p></MainTitle>

            <ExpansePageInputs></ExpansePageInputs>

        </ExpensePageContainer>
        
    )
}


const ExpensePageContainer = styled.div`

  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(140, 16, 190);
  margin: auto;

`;


const MainTitle = styled.div`
  
  width: 320px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;
  margin-bottom: 25px;

  P {
    font-weight: 700;

    font-size: 26px;
    color: #ffffff;

  }

`;