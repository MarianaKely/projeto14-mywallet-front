
import styled from "styled-components";
import { useState , useContext} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../components/Context";



  function IncomePageInput() {
    
    
    const [gain, setGain] = useState("")
    const [description, setDescription] = useState("")
    const { internalAnalysis } = useContext(UserContext);
    const token = internalAnalysis;
    const navigate = useNavigate();
    
    function TheIncome(parameter){
      
        const subAnalysis = {

          value: gain,
          description : description,
          type : "TheIncome"
        }

        const tokenAnalysis = { headers: { Authorization: `Bearer ${token}` } };
        const nextPage = axios.post(`${process.env.REACT_APP_API_URL}/transfer`, subAnalysis, tokenAnalysis);

               nextPage.then(ok => {

                    alert(ok.statusText)
                    navigate("/home")

                });

                nextPage.catch(error => {

                    alert(error.message)

                });
      
                parameter.preventDefault()

       }


  return (
    <Form onSubmit={TheIncome}>

      <BigBox htmlFor="valor">
        <Input placeholder="Valor" type="text" id="valor" value={gain} onChange={(parameter) => setGain(parameter.currentTarget.value.replace(/,/g, '.'))}></Input>
      </BigBox>

      <BigBox htmlFor="descricao">
        <Input placeholder="Descrição" type="text" id="descricao" value={description} onChange={(parameter) => setDescription(parameter.currentTarget.value)}></Input>
      </BigBox>

      <Button type="submit" id="submitbutton">
        <p>Salvar entrada</p>
      </Button>

    </Form>
  );
}

export default IncomePageInput;

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
  border-radius: 5px;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;

  &::placeholder {

       color: black;

   }
`;

const Button = styled.button`

  width: 326px;
  height: 46px;
  border-style: none;
  background: #a328d6;
  border-radius: 5px;

  p {

    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    color: #FFFFFF;

  }
`;