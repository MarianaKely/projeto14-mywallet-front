
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

   function signup(s){
    
    const subAnalysis = {

      name: personalUser,
      email: email,
      password: password,
      confirmPassword: parole

    }

    const nextPage = axios.post(`${process.env.REACT_APP_API_URL}/sign-up`, subAnalysis);

           nextPage.then(ok => {

                console.log(ok)
                navigate("/")
                alert(ok.data)

            });

            nextPage.catch(error => {

                alert(error.message)
                console.log(error)

            });

    s.preventDefault()

   }


    return (

      <Form onSubmit={signup}>

        <BigBox htmlFor="name">
          <Input placeholder="Nome" id="name" type="text" value={personalUser} onChange={(s) => setPersonalUser(s.currentTarget.value)}></Input>
        </BigBox>

        <BigBox htmlFor="email">
          <Input placeholder="E-mail" id="email" type="text" value={email} onChange={(s) => setEmail(s.currentTarget.value)}></Input>
        </BigBox>

        <BigBox htmlFor="password">
          <Input placeholder="Senha" id="password" type="text" value={password} onChange={(s) => setPassword(s.currentTarget.value)}></Input>
        </BigBox>

        <BigBox htmlFor="confirm-password">
          <Input placeholder="Confirme a senha" id="password" type="text" value={parole} onChange={(s) => setParole(s.currentTarget.value)} ></Input>
        </BigBox>

        <Button type="submit" id="submitbutton">
          <p>Cadastrar</p>
        </Button>
      </Form>
    );
  }
  
  export default SignUpInputs;
  
  const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 330x;
  `;
  
  const BigBox = styled.label`
    display: flex;
    flex-direction: column;
    margin-bottom: 13px;
  `;
  
  const Input = styled.input`
    width: 326px;
    height: 58px;
    border-radius: 5px;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    &::placeholder {
         color: black;
  
     }
  `;
  const Button = styled.button`
    border-style: none;
    background: #a328d6;
    border-radius: 5px;
    border-radius: 4.63636px;
    width: 326px;
    height: 46px;
    p {
      font-weight: 700;
      font-size: 20px;
      line-height: 23px;
      color: #FFFFFF;
    }
  `;