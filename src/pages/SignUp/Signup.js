
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import SignUpInputs from "./PageInputs";


function Signup() {

  const navigate = useNavigate();


  return (

    <PageContainer>

      <MainTitle>My Wallet</MainTitle>

      <SignUpInputs></SignUpInputs>

      <ToForward>

      <p           
          onClick={() => {
          navigate('/');
        }}>Já tem uma conta? Entre agora!</p>

      </ToForward>

    </PageContainer>

  );
}


export default Signup

const PageContainer = styled.div`

  height:660px;
  display: flex;
  flex-direction: column;
  align-items:center;
  margin: auto;
  background-color: rgb(140, 16, 190)

`;

const MainTitle = styled.h1`

  font-family: "Saira Stencil One";
  font-weight: 400;
  font-size: 32px;
  line-height: 50px;
  color: #FFFFFF;
  margin-top:95px;
  margin-bottom:24px;

`;

const ToForward = styled.p`

margin-top:36px;
font-weight: 700;
font-size: 15px;
line-height: 18px;
color: #FFFFFF; 

` 