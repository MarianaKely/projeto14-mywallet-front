
import IncomePageInput from "./PageInput";
import styled from "styled-components";


export default function Income () {


    return (

        <IncomePageContainer>

            <MainTitle><p>Nova entrada</p></MainTitle>

            <IncomePageInput></IncomePageInput>

        </IncomePageContainer>
    )
}


const IncomePageContainer = styled.div`

  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center; 
  background-color: rgb(140, 16, 190);
  margin: auto;

`;


const MainTitle = styled.div`

  margin-top: 25px;
  margin-bottom: 25px;
  display: flex;
  justify-content: space-between;
  width: 320px;
  align-items: center;

  P {

    font-weight: 700;
    font-size: 26px;
    color: #ffffff;

  }

`;