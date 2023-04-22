
import axios from "axios";
import { useState , useContext} from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../components/Context";
import styled from "styled-components";



  function ExpansePageInputs() {

    
    const [total, setTotal] = useState("")
    const [description, setDescription] = useState("")
    const { internalAnalysis } = useContext(UserContext);
    const token = internalAnalysis;
    const navigate = useNavigate();

    function TheExpense(parameter){
      
        const subAnalysis = {

          value: total,
          description : description,
          type : "TheExpense"

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
    
    <Form onSubmit={TheExpense}>

      <BigBox htmlFor="valor">
      <Input placeholder="Valor" type="text" id="valor" value={total} onChange={(parameter) => setTotal(parameter.currentTarget.value.replace(/,/g, '.'))}></Input>
      </BigBox>

      <BigBox htmlFor="descricao">
      <Input placeholder="Descrição" type="text" id="descricao" value={description} onChange={(parameter) => setDescription(parameter.currentTarget.value)}></Input>
      </BigBox>

      <Button type="submit" id="submitbutton">
        <p>Salvar saída</p>
      </Button>

    </Form>
    
  );
}

export default ExpansePageInputs;

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
  border-radius: 4.63636px;
  
  p {

    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    color: #FFFFFF;

  }
  
`;