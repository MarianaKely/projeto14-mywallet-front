
import styled from "styled-components";
import { useState , useContext} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../components/Context";



  function ExpansePageInputs() {

    
    const [total, setTotal] = useState("")
    const [description, setDescription] = useState("")
    const { internalAnalysis } = useContext(UserContext);
    const token = internalAnalysis;
    const navigate = useNavigate();

    function withdraw(s){
      
        const subAnalysis = {

          value: total,
          description : description,
          type : "withdraw"

        }
        const tokenAnalysis = { headers: { Authorization: `Bearer ${token}` } };
        const nextPage = axios.post(`${process.env.REACT_APP_API_URL}/transfer`, subAnalysis, tokenAnalysis);

                nextPage.then(ok => {

                    alert(ok.statusText)
                    navigate("/home")

                });

                nextPage.catch(error => {

                    alert(error.message)
                    console.log(error)

                });
      
        s.preventDefault()
       }

  return (
    
    <Form onSubmit={withdraw}>

      <BigBox htmlFor="valor">
      <Input placeholder="Valor" id="valor" type="text" value={total} onChange={(s) => setTotal(s.currentTarget.value.replace(/,/g, '.'))}></Input>
      </BigBox>

      <BigBox htmlFor="descricao">
      <Input placeholder="Descrição" id="descricao" type="text" value={description} onChange={(s) => setDescription(s.currentTarget.value)}></Input>
      </BigBox>

      <Button type="submit" id="submitbutton">
        <p>Salvar saída</p>
      </Button>

    </Form>
    
  );
}

export default ExpansePageInputs;

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