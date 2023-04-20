
import styled from "styled-components";
import LoginPageInput from "./PageInputs";
import { useNavigate } from "react-router-dom";


export default function SignIn() {

  const navigate = useNavigate();


  return (

    <LoginPageContainer>

      <MainTitle>My Wallet</MainTitle>

      <LoginPageInput></LoginPageInput>

      <ToForward>
        <p onClick={() => {
          navigate('/cadastro');
        }}>Primeira vez? Cadastre-se!</p>
      </ToForward>

    </LoginPageContainer>
  );
}

const LoginPageContainer = styled.div`
  height:660px;
  align-items:center;
  margin: auto;
  display: flex;
  flex-direction: column;
  background-color: rgb(140, 16, 190)
`;

const MainTitle = styled.h1`
  font-family: "Saira Stencil One";
  font-weight: 400;
  font-size: 32px;
  line-height: 50px;
  color: #FFFFFF;
  margin-top:159px;
  margin-bottom:24px;
`;

const ToForward = styled.p`
margin-top:36px;
font-weight: 700;
font-size: 15px;
line-height: 18px;
color: #FFFFFF;
`