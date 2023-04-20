

import styled from "styled-components";
import { UserContext } from "../../components/Context";
import { useState, useEffect, useContext } from "react";
import { IoLogOutOutline } from "react-icons/io5";
import { IoAddCircleOutline } from "react-icons/io5";
import { IoRemoveCircleOutline } from "react-icons/io5";
import axios from "axios";
import { Link , useNavigate } from 'react-router-dom';


function MainPage() {

  
  const [balance, setBalance] = useState(0);
  const [whiteboard, setWhiteboard] = useState([]);
  const { internalAnalysis } = useContext(UserContext);
  const token = internalAnalysis;
  const navigate = useNavigate();


  function prohibited(){

    const storage = `${process.env.REACT_APP_API_URL}/cash`;
    const tokenAnalysis = { headers: { Authorization: `Bearer ${token}` } };
    const enter = axios.get(storage, tokenAnalysis);

    enter.then((response) => {
      setBalance(response.data);

  });

  }

  useEffect(() => {

    const storage = `${process.env.REACT_APP_API_URL}/whiteboard`;
    const tokenAnalysis = { headers: { Authorization: `Bearer ${token}` } };
    const cadastre = axios.get(storage, tokenAnalysis);

    cadastre.then((response) => {

      setWhiteboard(response.data);
      prohibited()

    });

    cadastre.catch((error) => {

      console.log(error)
      alert("Seu token expirou");
      navigate('/')

    });

  }, [setWhiteboard]);
  


  return (

    <MainPageContainer>

      <TopContainer>

        <p>Olá {whiteboard.name}!</p>

        <LeaveIcon onClick={() => {

          navigate('/');

        }}/>
        
      </TopContainer>

      <SubContainer>

        <BigBox>

        {!whiteboard.wallet || whiteboard.wallet.length === 0 ? (

          <MainTitle><p>Não há registros de entrada ou saída</p></MainTitle>

        ) : (

          whiteboard.wallet.map((entry, index) => (

            <SecondBox key={index}>

            <div style={{display:'flex'} }>
            <h1>{entry.date}</h1>
            <h2>{entry.description}</h2>
            </div>
            <p className={entry.type === 'withdraw' ? 'red' : entry.type === 'deposit' ? 'green' : ''}>
              {Number(entry.value).toFixed(2)}
            </p>

          </SecondBox>

          ))
        )}

        </BigBox>

        {whiteboard.wallet && whiteboard.wallet.length > 0 ? 

        <Cash>

          <div style={{display:'flex', justifyContent:'space-between'}}>
              <h1 style={{marginLeft:30}}> Saldo: </h1>
              <div style={{marginRight:30}}><h2 className={balance > 0 ? "green" : "red"}>{balance}</h2></div>
          </div>

        </Cash>: <></>}


      </SubContainer>

      <BottomContainer>

      <Link to='/nova-entrada'>

        <New >
          <p>Nova entrada</p>
          <Plus />
        </New > 

        </Link>

      <Link to='/nova-saida'>

        <New>
          <p>Nova saída</p>
          <Minus />
        </New>

        </Link>

      </BottomContainer>

    </MainPageContainer>
    
  );
}

export default MainPage;

const MainPageContainer = styled.div`
  height: 700px;
  align-items: center;
  margin: auto;
  display: flex;
  flex-direction: column;
  background-color: rgb(140, 16, 190);
`;

const TopContainer = styled.div`
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

const LeaveIcon = styled(IoLogOutOutline)`
  font-size: 30px;
  color: #ffffff;
`;

const SubContainer = styled.div`
  align-items: center;
  width: 326px;
  height: 446px;
  background: #ffffff;
  border-radius: 5px;
  margin-bottom: 13px;
  overflow:auto;
  
  .red{
    color:red;
}
.green{
    color:green;
}
position:relative;
`;

const BottomContainer = styled.div`
  width: 326px;
  display: flex;
  justify-content: space-between;
`;

const New = styled.div`
  position: relative;
  width: 155px;
  height: 114px;
  background: #a328d6;
  border-radius: 5px;
  p {
    width: 1px;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    position: absolute;
    bottom: 15px;
    left: 10px;
    color: #ffffff;
  }
`;

const Minus = styled(IoRemoveCircleOutline)`
  top: 10px;
  left: 10px;
  position: absolute;
  font-size: 22px;
  color: #ffffff;
`;

const Plus = styled(IoAddCircleOutline)`
  top: 10px;
  left: 10px;
  position: absolute;
  font-size: 22px;
  color: #ffffff;
`;

const SecondBox = styled.div`
  margin-top:9px;
  display:flex;
  justify-content:space-between;
  h2{
    margin-left:8px;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
  }
  h1{
    margin-left:3px;
    font-size: 16px;
    line-height: 19px;
    color: #C6C6C6;
  }
  p{
    margin-right:3px;
  }
`;
const Cash = styled.div`
  width: 100%;
  position:absolute;
  bottom:10px;
  .red{
    color:red;
}
.green{
    color:green;
}
  
`;

const BigBox = styled.div`
  width: 100%;
  height:93%;
  overflow:auto;
  
`;

const MainTitle = styled.div`
font-size: 20px;
color: #868686;
position:absolute;
text-align: center;
align-items:center;
margin:auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`