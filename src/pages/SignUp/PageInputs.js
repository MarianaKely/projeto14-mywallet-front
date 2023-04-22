
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignUpInputs() {

  const navigate = useNavigate();
  const [personalUser, setPersonalUser] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [parole, setParole] = useState("")

   function signup(parameter){
    
    const subAnalysis = {

      name: personalUser,
      email: email,
      password: password,
      confirmPassword: parole

    }

    const nextPage = axios.post(`${process.env.REACT_APP_API_URL}/sign-up`, subAnalysis);

           nextPage.then(ok => {

                navigate("/")
                alert(ok.data)

            });

            nextPage.catch(error => {

                alert(error.message)

            });

        parameter.preventDefault()

   }


    return (

      <Form onSubmit={signup}>

        <BigBox htmlFor="name">
          <Input placeholder="Nome" type="text" id="name" value={personalUser} onChange={(parameter) => setPersonalUser(parameter.currentTarget.value)}></Input>
        </BigBox>

        <BigBox htmlFor="email">
          <Input placeholder="E-mail" type="text" id="email" value={email} onChange={(parameter) => setEmail(parameter.currentTarget.value)}></Input>
        </BigBox>

        <BigBox htmlFor="password">
          <Input placeholder="Senha" type="text" id="password"  value={password} onChange={(parameter) => setPassword(parameter.currentTarget.value)}></Input>
        </BigBox>

        <BigBox htmlFor="confirm-password">
          <Input placeholder="Confirme a senha" type="text" id="password"  value={parole} onChange={(parameter) => setParole(parameter.currentTarget.value)} ></Input>
        </BigBox>

        <Button type="submit" id="submitbutton">
          <p>Cadastrar</p>
        </Button>
      </Form>
    );
  }
  
  export default SignUpInputs;
  
  const Form = styled.form`
    
    width: 330x;
    display: flex;
    flex-direction: column;

  `;
  
  const BigBox = styled.label`

    display: flex;
    flex-direction: column;
    margin-bottom: 13px;

  `;
  
  const Input = styled.input`

    width: 326px;
    height: 58px;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    border-radius: 5px;

    &::placeholder {

         color: black;
  
     }
  `;

  const Button = styled.button`
     
    width: 326px;
    height: 46px;
    border-style: none;
    border-radius: 5px;
    border-radius: 4.63636px;
    background: #a328d6;
    
    p {
      
      color: #FFFFFF;
      font-weight: 700;
      font-size: 20px;
      line-height: 23px;
      

    }
  `;