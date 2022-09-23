import React from 'react'
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

const ApplyCheck = () => {
    const navigate = useNavigate();


  return (
    <>
    <Stcontainer>
        <StDiv style={{justifyContent:'flex-start'}}>
            <img
            alt='뒤로가기'
            src='img/backspace.png'
            style={{ width: '25px', height: '25px', marginRight:'10px' }}
            onClick={() => navigate('-1')}
            />
            <h3>지원 확인</h3>
        
        </StDiv>
        <Card>
            <Body>
                <img />
                <p>
                    닉네임1 님이 영화보러 갈 사람 모아봅니다 모임에 참여를 신청했습니다. 
                </p>
            </Body>
                <Btn>
                    <AcceptButton>수락</AcceptButton>
                    <RefuseButton>거절</RefuseButton>
                </Btn>
         </Card>
         <Card>
            <Body>
                <img />
                <p>
                    닉네임1 님이 영화보러 갈 사람 모아봅니다 모임에 참여를 신청했습니다. 
                </p>
            </Body>
                <Btn>
                    <AcceptButton>수락</AcceptButton>
                    <RefuseButton>거절</RefuseButton>
                </Btn>
         </Card>

         
    </Stcontainer>
    </>
  )
}

export default ApplyCheck


const StDiv = styled.div`
  width: 335px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  margin-top: 70px;

    /* border: 1px solid transparent;
    width: 30px;
    height: 30px;
    font-weight: bold;
    border-radius: 100%;
    color: #ffffff;
    background-color: #18a0fb; */
`

const Stcontainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Card = styled.div`
  width: 335px;
  height: 150px;
  border: 1px solid grey;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`

const Body = styled.div`
  width: 335px;
  height: 150px;
  display: flex;
  justify-content: space-between;
  
  img {
    width: 50px;
    height: 40px;
    border-radius: 100%;
    background-color: #D9D9D9;
    margin-top: 15px;
    margin-right: 10px;
    margin-left: 20px;
  }
  p {
    font-size: 11px;
    margin-top: 20px;
    margin-right: 20px;
  }

`

const Btn = styled.div`
    display: flex;
    justify-content: center;
    
`

const AcceptButton = styled.button`
    height: 40px;
    width: 113px;
    padding: 0 10px;
    margin-bottom: 30px;
    margin-right: 5px;
    border: transparent;
    border-radius: 5px;
    outline: none;
    background-color:#2196F3;
    color:white;
    cursor: pointer;
    :hover {
        filter: brightness(95%);}
`  

const RefuseButton = styled.button`
    height: 40px;
    width: 113px;
    padding: 0 10px;
    margin-bottom: 30px;
    margin-left: 5px;
    border: transparent;
    border-radius: 5px;
    outline: none;
    background-color: #D9D9D9;
    color:white;
    cursor: pointer;
    :hover {
        filter: brightness(95%);}
`