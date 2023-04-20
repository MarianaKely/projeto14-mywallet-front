
import styled from "styled-components";
import IncomePageInput from "./PageInput";

export default function Income(){


    return (

        <IncomePageContainer>

            <MainTitle><p>Nova entrada</p></MainTitle>

            <IncomePageInput></IncomePageInput>

        </IncomePageContainer>
    )
}


const IncomePageContainer = styled.div`
  height: 700px;
  align-items: center;
  margin: auto;
  display: flex;
  flex-direction: column;
  background-color: rgb(140, 16, 190);
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