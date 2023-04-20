
import styled from "styled-components";
import { useState , useContext} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../components/Context";



  function IncomePageInput() {
    
    const navigate = useNavigate();
    const [gain, setGain] = useState("")
    const [description, setDescription] = useState("")
    const { internalAnalysis } = useContext(UserContext);
    const token = internalAnalysis;
    function deposit(s){
      
        const subAnalysis = {
          value: gain,
          description : description,
          type : "deposit"
        }
        const tokenAnalysis = { headers: { Authorization: `Bearer ${token}` } };
        const nextPage = axios.post(`${process.env.REACT_APP_API_URL}/transfer`, subAnalysis, tokenAnalysis);
               nextPage.then(ok => {
                    navigate("/home")
                });
                nextPage.catch(error => {
                    alert(error.message)
                    console.log(error)
                });
      
        s.preventDefault()
       }


  return (
    <Form onSubmit={deposit}>

      <BigBox htmlFor="valor">
        <Input placeholder="Valor" id="valor" type="text" value={gain} onChange={(s) => setGain(s.currentTarget.value.replace(/,/g, '.'))}></Input>
      </BigBox>

      <BigBox htmlFor="descricao">
        <Input placeholder="Descrição" id="descricao" type="text" value={description} onChange={(s) => setDescription(s.currentTarget.value)}></Input>
      </BigBox>

      <Button type="submit" id="submitbutton">
        <p>Salvar entrada</p>
      </Button>

    </Form>
  );
}

export default IncomePageInput;

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