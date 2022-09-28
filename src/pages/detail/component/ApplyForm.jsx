import React from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";


const ApplyForm = () => {
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
        <h3>지원 신청하기</h3>
      </StDiv>

    <Body>
      <ApplyTitle>
        <p> 모임명</p>
        <div> 영화 볼 사람</div>
      </ApplyTitle>
        <p>나를 소개해주세요</p>
      <Textarea
          placeholder='나를 소개하는 이야기를 입력해주세요.' />
    </Body>
    </Stcontainer>
    <Btn>
      <BackButton onClick={() => {navigate(-1);}}>이전으로</BackButton>
      <OkButton>확인</OkButton>
    </Btn>  
      </>
  )
}

export default ApplyForm

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

const Body = styled.div`
  height: 300px;
  p {
        font-size: 11px;
        display: flex;
        flex-direction: column;
        margin-bottom: 5px;
      }

`

const ApplyTitle = styled.h4`
    border: 1px solid transparent;
    background-color:#D9D9D9;
    color: black;
    padding: 12px;
    height: 40px;
    display: flex;
    justify-content: center;
    flex-direction: column;
      div {
        font-size: 15px;
        font-weight: bold;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-bottom: 7px;
        }
`

const Textarea = styled.textarea`
  box-sizing: border-box;
  width: 237px;
  min-height: 150px;
  resize: none;
  outline: none;
  border-radius: 3px;
  padding: 12px;
  font-size: 14px;
  border: 1px solid grey;
  :focus {
    outline: none;
    border-color: #18a0fb;
    box-shadow: 0 0 5px #18a0fb;
  }
`;
const Btn = styled.div`
    display: flex;
    justify-content: center;
`
const BackButton = styled.button`
    height: 40px;
    width: 113px;
    padding: 0 10px;
    margin-top: 20px;
    margin-right: 5px;
    border: transparent;
    border-radius: 5px;
    outline: none;
    background-color:#D9D9D9;
    color:white;
    cursor: pointer;
    :hover {
        filter: brightness(95%);}
`  
const OkButton = styled.button`
    height: 40px;
    width: 113px;
    padding: 0 10px;
    margin-top: 20px;
    margin-left: 5px;
    border: transparent;
    border-radius: 5px;
    outline: none;
    background-color: #2196F3;
    color:white;
    cursor: pointer;
    :hover {
        filter: brightness(95%);}
`